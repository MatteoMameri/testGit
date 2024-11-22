import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function B() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen B</Text>
      <Button title="Go to Screen A" onPress={() => navigation.navigate('A')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
