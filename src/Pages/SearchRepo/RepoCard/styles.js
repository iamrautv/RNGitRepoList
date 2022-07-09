import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  rowWrap: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  labelTxt: {
    width: 100,
    fontWeight: '500',
    marginLeft: 10,
  },
  contentTxt: {
    flex: 1,
  },
});

export default styles;
