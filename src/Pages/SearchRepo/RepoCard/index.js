import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Errorfallbacks} from '../../../Components';
import {helpers, colors} from '../../../config';
import styles from './styles';

const RepoCard = props => {
  const {repoInfo, gotoDetailPage} = props;

  return (
    <Errorfallbacks.RepoItemFallback>
      <TouchableOpacity
        style={styles.wrap}
        onPress={() => {
          gotoDetailPage(repoInfo);
        }}>
        <>
          <View style={styles.rowWrap}>
            <Icon name="book" size={16} color={colors.primary} />
            <Text style={styles.labelTxt}>Repo Name:</Text>
            <Text style={styles.contentTxt}>{repoInfo.name}</Text>
          </View>
          <View style={styles.rowWrap}>
            <Icon name="infocirlceo" size={16} color={colors.primary} />
            <Text style={styles.labelTxt}>Description:</Text>
            <Text style={styles.contentTxt}>{repoInfo.description}</Text>
          </View>
          <View style={styles.rowWrap}>
            <Icon name="staro" size={16} color={colors.primary} />
            <Text style={styles.labelTxt}>Rating:</Text>
            <Text style={styles.contentTxt}>
              {helpers.calculateRepoRating(repoInfo)}
            </Text>
          </View>
        </>
      </TouchableOpacity>
    </Errorfallbacks.RepoItemFallback>
  );
};

export default RepoCard;
