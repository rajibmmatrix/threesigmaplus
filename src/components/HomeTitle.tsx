import React, {FC, memo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface Props {
  title: string;
  description?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const HomeTitle: FC<Props> = ({
  title,
  description,
  onPress,
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      {description && (
        <TouchableOpacity onPress={onPress} disabled={!onPress}>
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(HomeTitle);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_button,
  },
});
