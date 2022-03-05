import { FlatList } from 'react-native';
import TodoItem from '../TodoItem';

export default function TodoItemList({ todoArray, setTodoArray }) {
  function deleteTodo(todoId) {
    setTodoArray(() => {
      return todoArray.filter((todo) => todo.id !== todoId);
    });
  }
  return (
    <FlatList
      data={todoArray}
      renderItem={(currentItem) => {
        return <TodoItem data={currentItem} deleteTodo={deleteTodo} />;
      }}
    />
  );
}
