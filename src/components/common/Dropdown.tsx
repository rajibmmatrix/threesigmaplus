import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown as RNDropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import {COLORS, FONTS, Icons} from '~constants';

const Dropdown: FC<DropdownProps<any>> = props => {
  return (
    <RNDropdown
      maxHeight={230}
      style={styles.container}
      placeholderStyle={styles.placeholder}
      selectedTextStyle={styles.title}
      itemTextStyle={styles.title}
      renderRightIcon={() => <Icons.ArrowDown width={24} height={24} />}
      {...props}
    />
  );
};

export default memo(Dropdown);

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 2,
    borderBottomWidth: 0.6,
    borderBottomColor: COLORS.primary_title,
  },
  placeholder: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_gray,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.dark,
  },
});
