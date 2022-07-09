import {StyleSheet} from 'react-native';
import {colors} from '../../config';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  searchWrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchBtn: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  listWrap: {
    flex: 1,
  },
});

export default styles;
