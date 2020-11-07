//React Modules
import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';

//Styles
import styles from './styles';

const Numbers = (props) => {
  const handleOnPress = (value) => {
    requestAnimationFrame(() => {
      props.onNumberTap(value);
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
              <View
                style={[
                  styles.contButton,
                  !Number.isInteger(parseInt(col)) ? styles.operatorKey : null,
                ]}>
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
