/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/redux/confugureStore';
import SearchRepo from './src/Pages/SearchRepo';
import RepoDetails from './src/Pages/RepoDetails';
import {Constants} from './src/config';

const {routes} = Constants;

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={styles.wrap}>
      <Provider store={store}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={routes.RepoSearch} component={SearchRepo} />
              <Stack.Screen name={routes.RepoDetails} component={RepoDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

export default App;
