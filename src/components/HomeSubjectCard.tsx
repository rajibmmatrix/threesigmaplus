import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';
import {swidth} from '~utils';

interface Props {
  title: string;
  descripton?: string;
}

const barData = [
  {value: 250, label: 'M'},
  {value: 500, label: 'T'},
  {value: 745, label: 'W'},
  {value: 320, label: 'T'},
  {value: 600, label: 'F'},
  {value: 256, label: 'S'},
  {value: 300, label: 'S'},
];

const HomeSubjectCard: FC<Props> = ({title, descripton}) => {
  return (
    <View style={[styles.container, _styles.shadow]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[_styles.selfCenter, _styles.alignCenter]}>
        <BarChart
          height={120}
          width={swidth - 100}
          barWidth={14}
          noOfSections={3}
          barBorderRadius={4}
          frontColor={COLORS.primary}
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          xAxisLabelTextStyle={{color: COLORS.dark}}
          yAxisTextStyle={{color: COLORS.dark}}
        />
      </View>
      <Text style={styles.descripton}>{descripton}</Text>
    </View>
  );
};

export default memo(HomeSubjectCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: COLORS.background,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    marginBottom: 10,
  },
  descripton: {
    fontSize: 12,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    textAlign: 'center',
    marginTop: 20,
  },
});
