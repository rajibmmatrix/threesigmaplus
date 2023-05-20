import React from 'react';
import {FlatList} from 'react-native';
import {Container, FAQItem, Header} from '~components';
import {StackScreenProps} from 'types';

interface IFaqListTypes {
  question: string;
  answers: string;
}

const faqlist: IFaqListTypes[] = [
  {
    question: 'What is 3sigma Plus?',
    answers:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolore magna aliqua.',
  },
  {
    question: 'How can I make a test?',
    answers:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolore magna aliqua.',
  },
];

export default function FAQScreen({}: StackScreenProps<'FAQ'>) {
  return (
    <Container scrollEnabled={false}>
      <Header title="FAQ" />
      <FlatList
        data={faqlist}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => (
          <FAQItem question={item.question} answers={item.answers} />
        )}
      />
    </Container>
  );
}
