import React from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';

const YourApp = () => {
  const [imc, setImc]= React.useState("IMC!");
  const [altura, onChangeTextAltura] = React.useState(1);
  const [peso, onChangeTextPeso] = React.useState(2);
  const onPressText = () => {setImc(peso/(altura*altura))}
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText = {altura => onChangeTextAltura(altura)}
        placeholder="altura em metros"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText = {peso => onChangeTextPeso(peso)}
        placeholder="peso em kg"
        keyboardType="numeric"
      />

      <Text style={styles.text}>
        <Text onPress={onPressText}>
          {imc}
        </Text>
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 30
  },
});
export default YourApp;