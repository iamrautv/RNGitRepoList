import React, {useState} from 'react';
import {TextInput, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import * as repoAction from '../../redux/action/repoAction';
import {Constants} from '../../config';
import {Errorfallbacks, Loader, ErrorView} from '../../Components';
import RepoCard from './RepoCard';
import styles from './styles';

const {routes} = Constants;

const SearchRepo = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState('');

  const {repoList} = useSelector(state => ({
    repoList: state.repoList,
  }));

  const gotoDetailPage = repoInfo => {
    navigation.navigate(routes.RepoDetails, {
      repoInfo,
    });
  };

  const searchRepoInit = () => {
    if (searchTxt === '') {
      Alert.alert('Warning', 'Please enter search text');
    } else {
      dispatch(repoAction.searchRepo(searchTxt, 1));
    }
  };

  const renderRepoCard = ({item}) => (
    <RepoCard repoInfo={item} gotoDetailPage={gotoDetailPage} />
  );

  return (
    <Errorfallbacks.PageFallback>
      <View style={styles.wrap}>
        <View style={styles.searchWrap}>
          <TextInput
            style={styles.searchInput}
            onChangeText={text => setSearchTxt(text)}
            value={searchTxt}
            placeholder="Search Repository"
          />
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              searchRepoInit();
            }}>
            <Icon name="search1" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        {repoList.error && <ErrorView errorMsg={repoList.errorMsg} />}
        <Errorfallbacks.SearchRepoFallback>
          <View style={styles.listWrap}>
            {repoList.loading && repoList.page === 1 && <Loader />}
            {((repoList.loading && repoList.page !== 1) ||
              !repoList.loading) && (
              <FlatList
                data={repoList.data}
                renderItem={renderRepoCard}
                keyExtractor={item => item.node_id}
                extraData={repoList.data}
                refreshing={repoList.loading}
                onRefresh={searchRepoInit}
                initialNumToRender={10}
                onEndReached={() => {
                  if (repoList.data.length >= 10 && !repoList.listEnded) {
                    dispatch(
                      repoAction.searchRepo(
                        searchTxt,
                        repoList.page + 1,
                        repoList.data,
                      ),
                    );
                  }
                }}
              />
            )}
            {repoList.loading && repoList.page > 1 && <Loader />}
          </View>
        </Errorfallbacks.SearchRepoFallback>
      </View>
    </Errorfallbacks.PageFallback>
  );
};

export default SearchRepo;
