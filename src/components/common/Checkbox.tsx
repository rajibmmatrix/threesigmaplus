import React, {FC, memo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface Props {
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
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={[styles.container]}>
        {isChecked ? (
          <View style={[styles.checkbox, styles.checkedbox]} />
        ) : (
          <View style={styles.checkbox} />
        )}
        <Text style={[styles.title, labelStyle]}>{label}</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default memo(Checkbox);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //alignItems: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '300',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_gray,
    marginLeft: 10,
  },
  checkbox: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.light,
    borderWidth: 1,
    borderColor: COLORS.primary_text,
    borderRadius: 1,
    marginTop: 3,
  },
  checkedbox: {
    backgroundColor: COLORS.primary_text,
  },
  error: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.error,
    marginTop: 6,
  },
});
