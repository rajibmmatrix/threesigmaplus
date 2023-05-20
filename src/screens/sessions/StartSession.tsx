import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Container, Header, Space, _styles} from '~components';
import {COLORS, FONTS, Icons} from '~constants';
import {useQuestion} from '~app';
import {
  useGetCoursesQuery,
  useGetProfileQuery,
  useStartExamMutation,
} from '~services';
import {showError} from '~utils';
import {StackScreenProps} from 'types';

export default function StartSessionScreen({
  navigation,
  route: {params},
}: StackScreenProps<'StartSession'>) {
  const subject = params?.subject_name as string;
  const chapter_id = params?.chapter_id as string;

  const {updateQuestion} = useQuestion();
  const [startExam, {isLoading}] = useStartExamMutation();
  const {data: user, isLoading: uloading} = useGetProfileQuery();
  const {data: courses, isLoading: loading} = useGetCoursesQuery();

  const exam: string = useMemo(
    () => courses?.find(e => e?.id === user?.preference_course_id)?.title || '',
    [courses, user?.preference_course_id],
  );

  const handleStartExam = () => {
    startExam({chapter_id})
      .unwrap()
      .then(data => {
        updateQuestion(data);
        navigation.navigate('Exam');
      })
      .catch(err => showError(err?.message));
  };

  return (
    <Container isLoading={uloading || loading || isLoading}>
      <Header title="">
        <View style={styles.header}>
          <Text style={[styles.title, styles.top]}>{subject}</Text>
          <Text style={styles.title}>{exam} Exam</Text>
        </View>
      </Header>
      <View style={styles.content}>
        <Text style={[styles.title, styles.subTitle]}>
          General Instruction of the Test
        </Text>
        <View style={[_styles.flexRowCenter, styles.pv15]}>
          <Icons.Notes width={40} height={40} />
          <View style={styles.pl16}>
            <Text style={[styles.title, styles.subTitle]}>10 Question</Text>
            <Text style={styles.desc}>10 point for a correct answer</Text>
          </View>
        </View>
        <View style={[_styles.flexRowCenter, styles.pv15]}>
          <Icons.Clock width={40} height={40} />
          <View style={styles.pl16}>
            <Text style={[styles.title, styles.subTitle]}>1 hour 15 min</Text>
            <Text style={styles.desc}>Total duration of the quiz</Text>
          </View>
        </View>
        <View style={[_styles.flexRowCenter, styles.pv15]}>
          <Icons.Stars width={40} height={40} />
          <View style={styles.pl16}>
            <Text style={[styles.title, styles.subTitle]}>
              See Performance Stat
            </Text>
            <Text style={styles.desc}>Answer all questions correctly</Text>
          </View>
        </View>
        <Space height={45} />
        <Button title="Start session" onPress={handleStartExam} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 5,
    paddingBottom: 15,
  },
  top: {
    fontSize: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.light,
  },
  content: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  pl16: {paddingLeft: 16},
  pv15: {paddingVertical: 15},
  subTitle: {
    fontSize: 16,
    color: COLORS.primary_text,
  },
  desc: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_gray,
  },
});
