import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Regform from './components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Regform/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight:60,
    
  },
  
});
