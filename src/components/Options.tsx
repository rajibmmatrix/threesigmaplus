import React, {FC, memo, useMemo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MathText, ZoomImage, _styles} from '~shared';
import {COLORS, FONTS, Icons} from '~constants';
import {ALPHABETS} from '~utils';
import {IOption} from 'types';

interface Props {
  index: number;
  isSelected?: boolean;
  isTrue?: boolean;
  isFalse?: boolean;
  option: IOption[];
  onPress?: () => void;
}

const Options: FC<Props> = ({
  index,
  option,
  isTrue = false,
  isFalse = false,
  isSelected = false,
  onPress,
}) => {
  const isBig: boolean = useMemo(() => !option?.find(e => e?.url), [option]);

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={[styles.container, _styles.rowCenterSpace]}>
      <View style={_styles.flexRowCenter}>
        <View
          style={[
            styles.box,
            _styles.allCenter,
            option?.length > 1 ? _styles.selfStart : _styles.selfCenter,
            isSelected && styles.selected,
          ]}>
          <Text style={[styles.boxTitle, isSelected && styles.selectedText]}>
            {ALPHABETS[index]}
          </Text>
        </View>
        <View style={styles.pr65}>
          {option?.map((item, i) => (
            <React.Fragment key={i}>
              {item?.text ? (
                <MathText value={item.text} style={styles.title} />
              ) : null}
              {item?.url ? (
                <ZoomImage uri={item.url} style={styles.image} />
              ) : null}
            </React.Fragment>
          ))}
        </View>
      </View>
      <View style={!isBig ? _styles.selfEnd : _styles.selfCenter}>
        {isTrue ? (
          <Icons.TickSquare height={26} />
        ) : isFalse ? (
          <Icons.CloseSquareSecond height={26} />
        ) : null}
      </View>
    </Pressable>
  );
};

export default memo(Options);

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderColor: COLORS.secondary_gray,
    borderWidth: 0.6,
  },
  box: {
    width: 30,
    height: 30,
    marginRight: 12,
    borderColor: COLORS.others[0],
    borderWidth: 0.6,
    borderRadius: 50,
  },
  boxTitle: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.others[0],
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
  pr65: {paddingRight: 65},
  selected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  selectedText: {color: COLORS.light},
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
