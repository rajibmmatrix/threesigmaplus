import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, TimeSpentItem, _styles} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

export default function TimeSpentScreen({}: StackScreenProps<'TimeSpent'>) {
  return (
    <Container scrollEnabled={true}>
      <Header title="Performance Stat" />
      <View style={[styles.container, _styles.shadow]}>
        <Text style={styles.title}>Question wise Time spent</Text>
        <TimeSpentItem number={1} percentage={80} time="40.28min" />
        <TimeSpentItem number={2} percentage={60} time="30.28min" />
        <TimeSpentItem number={3} percentage={30} time="20.28min" />
        <TimeSpentItem number={4} percentage={40} time="48.28min" />
        <TimeSpentItem number={5} percentage={90} time="50.28min" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingTop: 20,
    paddingBottom: 80,
    marginHorizontal: 10,
    paddingHorizontal: 25,
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary,
    lineHeight: 21,
  },
});
