import { View, TextInput, Button } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function TodoInput({ setTodoArray }) {
  const [todo, setTodo] = useState('');

  function addTodo() {
    setTodoArray((prev) => [...prev, { id: Math.random().toString(), value: todo }]);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Todos'
        style={styles.textInput}
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button title='Add' style={styles.button} onPress={addTodo} />
    </View>
  );
}
