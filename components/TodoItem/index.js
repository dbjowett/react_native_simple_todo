import { View, Text } from 'react-native';
import { styles } from './style';

export default function TodoItem({ data }) {
  return (
    <View style={styles.listItem} key={data.item.id}>
      <Text style={styles.listText}>{data.item.value}</Text>
    </View>
  );
}
