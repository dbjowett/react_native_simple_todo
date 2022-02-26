import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 40,
    height: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,

    width: '80%'
  },
  button: {
    marginTop: 10,
    width: 20
  },
  listItem: {
    alignItems: 'center',
    fontSize: 20,
    marginVertical: 10,
    padding: 20,
    width: '100%',
    borderRadius: 10
  }
});
