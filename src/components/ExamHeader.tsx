import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Space} from '~common';
import {_styles} from '~shared';
import {COLORS, FONTS, Icons} from '~constants';
import {useProblems} from '~app';

interface Props {
  onReport: () => void;
  onInfo: () => void;
  onClose: () => void;
}

const ExamHeader: FC<Props> = ({onReport, onInfo, onClose}) => {
  const {question_number} = useProblems();

  return (
    <>
      <View style={[styles.header, _styles.rowCenterSpace]}>
        <Text style={styles.title}>Q{question_number + 1}</Text>
        <View style={_styles.rowCenterSpace}>
          <TouchableOpacity onPress={onReport} style={styles.ml25}>
            <Icons.Report width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onInfo} style={styles.ml25}>
            <Icons.Info width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.ml25}>
            <Icons.CloseSquare width={26} height={26} />
          </TouchableOpacity>
        </View>
      </View>
      <Space height={25} />
    </>
  );
};

export default memo(ExamHeader);

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.RobotoBold,
    color: COLORS.light,
  },
  ml25: {marginLeft: 25},
});
