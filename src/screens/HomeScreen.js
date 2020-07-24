import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TransitionScreen')}
      >
        <Text>TransitionScreen</Text>
      </TouchableOpacity>
    </View>
  );
};