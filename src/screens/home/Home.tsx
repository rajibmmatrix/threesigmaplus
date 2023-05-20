import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  Container,
  HomeHeader,
  HomeSubjectCard,
  HomeTitle,
  HomeTopic,
  Space,
} from '~components';
import {useAuth} from '~app';
import {useGetTopicsQuery} from '~services';
import {TabScreenProps} from 'types';

export default function HomeScreen({navigation}: TabScreenProps<'Home'>) {
  const {isFromSignup} = useAuth();
  const {isLoading, data} = useGetTopicsQuery('7');

  useEffect(() => {
    if (isFromSignup) {
      navigation.navigate('Preference');
    }
  }, [isFromSignup, navigation]);

  return (
    <Container scrollEnabled isLoading={isLoading}>
      <HomeHeader />
      <View style={styles.container}>
        <HomeTitle
          title="Recommended Topics"
          description="See all"
          containerStyle={styles.header}
          onPress={() => navigation.navigate('Subjects')}
        />
        {data?.length ? (
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({item}) => <HomeTopic title={item?.title} />}
            keyExtractor={item => item?.id}
          />
        ) : null}
        <HomeTitle
          title="Subjectwise Performance"
          containerStyle={styles.header}
        />
        <View style={styles.listContainer}>
          <HomeSubjectCard
            title="Chemistry"
            descripton="Number of Questions attempt"
          />
          <HomeSubjectCard
            title="Physics"
            descripton="Number of Questions attempt"
          />
        </View>
      </View>
      <Space height={20} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
  },
  header: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  listContainer: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 15,
  },
});
