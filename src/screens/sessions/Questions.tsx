import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Container, Header, QuestionNumber, Space, _styles} from '~components';
import {COLORS, FONTS} from '~constants';
import {useProblems, useSession} from '~app';
import {StackScreenProps} from 'types';

export default function QuestionsScreen({
  navigation,
}: StackScreenProps<'Questions'>) {
  const {moveToProblem} = useProblems();
  const {answers, problems} = useSession();

  return (
    <Container scrollEnabled={false}>
      <Header title="Questions" />
      <View style={styles.container}>
        <View style={[styles.header, _styles.rowCenterSpace]}>
          <View style={_styles.flexRowCenter}>
            <View style={styles.roundBox} />
            <Text style={styles.title}>Answered</Text>
          </View>
          <View style={_styles.flexRowCenter}>
            <View style={[styles.roundBox, styles.box]} />
            <Text style={styles.title}>Skipped</Text>
          </View>
        </View>
        <Space height={20} />
        <FlatList
          data={problems}
          numColumns={5}
          bounces={false}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({index}) => (
            <QuestionNumber
              number={index + 1}
              isSelected={!answers[index]}
              onPress={() => {
                moveToProblem(index);
                navigation.goBack();
              }}
            />
          )}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 25,
  },
  header: {
    paddingLeft: 18,
    paddingRight: 25,
  },
  roundBox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.primary,
    marginRight: 10,
  },
  box: {borderColor: COLORS.number},
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    lineHeight: 19,
  },
});
