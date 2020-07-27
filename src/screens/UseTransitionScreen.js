import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  Transition,
  Transitioning,
} from "react-native-reanimated";

const { width } = Dimensions.get('window');
const MARGIN = 5;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 15,
    marginHorizontal: MARGIN,
    marginVertical: 5,
    flex: 1,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    width,
  }
});

export const UseTransitionScreen = () => {

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

      </View>
    </SafeAreaView>
  )
}