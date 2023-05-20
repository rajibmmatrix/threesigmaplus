import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GradientText, MathText, ZoomImage, _styles} from '~shared';
import {COLORS, FONTS, Icons} from '~constants';
import {swidth} from '~utils';
import {IQuestion} from 'types';

interface Props {
  time?: string;
  question: IQuestion[] | undefined;
}

const ExamQuestion: FC<Props> = ({question, time}) => {
  return (
    <View style={[styles.card, _styles.shadow]}>
      {question?.length &&
        question.map((item, index) => (
          <React.Fragment key={index}>
            {item?.text && <MathText value={item.text} />}
            {item?.url && <ZoomImage uri={item.url} style={styles.image} />}
            {item?.parts?.length ? (
              <>
                <Text style={styles.title}>Statement {index}</Text>
                {item?.parts?.map((part, ix) => (
                  <React.Fragment key={ix.toString()}>
                    {part?.text && <MathText value={part.text} />}
                    {part?.url ? (
                      <ZoomImage uri={part.url} style={styles.image} />
                    ) : null}
                  </React.Fragment>
                ))}
              </>
            ) : null}
          </React.Fragment>
        ))}
      {time ? (
        <View style={[_styles.flexRowCenter, styles.timer]}>
          <Icons.ClockNew height={16} width={16} />
          <GradientText style={styles.ml5}>{time} </GradientText>
        </View>
      ) : null}
    </View>
  );
};

export default memo(ExamQuestion);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 16,
    marginHorizontal: 10,
    backgroundColor: COLORS.background,
    borderRadius: 16,
  },
  image: {
    height: 200,
    width: swidth - 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.secondary_text,
  },
  timer: {
    marginRight: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
    borderColor: COLORS.border,
    borderRadius: 16,
    borderWidth: 1,
  },
  ml5: {marginLeft: 5},
});
