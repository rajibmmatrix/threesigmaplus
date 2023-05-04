import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

export default function TermsAndConditionsScreen({}: StackScreenProps<'Terms'>) {
  return (
    <Container>
      <Header title="Terms and Conditions" />
      <View style={styles.container}>
        <Text style={styles.title}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    lineHeight: 24,
    color: COLORS.primary_text,
  },
});
