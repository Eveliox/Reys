// Usage: swift scripts/optimize-video.swift input.mp4 output.mp4
// Produces a silent 720p H.264 web background at a target 1.6 Mbps.
import AVFoundation
import Foundation
let source = URL(fileURLWithPath: CommandLine.arguments[1])
let destination = URL(fileURLWithPath: CommandLine.arguments[2])
let asset = AVURLAsset(url: source)
guard let track = asset.tracks(withMediaType: .video).first else { fatalError("No video track") }
let reader = try AVAssetReader(asset: asset)
let output = AVAssetReaderTrackOutput(track: track, outputSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange])
output.alwaysCopiesSampleData = false
reader.add(output)
let writer = try AVAssetWriter(outputURL: destination, fileType: .mp4)
writer.shouldOptimizeForNetworkUse = true
let input = AVAssetWriterInput(mediaType: .video, outputSettings: [
 AVVideoCodecKey: AVVideoCodecType.h264,
 AVVideoWidthKey: 1280,
 AVVideoHeightKey: 720,
 AVVideoScalingModeKey: AVVideoScalingModeResizeAspect,
 AVVideoCompressionPropertiesKey: [AVVideoAverageBitRateKey: 1_600_000, AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel, AVVideoMaxKeyFrameIntervalKey: 60]
])
input.expectsMediaDataInRealTime = false
writer.add(input)
writer.startWriting()
writer.startSession(atSourceTime: .zero)
reader.startReading()
while let sample = output.copyNextSampleBuffer() {
 while !input.isReadyForMoreMediaData && writer.status == .writing { Thread.sleep(forTimeInterval: 0.005) }
 guard input.append(sample) else { fatalError("Write failed: \(String(describing: writer.error))") }
}
guard reader.status == .completed else { fatalError("Read failed: \(String(describing: reader.error))") }
input.markAsFinished()
let done = DispatchSemaphore(value: 0)
writer.finishWriting { done.signal() }
done.wait()
guard writer.status == .completed else { fatalError("Export failed: \(String(describing: writer.error))") }
print("Silent, fast-start 720p video exported.")
