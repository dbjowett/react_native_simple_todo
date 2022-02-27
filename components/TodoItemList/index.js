import { FlatList } from 'react-native';
import TodoItem from '../TodoItem';

export default function TodoItemList({ todoArray }) {
  return (
    <FlatList
      data={todoArray}
      renderItem={(currentItem) => {
        return <TodoItem data={currentItem} />;
      }}
    />
  );
}
