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
import { Card } from './../components/Card.js';

const { width } = Dimensions.get('window');
const MARGIN = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
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
const transition = (
  <Transition.Change durationMS={400} interpolation="easeInOut" />
);

export const TransitionScreen = () => {
  const ref = React.useRef(null);
  const [currentLayout, setCurrentLayout] = React.useState(layouts[0].layout);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Transitioning.View
        style={[styles.container, currentLayout.container]}
        {...{ ref, transition }}
      >
        <Card currentLayout={currentLayout} />
        <Card currentLayout={currentLayout} />
        <Card currentLayout={currentLayout} />
      </Transitioning.View>
      <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
        {layouts.map(layout => (
          <TouchableOpacity
            key={layout.id}
            style={styles.button}
            name={layout.name}
            onPress={() => {
              if (ref.current) {
                ref.current.animateNextTransition();
              }
              setCurrentLayout(layout.layout);
            }}
          >
            <Text style={styles.buttonText}>{layout.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};