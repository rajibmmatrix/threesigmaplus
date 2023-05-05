import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Container, Header, Input, Space, _styles} from '~components';
import {COLORS, FONTS, Icons} from '~constants';
import {StackScreenProps} from 'types';

export default function ContactUsScreen({}: StackScreenProps<'Contact'>) {
  return (
    <Container scrollEnabled={false}>
      <Header title="Contact us" />
      <View style={styles.container}>
        <View style={_styles.flex}>
          <Input label="Name" />
          <Space height={15} />
          <Input label="Phone number" />
          <Space height={50} />
          <View style={_styles.rowCenterSpace}>
            <Text style={styles.title}>Message</Text>
            <Icons.ArrowDown width={24} height={24} />
          </View>
          <TextInput multiline numberOfLines={7} style={styles.input} />
        </View>
        <Button title="Submit" onPress={() => {}} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingBottom: 75,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
  input: {
    height: 150,
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
    paddingVertical: 5,
    fontFamily: FONTS.RobotoMedium,
    borderColor: COLORS.primary_title,
    color: COLORS.primary_text,
    borderBottomWidth: 0.6,
  },
});
