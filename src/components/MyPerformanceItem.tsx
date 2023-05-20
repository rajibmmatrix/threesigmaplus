import React, {FC, memo, useCallback, useMemo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {Button, Space, _styles} from '~components';
import {COLORS, FONTS} from '~constants';

interface Props {
  title: string;
  date: string;
  number?: string | number;
  total: number | string;
  color?: string;
  onView: () => void;
  onTimeClick: () => void;
}

const MyPerformanceItem: FC<Props> = ({
  title,
  date,
  number = '0',
  color = COLORS.bar,
  total = '0',
  onView,
  onTimeClick,
}) => {
  const centerLabel = useCallback(() => {
    return (
      <Text style={styles.desc}>
        <Text style={{color: COLORS.bar}}>{number}</Text> / {total}
      </Text>
    );
  }, [number, total]);

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
        <Pressable onPress={onTimeClick}>
          <PieChart
            donut
            data={data}
            radius={32}
            innerRadius={25}
            centerLabelComponent={centerLabel}
          />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={[styles.desc, {color: COLORS.gray}]}>{date}</Text>
        <Space height={14} />
        <Button title="View" onPress={onView} />
      </View>
    </View>
  );
};

export default memo(MyPerformanceItem);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    paddingBottom: 12,
    borderRadius: 14,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    lineHeight: 19,
    marginLeft: 12,
  },
  desc: {
    fontSize: 12,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
});
