import { Text, View } from "react-native";
import {useVideoPlayer, VideoView} from 'expo-video'
import { globalStyles } from "@/styles/global";

type VideoPlayersProps = {
  video: {
    id: string;
    course: string;
    batch: number;
    major: string;
    semester: number;
    lesson: number;
    title: string;
    videoUrl: string;
    duration: number;
  };
};

export default function VideoPlayers({ video }: VideoPlayersProps) {
  const player = useVideoPlayer(video.videoUrl)
    

  return (
    <View>
      <Text>Class : {video.course}</Text>
      <Text>Batch : {video.batch}</Text>
      <Text>Semester : {video.semester}</Text>
      <Text>Module/Major : {video.major}</Text>

       {/* Your video player */}
      <VideoView player={player}/>
      <Text style={globalStyles.title}> Lesson - {video.lesson} ( {video.title} ) </Text>

      
    </View>
  );
}