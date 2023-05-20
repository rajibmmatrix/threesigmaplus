import React, {FC, PropsWithChildren, memo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, Icons} from '~constants';

interface Props extends PropsWithChildren {
  label?: string;
  isChecked: boolean;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  error?: string;
  onPress: () => void;
}

const Checkbox: FC<Props> = ({
  label,
  labelStyle = {},
  containerStyle = {},
  isChecked = false,
  error,
  onPress,
  children,
}) => {
  return (
    <View style={containerStyle}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          {isChecked ? (
            <Icons.Tick height={20} width={20} />
          ) : (
            <View style={styles.checkbox} />
          )}
        </TouchableOpacity>
        <Text style={[styles.title, labelStyle]}>
          {label}
          {children}
        </Text>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default memo(Checkbox);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 13,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_gray,
    marginLeft: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.light,
    borderWidth: 1,
    borderColor: COLORS.primary_text,
    borderRadius: 4,
    marginTop: 2,
    marginRight: 2,
  },
  error: {
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.error,
    marginTop: 5,
  },
});
