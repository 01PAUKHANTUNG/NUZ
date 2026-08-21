import { useVideoPlayer, VideoView } from "expo-video";
import { View } from "react-native";

type VideoPlayersProps = {
  video: {
    id: string;
    course: string;
    batch: number;
    semester: number;
    module: string;
    lesson: number;
    title: string;
    videoUrl: string;
    duration: number;
  };
};

export default function DownloadVideo({ video }: VideoPlayersProps) {
  const player = useVideoPlayer(video.videoUrl);

  return (
    <View>
      <VideoView
        player={player}
        style={{
          width: "100%",
          height: 300,
        }}
        nativeControls
        fullscreenOptions={{
          enable: true,
        }}
      />
    </View>
  );
}