import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TextInput,
  View,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as repoAction from '../../redux/action/repoAction';
import {Constants, helpers} from '../../config';
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

  const renderRepoCard = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.repoCard}
        onPress={() => {
          gotoDetailPage(item);
        }}>
        <>
          <Text>{`Repo Name: ${item.name}`}</Text>
          <Text>{`Description: ${item.description}`}</Text>
          <Text>{`Rating: ${helpers.calculateRepoRating(item)}`}</Text>
        </>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.wrapInner}>
      <View style={styles.searchWrap}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchTxt(text)}
          value={searchTxt}
          placeholder="Search Repository"
        />
        <Button
          title="Search"
          onPress={() => {
            dispatch(repoAction.searchRepo(searchTxt));
          }}
        />
      </View>
      <View style={styles.listWrap}>
        {repoList.loading && <ActivityIndicator size="small" color="#0000ff" />}
        {!repoList.loading && (
          <FlatList
            data={repoList.data}
            renderItem={renderRepoCard}
            keyExtractor={item => item.id}
            extraData={repoList.data}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default SearchRepo;
