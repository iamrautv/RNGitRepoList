import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {helpers, colors} from '../../config';
import styles from './styles';

const RepoDetails = props => {
  const {route} = props;
  const {params} = route;
  const {repoInfo} = params;

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.wrapInner}>
      <View style={styles.infoRow}>
        <Icon name="book" size={16} color={colors.primary} />
        <Text style={styles.label}>Name: </Text>
        <Text style={styles.info}>{repoInfo.name}</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="infocirlceo" size={16} color={colors.primary} />
        <Text style={styles.label}>Description: </Text>
        <Text style={styles.info}>{repoInfo.description}</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="staro" size={16} color={colors.primary} />
        <Text style={styles.label}>Rating: </Text>
        {/* eslint-disable-next-line prettier/prettier */}
        <Text style={styles.info}>{`${helpers.calculateRepoRating(repoInfo)} Stars`}</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="rightsquareo" size={16} color={colors.primary} />
        <Text style={styles.label}>Forks: </Text>
        <Text style={styles.info}>{repoInfo.forks_count}</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="rightsquareo" size={16} color={colors.primary} />
        <Text style={styles.label}>Watch Count: </Text>
        <Text style={styles.info}>{repoInfo.watchers_count}</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="rightsquareo" size={16} color={colors.primary} />
        <Text style={styles.label}>Open Issues: </Text>
        <Text style={styles.info}>{repoInfo.open_issues_count}</Text>
      </View>
    </ScrollView>
  );
};

export default RepoDetails;
