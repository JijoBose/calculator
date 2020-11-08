/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Numbers from '../src/components/Numbers';

const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['.', '0', '=', '-'],
];
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const App = () => {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState(null);
  const [preVal, setPreVal] = useState('');
  const [nextVal, setNextVal] = useState('');

  const calculations = (num) => {
    console.log(num);
    switch (operator) {
      case '+':
        setResult(result + num);
        break;
      case '-':
        setResult(result - num);
        break;
      case 'x':
        setResult(result * num);
        break;
      case '÷':
        setResult(result / num);
        break;
      default:
        break;
    }
  };

  const onNumberTap = (num) => {
    if (['÷', 'x', '+', '=', '-'].includes(num)) {
      setOperator(num);
    } else if (['CLEAR', 'DEL'].includes(num)) {
      setResult('');
      setNextVal('');
      setPreVal('');
      setOperator(null);
    } else {
      // console.log('Operator: ' + operator);
      // console.log('result: ' + result);
      // console.log('number: ' + num);
      if (result === 0 && operator === null) {
        let res = result + preVal + num;
        console.log(res);
        setPreVal(res);
      }
      if (operator !== null) {
        calculations(Numbers(preVal));
      }
      // if (operator !== null) {
      //   calculations(Number(num));
      // } else {
      //   // let nextData =
      //   setResult(num);
      // }
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.mainView}>
          <View style={styles.outputView}>
            <View style={styles.mainResult}>
              <Text style={styles.resultView}>
                {result || preVal} {operator}
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <Numbers buttons={buttons} onNumberTap={onNumberTap} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: height,
  },
  outputView: {
    height: height * 0.2,
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultView: {
    fontSize: 80,
  },
  body: {
    height: height * 0.8,
    backgroundColor: 'white',
  },
});

export default App;
