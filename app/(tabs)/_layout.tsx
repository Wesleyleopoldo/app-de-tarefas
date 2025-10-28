import Header from '@/components/Header';
import Task from '@/components/Tasks';
import { tasks } from '@/data/tasks';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const s = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 4,
    height: "100%",
  },

  contentContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
});

export default function RootLayout() {
  const [list, setList] = useState(tasks);

  function onDelete(id: string) {
    setList(list.filter(item => item.id.toString() !== id))
  }

  function addItem(title: string) {
    setList([...list, { id: list.length, title: title }])
  }

  return (
    <SafeAreaView style={{backgroundColor: "#dcdcdc"}}>
      <Header addItem={addItem}/>
      <View style={s.container}>
        <FlatList
          data={list}
          keyExtractor={(task) => task.id.toString()}
          renderItem={({item}) => <Task onDelete={() => onDelete(item.id.toString())} id={item.id} title={item.title} />}
          contentContainerStyle={s.contentContainer}
        />
      </View>
    </SafeAreaView>
  );
}