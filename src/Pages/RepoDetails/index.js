import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {helpers} from '../../config';
import styles from './styles';

const RepoDetails = props => {
  const {route} = props;
  const {params} = route;
  const {repoInfo} = params;

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.wrapInner}>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Name: </Text>
        <Text style={styles.info}>{repoInfo.name}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Description: </Text>
        <Text style={styles.info}>{repoInfo.description}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Rating: </Text>
        <Text style={styles.info}>{helpers.calculateRepoRating(repoInfo)}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Repo Forks: </Text>
        <Text style={styles.info}>{repoInfo.forks_count}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Repo Watch Count: </Text>
        <Text style={styles.info}>{repoInfo.watchers_count}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Open Issue Count: </Text>
        <Text style={styles.info}>{repoInfo.open_issues_count}</Text>
      </View>
    </ScrollView>
  );
};

export default RepoDetails;
