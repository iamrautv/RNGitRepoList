import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  wrapInner: {
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
  listWrap: {
    flex: 1,
  },
  repoCard: {
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default styles;
