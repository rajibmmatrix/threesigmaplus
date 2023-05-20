import React, {FC, memo, useCallback, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {GradientText, _styles} from '~shared';
import {COLORS, FONTS, Icons} from '~constants';

interface Props {
  title: string;
  number?: string | number;
  total: number | string;
  color?: string;
  time?: string;
  totalQuestion?: number;
}

const PerformanceStatCard: FC<Props> = ({
  title,
  total = '0',
  number = '0',
  color = COLORS.bar,
  time = '00:00',
  totalQuestion = 0,
}) => {
  const centerLabel = useCallback(() => {
    return (
      <Text style={styles.desc}>
        <Text style={{color}}>{number}</Text> / {total}
      </Text>
    );
  }, [color, number, total]);

  const data = useMemo(
    () => [
      {value: parseInt(number as string, 10), color},
      {
        value: parseInt(total as string, 10) - parseInt(number as string, 10),
        color: 'lightgray',
      },
    ],
    [color, number, total],
  );

  return (
    <View style={[styles.container, _styles.rowCenterSpace, _styles.shadow]}>
      <View style={_styles.flexRowCenter}>
        <PieChart
          donut
          data={data}
          radius={32}
          innerRadius={25}
          centerLabelComponent={centerLabel}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.title, styles.subTitle]}>
            Total question : {totalQuestion}
          </Text>
        </View>
      </View>
      <View style={[_styles.flexRowCenter, styles.timer]}>
        <Icons.ClockNew height={16} width={16} />
        <GradientText style={styles.ml5}>{time} </GradientText>
      </View>
    </View>
  );
};

export default memo(PerformanceStatCard);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: -50,
    paddingBottom: 12,
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  desc: {
    fontSize: 12,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    marginLeft: 12,
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.gray,
  },
  ml5: {marginLeft: 5},
  timer: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderColor: COLORS.border,
    borderRadius: 16,
    borderWidth: 1,
  },
});
