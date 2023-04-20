/* eslint-disable react/no-unstable-nested-components */
import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {COLORS, FONTS} from '~constants';

interface Props {
  title: string;
}

const pieData = [
  {value: 70, color: '#177AD5'},
  {value: 30, color: 'lightgray'},
];

const CenterText = memo(({number = '0'}: {number: string | number}) => {
  return <Text style={styles.desc}>{number}%</Text>;
});

const RoundBar: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <View>
        <PieChart
          donut
          radius={32}
          innerRadius={25}
          data={pieData}
          centerLabelComponent={() => <CenterText number="80" />}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(RoundBar);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    textAlign: 'center',
    marginTop: 2,
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
  },
});
