import React, {FC, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface IFProps {
  minutes: number;
  seconds: number;
  setMinutes: Function;
  setSeconds: Function;
}
const Timer: FC<IFProps> = ({minutes, seconds, setMinutes, setSeconds}) => {
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);
  return (
    <View style={styles.timerView}>
      <Text style={styles.timer}>
        {minutes} : {seconds}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  timer: {
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_gray,
    textAlign: 'right',
  },
});
