import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackButton from '../../components/BackButton';

const Settings = ({navigation}) => {
  const navigateTo = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <BackButton onPress={navigateTo} title={'Settings'} />
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;
