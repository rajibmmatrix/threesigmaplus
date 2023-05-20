import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Container, Header, RadioButton, Space} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

export default function ReportQuestionScreen({
  navigation,
}: StackScreenProps<'ReportQuestion'>) {
  return (
    <Container scrollEnabled={true}>
      <Header title="Report Question" />
      <View style={styles.container}>
        <Text style={styles.title}>What is your Concern?</Text>
        <Space height={25} />
        <RadioButton
          title="Question statement is wrong."
          isSelected={!true}
          onPress={() => {}}
        />
        <Space height={15} />
        <RadioButton
          title="None of the options are correct."
          isSelected={true}
          onPress={() => {}}
        />
        <Space height={15} />
        <RadioButton
          title="Something else"
          isSelected={false}
          onPress={() => {}}
        />
        <Space height={24} />
        <TextInput
          multiline
          numberOfLines={6}
          placeholder="Type your concern here"
          placeholderTextColor={COLORS.secondary_gray}
          style={[styles.input, styles.inputText]}
        />
        <Space height={33} />
        <Button title="Submit" onPress={() => navigation.goBack()} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary,
    lineHeight: 21,
  },
  input: {
    height: 140,
    padding: 10,
    paddingTop: 15,
    borderWidth: 0.6,
    borderColor: COLORS.primary_title,
    borderRadius: 14,
    textAlignVertical: 'top',
  },
  inputText: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
  },
});
