import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function TodoItem({ data, deleteTodo }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={deleteTodo.bind(this, data.item.id)}>
      <View style={styles.listItem} key={data.item.id} on>
        <Text style={styles.listText}>{data.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
}
