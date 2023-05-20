import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  AnswerText,
  AnswereStat,
  Container,
  Error,
  ExamQuestion,
  Header,
  Options,
  PerformanceStatCard,
  Space,
  _styles,
} from '~components';
import {COLORS, FONTS} from '~constants';
import {useExamResultQuery} from '~services';
import {toDifTime} from '~utils';
import {StackScreenProps} from 'types';

export default function PerformanceStatScreen({
  navigation,
  route: {params},
}: StackScreenProps<'PerformanceStat'>) {
  const id = params?.session_id as string;
  const [selected, setSelected] = useState<number>(0);
  const {isLoading, data, isError} = useExamResultQuery(id);

  return (
    <Container scrollEnabled={true} isLoading={isLoading}>
      <Header
        title="Performance Stat"
        onBack={() => navigation.navigate('MyPerformance')}>
        <Space height={40} />
      </Header>
      {isError ? (
        <Error top={150} msg="No data found" />
      ) : (
        <>
          <View style={styles.header}>
            <PerformanceStatCard
              title="Chemistry"
              total={data?.result?.max_score as string}
              number={data?.result?.session_score as string}
              totalQuestion={data?.result?.problems?.length}
              time={toDifTime(data?.started_at, data?.ended_at)}
            />
            <Space height={20} />
            <View style={_styles.flexRow}>
              <AnswereStat
                number={20}
                title="Correct"
                isSelected={selected === 0}
                onPress={() => setSelected(0)}
              />
              <Space width={10} />
              <AnswereStat
                number={20}
                title="Wrong"
                isSelected={selected === 1}
                onPress={() => setSelected(1)}
              />
              <Space width={10} />
              <AnswereStat
                number={20}
                title="Skipped"
                isSelected={selected === 2}
                onPress={() => setSelected(2)}
              />
            </View>
          </View>
          {data?.result?.problems?.length &&
            data?.result?.problems.map(item => (
              <View style={styles.content} key={item?.sequence_no}>
                <ExamQuestion
                  question={item?.problem_text?.stmt}
                  time={'48:25'}
                />
                <View style={styles.footer}>
                  {item?.problem_text?.type === 'numerical' ||
                  item?.problem_text?.type === 'integral' ? (
                    <AnswerText label="Write your answer here" value="" />
                  ) : (
                    <>
                      <Text style={[styles.footerTitle]}>Options</Text>
                      <FlatList
                        data={item.problem_text?.options}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(_item, index) => index.toString()}
                        renderItem={({item: option, index}) => (
                          <Options
                            index={index}
                            option={option}
                            //isTrue={index === 2}
                            //isFalse={index === 3}
                            //isSelected={index === 3}
                          />
                        )}
                      />
                    </>
                  )}
                </View>
              </View>
            ))}
        </>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  content: {
    paddingTop: 15,
    paddingBottom: 20,
    backgroundColor: COLORS.secondary_background,
    borderRadius: 16,
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
    marginLeft: 10,
  },
});
