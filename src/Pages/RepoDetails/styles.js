import {StyleSheet} from 'react-native';
import {colors} from '../../config';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  wrapInner: {
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontWeight: '700',
    width: 130,
    marginLeft: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
});

export default styles;
