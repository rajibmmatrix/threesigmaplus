import React, {FC, memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar, RoundBar, _styles} from '~shared';
import {COLORS, FONTS, IMAGES} from '~constants';
import {useGetProfileQuery} from '~services';
import {swidth} from '~utils';

const HomeHeader: FC = () => {
  const {data} = useGetProfileQuery();

  return (
    <View style={styles.container}>
      <Image source={IMAGES.header} style={styles.image} />
      <View style={styles.header}>
        <View style={_styles.rowCenterSpace}>
          <Text style={styles.title}>Hello! {data?.first_name}</Text>
          <Avatar size={45} />
        </View>
        <View style={[styles.card, _styles.shadow]}>
          <Text style={[styles.title, styles.cardText]}>Your Performance</Text>
          <Text style={styles.desc}>Total number of session given 8</Text>
          <View style={[styles.bottom, _styles.rowCenterSpace]}>
            <RoundBar title="Physics" number={80} color="#165DFF" />
            <RoundBar title="Chemistery" number={'85'} />
            <RoundBar
              title="Biology"
              number={85}
              color="rgba(7, 181, 14, 0.3)"
            />
            <RoundBar title="Math" number={85} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 280,
    position: 'relative',
  },
  image: {
    height: 150,
    width: swidth,
    resizeMode: 'stretch',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  header: {
    padding: 20,
    position: 'absolute',
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.light,
  },
  card: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    width: swidth - 40,
    backgroundColor: COLORS.light,
    borderRadius: 12,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 3,
    color: COLORS.primary_text,
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
  bottom: {
    flex: 1,
    marginTop: 10,
  },
});
