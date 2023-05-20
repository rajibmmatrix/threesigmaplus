import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Header,
  MyPerformanceHeader,
  MyPerformanceItem,
} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

export default function MyPerformanceScreen({
  navigation,
}: StackScreenProps<'MyPerformance'>) {
  return (
    <Container>
      <Header
        title="My Performance"
        onBack={() => navigation.navigate('Tab', {screen: 'Profile'})}
      />
      <View style={styles.container}>
        <MyPerformanceHeader />
        <Text style={styles.title}>Previous Practice</Text>
        <MyPerformanceItem
          title="Math"
          total={'40'}
          number={'28'}
          date="11.03.2023"
          onTimeClick={() => navigation.navigate('TimeSpent')}
          onView={() => navigation.navigate('PerformanceStat')}
        />
        <MyPerformanceItem
          title="Biology"
          total={'40'}
          number={'20'}
          color="#A2D7A9"
          date="11.03.2023"
          onTimeClick={() => navigation.navigate('TimeSpent')}
          onView={() => navigation.navigate('PerformanceStat')}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    lineHeight: 21,
    marginTop: 18,
    marginLeft: 5,
    marginBottom: 10,
  },
});
