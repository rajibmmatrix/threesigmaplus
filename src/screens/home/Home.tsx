import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  Container,
  HomeHeader,
  HomeSubjectCard,
  HomeTitle,
  HomeTopic,
  Space,
} from '~components';
import {useGetSubjectQuery} from '~services';
import {TabScreenProps} from 'types';

export default function HomeScreen({}: TabScreenProps<'Home'>) {
  const {isLoading, data} = useGetSubjectQuery();

  return (
    <Container scrollEnabled isLoading={isLoading}>
      <HomeHeader />
      <View style={styles.container}>
        <HomeTitle
          title="Recommended Topics"
          description="See all"
          containerStyle={styles.header}
        />
        {data?.length && (
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({item, index}) => (
              <HomeTopic index={index + 1} title={item?.title} />
            )}
            keyExtractor={item => item?.id}
          />
        )}
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
