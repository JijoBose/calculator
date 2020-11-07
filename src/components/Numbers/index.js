//React Modules
import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';

//Styles
import styles from './styles';

const Numbers = (props) => {
  //This will call the bound function from its parent component
  //to handle button press action/event
  const handleOnPress = (value) => {
    requestAnimationFrame(() => {
      this.props.onBtnPress(value);
    });
  };

  return (
    <View style={styles.container}>
      {props.buttons.map((row, index) => (
        <View key={index} style={styles.contRow}>
          {row.map((col, index) => (
            <TouchableNativeFeedback
              key={index}
              onPress={() => handleOnPress(col)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.contButton}>
                <Text style={styles.txtDefault}>{col}</Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Numbers;