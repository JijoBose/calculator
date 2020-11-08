import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  mainView: {
    height: height,
  },
  outputView: {
    height: height * 0.2,
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  resultView: {
    fontSize: 80,
    color: 'white',
  },
  body: {
    height: height * 0.8,
    backgroundColor: 'white',
  },
};
