import Header from '@/components/Header';
import Task from '@/components/Tasks';
import { tasks } from '@/data/tasks';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "red",
    height: "100%",
    paddingVertical: 4,
  }
})

export default function RootLayout() {

  return (
    <SafeAreaView>
      <Header />
      <View style={s.container}>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id.toString()}
          renderItem={({item}) => <Task id={item.id} title={item.title} />}
          style={{width: "100%", height: "100%"}}
        />
      </View>
    </SafeAreaView>
  );
}