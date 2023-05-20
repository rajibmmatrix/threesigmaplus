import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {Space} from '~common';
import {RoundBar, _styles} from '~shared';
import {COLORS, FONTS} from '~constants';
import {swidth} from '~utils';

const barData = [
  {value: 250, label: 'M'},
  {value: 500, label: 'T'},
  {value: 745, label: 'W'},
  {value: 320, label: 'T'},
  {value: 600, label: 'F'},
  {value: 256, label: 'S'},
  {value: 300, label: 'S'},
];

const MyPerformanceHeader: FC = () => {
  return (
    <View style={[styles.container, _styles.shadow]}>
      <Text style={styles.title}>Your Performance</Text>
      <Text style={styles.desc}>Total number of session given 8</Text>
      <View style={_styles.rowCenterSpace}>
        <RoundBar title="Physics" number={80} color="#165DFF" />
        <RoundBar title="Chemistery" number={'85'} />
        <RoundBar title="Biology" number={85} color="rgba(7, 181, 14, 0.3)" />
        <RoundBar title="Math" number={85} />
      </View>
      <Space height={25} />
      <View style={[_styles.selfCenter, _styles.alignCenter]}>
        <BarChart
          height={80}
          width={swidth - 100}
          barWidth={12}
          noOfSections={3}
          barBorderRadius={2}
          frontColor={COLORS.primary}
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          xAxisLabelTextStyle={{color: COLORS.dark}}
          yAxisTextStyle={{color: COLORS.dark}}
        />
      </View>
      <Space height={20} />
      <Text style={styles.comment}>Number of Questions attempt</Text>
    </View>
  );
};

export default memo(MyPerformanceHeader);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    width: swidth - 30,
    alignSelf: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    marginBottom: 3,
  },
  desc: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    marginBottom: 10,
  },
  comment: {
    fontSize: 12,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    textAlign: 'center',
  },
});
