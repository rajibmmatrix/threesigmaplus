import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

export default function ContactUsScreen({}: StackScreenProps<'Contact'>) {
  return (
    <Container>
      <Header title="Contact us" />
      <View style={styles.container}>
        <Text style={styles.title}>Contact us Screen</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
});
