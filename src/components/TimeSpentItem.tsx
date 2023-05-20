import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface Props {
  number: string | number;
  percentage: string | number;
  time: string;
}

const TimeSpentItem: FC<Props> = ({number, percentage, time}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Q{number}</Text>
      <View style={[styles.body]}>
        <View style={[styles.line, {width: `${percentage}%`}]} />
      </View>
      <Text style={[styles.title, styles.subTitle]}>{time}</Text>
    </View>
  );
};

export default memo(TimeSpentItem);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    lineHeight: 21,
  },
  subTitle: {
    fontFamily: FONTS.RobotoRegular,
    lineHeight: 19,
  },
  body: {
    width: '60%',
    paddingLeft: 5,
    marginRight: 10,
    justifyContent: 'center',
  },
  line: {
    height: 12,
    backgroundColor: COLORS.primary,
  },
});
