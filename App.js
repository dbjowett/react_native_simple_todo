import { View } from 'react-native';
import { styles } from './styles/homepage';
import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoItemList from './components/TodoItemList';

export default function App() {
  const [todoArray, setTodoArray] = useState([]);

  return (
    <View style={styles.container}>
      <TodoInput setTodoArray={setTodoArray} />
      <TodoItemList todoArray={todoArray} />
    </View>
  );
}
