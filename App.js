import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './screens/header';
import Footer from './screens/footer';
import MainSection from './screens/main-section';
import { FOOTER } from './utils/constant';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [mainPage, setMainPage] = useState(FOOTER.todo)

  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={"#fff"}
      />
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainContainer}>
        
        <View>
          <MainSection currentMainPage={mainPage} />
        </View>
      </ScrollView>
      <Footer currentMainPage={mainPage} setMainPage={setMainPage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '88%'
  },
  sectionContainer: {
    marginVertical: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
