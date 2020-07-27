import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const MARGIN = 5;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: MARGIN,
    marginVertical: 5,
    flex: 1,
  },
})

export const Card = ({ currentLayout }) => {
  const [color, setColor] = React.useState('');
  const [height, setHeight] = React.useState(null);

  React.useEffect(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${red},${green},${blue})`);
  }, []);

  return (
    <View
      style={[styles.container, currentLayout.child,
      { backgroundColor: color, height }]}
      onLayout={
        ({ nativeEvent }) =>
          setHeight(nativeEvent.layout.width * 2 / 3)
      }
    ></View>
  );
};