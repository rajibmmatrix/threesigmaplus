import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, MoreItem} from '~components';
import config from '~config';
import {COLORS, FONTS} from '~constants';
import {TabScreenProps} from 'types';

export default function MoreScreen({navigation}: TabScreenProps<'More'>) {
  return (
    <Container scrollEnabled={false}>
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
        <View style={styles.footer}>
          <Text style={styles.title}>Version: {config.version}</Text>
        </View>
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
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.secondary_gray,
  },
});
