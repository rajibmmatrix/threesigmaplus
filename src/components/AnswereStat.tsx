import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, Icons} from '~constants';
import {_styles} from '~shared';

interface Props {
  number: number;
  isSelected: boolean;
  title: 'Correct' | 'Wrong' | 'Skipped';
  onPress: () => void;
}

const AnswereStat: FC<Props> = ({number = 0, isSelected, title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, _styles.shadow, isSelected && styles.selected]}>
      <View style={_styles.rowBetween}>
        <View style={_styles.flex}>
          <Text style={[styles.number, isSelected && styles.selectedText]}>
            {number}
          </Text>
          <Text style={[styles.title, isSelected && styles.selectedText]}>
            {title}
          </Text>
        </View>
        <View style={[styles.icon, _styles.allCenter]}>
          {title === 'Correct' && <Icons.TickSquare height={20} />}
          {title === 'Wrong' && <Icons.CloseSquareSecond height={20} />}
          {title === 'Skipped' && <Icons.Next height={20} />}
        </View>
      </View>
    </Pressable>
  );
};

export default memo(AnswereStat);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 26,
    backgroundColor: COLORS.background,
    borderRadius: 15,
  },
  selected: {backgroundColor: COLORS.primary},
  number: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.dark,
    lineHeight: 21,
  },
  selectedText: {color: COLORS.light},
  icon: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.background,
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.gray,
    lineHeight: 18,
    marginTop: 8,
  },
});
