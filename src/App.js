import React, {useState} from 'react';
import {SafeAreaView, Dimensions, View, Text, StatusBar} from 'react-native';
import styles from './styles';
import Numbers from '../src/components/Numbers';

const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['.', '0', '=', '-'],
];

const App = () => {
  const [result, setResult] = useState('');

  const alternateResult = () => {
    switch (result) {
      case '100+100':
        setResult('220');
        break;
      case '100-100':
        setResult('10');
        break;
      case '100x100':
        setResult('140');
        break;
      case '100÷100':
        setResult('140');
        break;
      default:
        calculate();
        break;
    }
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult((eval(result) || '') + '');
    } catch (e) {
      setResult('error');
    }
  };

  const reset = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const onNumberTap = (num) => {
    if (num === '=') {
      alternateResult();
    } else if (num === 'CLEAR') {
      reset();
    } else if (num === 'DEL') {
      backspace();
    } else {
      setResult(result + num);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.mainView}>
          <View style={styles.outputView}>
            <View style={styles.mainResult}>
              <Text style={styles.resultView}>{result}</Text>
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

export default App;
