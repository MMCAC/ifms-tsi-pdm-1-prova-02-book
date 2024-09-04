import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height * 0.20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#820B0B',
    width: "100%",
    paddingTop: 40,
  },
});
