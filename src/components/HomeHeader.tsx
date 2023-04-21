import React, {FC, memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, IMAGES} from '~constants';
import {RoundBar, _styles} from '~shared';
import {swidth} from '~utils';

const HomeHeader: FC = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.header} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.desc}>Good morning</Text>
        <View style={[styles.card, _styles.shadow]}>
          <Text style={[styles.title, styles.cardText]}>Your Performance</Text>
          <Text style={[styles.desc, styles.cardText]}>
            Total number of session given 8
          </Text>
          <View style={styles.bottom}>
            <RoundBar title="Physics" />
            <RoundBar title="Chemistery" />
            <RoundBar title="Biology" />
            <RoundBar title="Math" />
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
    fontSize: 22,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.light,
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
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
    color: COLORS.primary_text,
  },
  bottom: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
