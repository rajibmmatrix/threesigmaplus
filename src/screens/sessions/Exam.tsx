import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  AnswerText,
  Container,
  EndExamModal,
  ExamHeader,
  ExamQuestion,
  Header,
  Options,
  Space,
  _styles,
} from '~components';
import {COLORS, FONTS, Icons} from '~constants';
import {useAnswers, usePrevNextQuestion, useQuestion} from '~app';
import {useEndExamMutation} from '~services';
import {showError, toString} from '~utils';
import {StackScreenProps} from 'types';

let time: number = 0;

export default function ExamScreen({navigation}: StackScreenProps<'Exam'>) {
  const timerRef = React.useRef(() => time++);
  const {answers, submitAnswer} = useAnswers();
  const [endExam, {isLoading}] = useEndExamMutation();
  const {question, session_id, resetQuestion} = useQuestion();
  const {isFirst, isLast, next, prev} = usePrevNextQuestion();

  const [text, setText] = useState<string>('');
  const [showClose, setShowClose] = useState(false);

  const handleAnswer = async (params: string | number) => {
    await submitAnswer({answer: params as string, time});
    time = 0;
  };

  useEffect(() => {
    const intervel = setInterval(timerRef?.current, 1);
    return () => {
      clearInterval(intervel);
      time = 0;
    };
  }, []);

  const handleEndExam = () => {
    endExam(session_id)
      .unwrap()
      .then(() => {
        resetQuestion();
        navigation.replace('PerformanceStat', {session_id});
      })
      .catch(err => showError(err?.message));
  };

  const handlePrevNext = (direction: 'Left' | 'Right') => {
    if (direction === 'Left' && !isFirst) {
      prev();
      setText('');
      time = 0;
    } else if (direction === 'Right' && !isLast) {
      next();
      setText('');
      time = 0;
    }
  };

  return (
    <Container
      isLoading={isLoading}
      scrollEnabled={true}
      backgroundColor={COLORS.secondary_background}>
      <Header title="Chemistry - NEET Exam" back={false}>
        <ExamHeader
          onReport={() => navigation.navigate('ReportQuestion')}
          onInfo={() => navigation.navigate('Questions')}
          onClose={() => setShowClose(true)}
        />
      </Header>
      {question?.type ? (
        <View style={styles.content}>
          <GestureRecognizer
            onSwipeLeft={() => handlePrevNext('Right')}
            onSwipeRight={() => handlePrevNext('Left')}>
            <ExamQuestion question={question?.stmt} />
            <View style={styles.footer}>
              {question?.type === 'numerical' ||
              question?.type === 'integral' ? (
                <AnswerText
                  label="Write your answer here"
                  onSubmitEditing={() => handleAnswer(text)}
                  onChangeText={setText}
                  value={text}
                />
              ) : (
                <>
                  <Text style={[styles.footerTitle]}>Select Answer</Text>
                  {question?.options?.length && (
                    <FlatList
                      data={question?.options}
                      scrollEnabled={false}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={(_item, index) => index.toString()}
                      renderItem={({item, index}) => (
                        <Options
                          index={index}
                          option={item}
                          isSelected={answers.includes(toString(index + 1))}
                          onPress={() => handleAnswer(index + 1)}
                        />
                      )}
                    />
                  )}
                </>
              )}
            </View>
            <Space height={25} />
          </GestureRecognizer>
          {!isFirst && (
            <TouchableOpacity
              onPress={() => handlePrevNext('Left')}
              style={[styles.sideButton, _styles.allCenter, styles.left]}>
              <Icons.ArrowLeft height={18} width={18} />
            </TouchableOpacity>
          )}
          {!isLast && (
            <TouchableOpacity
              onPress={() => handlePrevNext('Right')}
              style={[styles.sideButton, _styles.allCenter, styles.right]}>
              <Icons.ArrowRight height={18} width={18} />
            </TouchableOpacity>
          )}
        </View>
      ) : null}
      <EndExamModal
        show={showClose}
        onClose={() => setShowClose(false)}
        onViewAll={() => navigation.navigate('Questions')}
        onEnd={handleEndExam}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    top: -35,
  },
  footer: {
    paddingTop: 17,
    paddingBottom: 30,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    borderRadius: 16,
  },
  footerTitle: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.secondary_text,
    marginLeft: 25,
  },
  sideButton: {
    top: 180,
    width: 30,
    height: 45,
    position: 'absolute',
    backgroundColor: COLORS.buttons[2],
  },
  left: {
    left: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  right: {
    right: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
