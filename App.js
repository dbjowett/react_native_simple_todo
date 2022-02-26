import { Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { styles } from './styles/homepage';
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function addTodo() {
    setTodoArray((prev) => [...prev, todo]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Todos' style={styles.textInput} value={todo} onChangeText={(text) => setTodo(text)} />
        <Button title='Add' style={styles.button} onPress={addTodo} />
      </View>
      <FlatList
        data={todoArray}
        renderItem={(data) => {
          let a = data.index === 0 ? '1' : 2 - `1.${data.index}`;
          if (a <= 0.5) a = 0.5;
          return (
            <View style={[styles.listItem, { backgroundColor: `rgba(92, 177, 141, ${a})` }]}>
              <Text style={{ fontSize: 16, color: 'white' }}>{data.item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
