import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const handlebuttonMinus = () => {
    setCount(count-1);
  };

  const handlebuttonPlus = () => {
    setCount(count+1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <Text style={styles.title}>My Counter</Text>
      </View>
      <View style={styles.Box}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.buttonMinus} onPress={handlebuttonMinus} disabled={count <= 0}> 
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPlus} onPress={handlebuttonPlus} disabled={count >= 22}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3ED',
  },
  Box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#46373B',
    fontSize: 50,
    fontWeight: 'bold',
  },
  count: {
    flex: 1,
    color: '#725960',
    fontSize: 150,
    marginTop: 30
  },
  buttonBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 30
  },
  buttonMinus: {
    backgroundColor: '#155B92',
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  buttonPlus: {
    backgroundColor: '#CC4635',
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  buttonText:{
    color: 'white',
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: '500',
    paddingTop: 3

  }
  
});
