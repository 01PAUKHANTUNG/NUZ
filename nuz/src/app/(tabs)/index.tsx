import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/global";
import "../../styles/global.css";
import { useContext, useEffect, useState } from "react";
import { lessons } from "../../../assets/products";
import { Picker } from "@react-native-picker/picker";
import VideoPlayers from "../../components/VidoePlayers";
import { VideoView } from "expo-video";
import Login from "../login";
import { NUZContext } from "@/context/NUZContext";



export default function Index() {
  const [semester, setSemester] = useState<string>();
  const [module, setModule] = useState<string>();
  const [batch, setBatch] = useState<string>();
  const [course, setCourse] = useState<string>();
  const [lesson, setLesson ] = useState<string>();
  const [currentVdPlay, setCurrentVdPlay] = useState<string>();
  const {token} = useContext(NUZContext);

  const selectedVideos = lessons.filter((item) =>
      item.course === course &&
      item.batch === Number(batch) &&
      item.semester === Number(semester) &&
      item.major === module &&
      item.lesson === Number(lesson)
  );



  return (
    
    <ScrollView>
      {token === '' ? <Login /> :
     
     <ScrollView > 
      <Text style={globalStyles.title}>Hello, Peter!</Text>

      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={globalStyles.paragrahp1}>
          Master of Public Affairs
        </Text>
        <Text style={globalStyles.paragrahp2}>
          Batch 2
        </Text>
      </View>

      

      {/* Course */}
      <View style={{ marginBottom: 5 }}>
        <Text>Course</Text>
        <Picker
          style={globalStyles.input}
          selectedValue={course}
          onValueChange={(value) => setCourse(value)}
        >
          <Picker.Item label="Select Course" value={undefined} />
          <Picker.Item label="MPA" value="MPA" />
          <Picker.Item label="LLB" value="LLB" />
        </Picker>
      </View>

      {/* Batch */}
      <View style={{ marginBottom: 5 }}>
        <Text>Batch</Text>     
        <Picker
          style={globalStyles.input}
          selectedValue={batch}
          onValueChange={(value) => setBatch(value)}
        >
          <Picker.Item label="Select Batch" value={undefined} />
          <Picker.Item label="Batch 1" value="1" />
          <Picker.Item label="Batch 2" value="2" />
          <Picker.Item label="Batch 3" value="3" />
        </Picker>
      </View>

      {/* Semester */}
      <View style={{ marginBottom: 5 }}>
        <Text>Semester</Text>

        <Picker
          style={globalStyles.input}
          selectedValue={semester}
          onValueChange={(value) => setSemester(value)}
        >
          <Picker.Item label="Select Semester" value={undefined} />
          <Picker.Item label="Semester 1" value="1" />
          <Picker.Item label="Semester 2" value="2" />
          <Picker.Item label="Semester 3" value="3" />
        </Picker>
      </View>

      {/* Module */}
      <View style={{ marginBottom: 5 }}>
        <Text>Module</Text>
        <Picker
          style={globalStyles.input}
          selectedValue={module}
          onValueChange={(value) => setModule(value)}
        >
          <Picker.Item label="Select Module" value={undefined} />
          <Picker.Item
            label="Environmental Science"
            value="Environmental Science"
          />
          <Picker.Item
            label="Academic Writing"
            value="Academic Writing"
          />
        </Picker>
      </View>

       {/* Lesson */}
      <View style={{ marginBottom: 5 }}>
        <Text>Lesson</Text>
        <Picker
          style={globalStyles.input}
          selectedValue={lesson}
          onValueChange={(value) => setLesson(value)}
        >
          <Picker.Item label="Select Module" value={undefined} />
          <Picker.Item
            label="Lesson 1"
            value="1"
          />
          <Picker.Item
            label="Lesson 2"
            value="2"
          />
        </Picker>
      </View>


      {/* Videos */}
      <View>
        {selectedVideos.length > 0 ? (
          selectedVideos.map((video) => (
            <VideoPlayers
              key={video.id}
              video={video}
            
            />
            
          ))
        ) : (
          <Text> Please select Course, Batch, Semester and Module. </Text>
        )}
      </View>
      </ScrollView>
      }

    </ScrollView>
  );
}