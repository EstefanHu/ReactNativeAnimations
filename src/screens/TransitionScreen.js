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
const MARGIN = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 15,
    marginHorizontal: MARGIN,
    marginVertical: 5,
    flex: 1,
    height: 200,
  },
  button: {
    padding: 15,
    width,
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
      flexWrap: 'wrap'
    },
    child: {
      flex: 0,
      width: width / 2 - MARGIN * 2
    }
  }
}

const layouts = [column, row, wrap];

export const TransitionScreen = () => {
  const [currentLayout, setCurrentLayout] = React.useState(layouts[0].layout);

  console.log(currentLayout)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, currentLayout.container]}>
        <Card currentLayout={currentLayout} />
        <Card currentLayout={currentLayout} />
        <Card currentLayout={currentLayout} />
      </View>
      <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
        {layouts.map(layout => (
          <TouchableOpacity
            key={layout.id}
            style={styles.button}
            name={layout.name}
            onPress={() => setCurrentLayout(layout.layout)}
          >
            <Text style={styles.buttonText}>{layout.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const Card = ({ currentLayout }) => {
  const [color, setColor] = React.useState('');
  const [cardWidth, setCardWidth] = React.useState(null);

  React.useEffect(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${red},${green},${blue})`);
  }, []);

  return (
    <View
      style={
        [styles.card,
        currentLayout.child,
        {
          backgroundColor: color,
          height: cardWidth * 2 / 3
        }]
      }
      onLayout={
        ({ nativeEvent }) =>
          setCardWidth(nativeEvent.layout.width)
      }
    ></View>
  );
};