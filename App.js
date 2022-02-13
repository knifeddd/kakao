import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  kakaocenter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  fontstyle: {fontSize: 25}
});

const App = () => {
  return (
    <SafeAreaView style={styles.kakaocenter}>
      <Text style={styles.fontstyle}>KAKAO</Text>
    </SafeAreaView>
  );
};

export default App;
