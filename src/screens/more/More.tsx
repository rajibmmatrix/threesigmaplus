import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Header, MoreItem} from '~components';
import {TabScreenProps} from 'types';

export default function MoreScreen({navigation}: TabScreenProps<'More'>) {
  return (
    <Container>
      <Header title="More" back={false} />
      <View style={styles.container}>
        <MoreItem
          title="About Us"
          onPress={() => navigation.navigate('About')}
        />
        <MoreItem
          title="Privacy Policy"
          onPress={() => navigation.navigate('Policy')}
        />
        <MoreItem
          title="Terms and Conditions"
          onPress={() => navigation.navigate('Terms')}
        />
        <MoreItem
          title="Contact Us"
          onPress={() => navigation.navigate('Contact')}
        />
        <MoreItem title="FAQ" onPress={() => navigation.navigate('FAQ')} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
});
