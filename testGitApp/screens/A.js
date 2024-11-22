import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function A() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen A</Text>
      <Button title="Go to Screen B" onPress={() => navigation.navigate('B')} />
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
