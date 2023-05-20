import React, {FC, memo} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Avatar from './Avatar';
import {COLORS, FONTS, IMAGES, Icons} from '~constants';
import {_styles} from '~shared';
import {swidth} from '~utils';

interface Props {
  title: string;
  back?: boolean;
  onBack?: () => void;
  showAvatar?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

const Header: FC<Props> = ({
  title,
  back = true,
  onBack,
  showAvatar = false,
  children,
}) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={children ? IMAGES.header : IMAGES.small_header}
      resizeMode="stretch"
      style={styles.container}>
      <View style={_styles.rowCenterSpace}>
        <View style={styles.box}>
          {back && (
            <TouchableOpacity
              onPress={onBack ? onBack : () => navigation.goBack()}>
              <Icons.ArrowLeft width={24} height={24} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.box}>{showAvatar && <Avatar size={45} />}</View>
      </View>
      {children}
    </ImageBackground>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    width: swidth,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  box: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
    color: COLORS.light,
  },
});
