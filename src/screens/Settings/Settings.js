import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackButton from '../../components/BackButton';
import ListItem from '../../components/ListItem';

const Settings = ({navigation}) => {
  const navigateTo = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <BackButton onPress={navigateTo} title={'Settings'} />
      <ListItem title={'Privacy Policy'} />
      <ListItem title={'About'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;
