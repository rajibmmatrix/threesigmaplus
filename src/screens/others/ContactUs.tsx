import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Container, Dropdown, Header, Input, Space} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];

export default function ContactUsScreen({}: StackScreenProps<'Contact'>) {
  return (
    <Container scrollEnabled={true}>
      <Header title="Contact us" />
      <View style={styles.container}>
        <Input label="Name" />
        <Space height={15} />
        <Input label="Phone number" />
        <Space height={15} />
        <Dropdown
          data={data}
          placeholder="Subject"
          labelField={'label'}
          valueField={'value'}
          onChange={(_item: any) => {}}
        />
        <Space height={50} />
        <Text style={styles.title}>Message</Text>
        <TextInput multiline numberOfLines={6} style={styles.input} />
        <Space height={60} />
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
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
  input: {
    height: 125,
    fontSize: 16,
    marginVertical: 5,
    paddingVertical: 5,
    fontFamily: FONTS.RobotoMedium,
    borderColor: COLORS.primary_title,
    color: COLORS.primary_text,
    textAlignVertical: 'top',
    borderBottomWidth: 0.6,
  },
});
