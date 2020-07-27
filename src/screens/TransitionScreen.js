import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const MARGIN = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
});

const column = {
  id: 'column',
  name: 'Column',
  layout: {
    container: {}
  }
}

const row = {
  id: 'row',
  name: 'Row',
  layout: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    }
  }
}

const wrap = {
  id: 'wrap',
  name: 'Wrap',
  layout: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    child: {
      flex: 0,
      width: width / 2 - MARGIN * 2
    }
  }
}

const currentLayout = wrap.layout;

export const TransitionScreen = () => {
  console.log('hello');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, currentLayout.container]}>
        <Card />
        <Card />
        <Card />
        <View>
          <Text>Testing</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Card = () => {
  const [color, setColor] = React.useState('');

  React.useEffect(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(red)
    console.log('CARD')
    setColor(`rgb(${red},${green},${blue})`);
  }, []);

  return (
    <View
      style={
        [
          {
            backgroundColor: color,
            borderRadius: 15,
            margin: MARGIN,
            flex: 1,
          },
          currentLayout.child
        ]
      }
    ></View>
  );
};