import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  smallWrap: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  smallTxt: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
  largeWrap: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeTxt: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
  },
  defaultWrap: {
    flexDirection: 'row',
    paddingVertical: 40,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  defaultTxt: {
    fontSize: 23,
    fontWeight: '700',
    marginLeft: 15,
  },
});

export default styles;
