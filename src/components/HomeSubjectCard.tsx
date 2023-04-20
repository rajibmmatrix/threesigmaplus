import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

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
      <View style={_styles.selfCenter}>
        <BarChart
          height={150}
          barWidth={20}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="#0071E3"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
      <Text style={styles.descripton}>{descripton}</Text>
    </View>
  );
};

export default memo(HomeSubjectCard);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    marginBottom: 10,
  },
  descripton: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    textAlign: 'center',
    marginTop: 20,
  },
});
