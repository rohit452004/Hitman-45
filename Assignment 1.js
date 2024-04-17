import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const name = "Y. Mohamed Idris";
  const regNo = "22MIA1005";
  const [backgroundColor, setBackgroundColor] = useState('#e6e6e6');

  const handleBackgroundChange = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  const handleButton1 = () => {
    // Add your functionality for Button 1 here
    alert("Button 1 pressed!");
  };

  const handleButton2 = () => {
    // Add your functionality for Button 2 here
    alert("Button 2 pressed!");
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Registration No: {regNo}</Text>
      <Button title="Change Background Color" onPress={handleBackgroundChange} />
      <Button title="Button 1" onPress={handleButton1} />
      <Button title="Button 2" onPress={handleButton2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
});

export default HomeScreen;
