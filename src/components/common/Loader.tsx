import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface Props {
  isLoading?: boolean;
}

const Loader: FC<Props> = ({isLoading = false}) => {
  const {height, width} = useWindowDimensions();
  if (!isLoading) {
    return null;
  }

  return (
    <View style={[styles.container, {width, height}]}>
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={COLORS.primary} />
        <Text style={styles.title}>Loading...</Text>
      </View>
    </View>
  );
};

export default memo(Loader);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.modal,
  },
  loader: {
    height: 70,
    borderRadius: 5,
    marginHorizontal: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.dark,
    marginLeft: 16,
  },
});
