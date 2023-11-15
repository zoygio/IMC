import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <IMC />
    </View>
  );
}

function IMC() {
  const [peso, setPeso] = useState('1');
  const [altura, setAltura] = useState('1');
  const [IMC, setIMC] = useState('0');

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (!isNaN(pesoFloat) && !isNaN(alturaFloat) && alturaFloat !== 0) {
      const IMCCalculado = pesoFloat / alturaFloat ** 2;
      setIMC(IMCCalculado.toFixed(2));
    } else {
      setIMC('0');
    }
  };

  return (
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.title}>Peso (KG)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={(text) => setPeso(text)}
        />
      </View>

      <View>
        <Text style={styles.title}>Altura (M)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={(text) => setAltura(text)}
        />
      </View>

      <View style={styles.calContainer}>
        <TextInput
          style={styles.result}
          value={IMC}
          editable={false}
        />
        <Button title="Calcular" onPress={calcularIMC} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  calContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
