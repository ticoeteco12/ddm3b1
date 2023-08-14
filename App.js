import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
  });


  const [sum, setSum] = useState(0);


  const handleInputChange = (inputName, value) => {
    setInputValues({...inputValues, [inputName]: value});
  };


  const handleSum = () => {
    const { input1 } = inputValues;
    const { input2 } = inputValues;
    const result = parseInt(input1) + parseInt(input2);
    setSum(result);
  };
  return (
  <View style={styles.container}>
    <Text style={styles.label}>input 1:</Text>
    <TextInput
      style={styles.input}
      onChangeText={(value) => handleInputChange('input1', value)}
      value={inputValues.input1}
      keyboardType="numeric"
    />
    <Text style={styles.label}>input 2:</Text>
    <TextInput
      style={styles.input}
      onChangeText={(value) => handleInputChange('input2', value)}
      value={inputValues.input2}
      keyboardType="numeric"
    />: value


    <Button title="Somar" onPress={handleSum}/>
    <Text style={styles.result}>Resultado: {sum}</Text>
  </View>
);
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    padding: 20,
  },
});


export default App;
