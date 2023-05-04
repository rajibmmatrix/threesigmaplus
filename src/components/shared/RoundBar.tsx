import React, {FC, memo, useCallback, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {COLORS, FONTS} from '~constants';

interface Props {
  title: string;
  number?: string | number;
  color?: string;
}

const RoundBar: FC<Props> = ({title, number = '0', color = COLORS.bar}) => {
  const data = useMemo(
    () => [
      {value: parseInt(number as string, 10), color},
      {value: 100 - parseInt(number as string, 10), color: 'lightgray'},
    ],
    [color, number],
  );

  const centerLabel = useCallback(() => {
    return <Text style={styles.desc}>{number}%</Text>;
  }, [number]);

  return (
    <View style={styles.container}>
      <View>
        <PieChart
          donut
          data={data}
          radius={32}
          innerRadius={25}
          centerLabelComponent={centerLabel}
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
