import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Header,
  HomeTitle,
  HomeTopic,
  Search,
  Topic,
} from '~components';
import {COLORS, FONTS} from '~constants';
import {useGetAllChaptersQuery} from '~services';
import {IChapters, StackScreenProps} from 'types';

export default function TopicsScreen({
  navigation,
  route: {params},
}: StackScreenProps<'Topics'>) {
  const subject_id = params?.subject_id as string;
  const subject_name = params?.subject_name as string;
  const {isLoading, data, isError, error} = useGetAllChaptersQuery(subject_id);
  const [selected, setSelected] = useState<null | number>(null);
  const [search, setSearch] = useState<string>('');

  const allChapters: IChapters[] = useMemo(() => {
    let all: IChapters[] = [];
    if (selected !== null && data?.topics && selected < data.topics?.length) {
      all = data?.topics?.[selected]?.chapters as IChapters[];
    } else {
      data?.topics.map(item => all.push(...item?.chapters));
    }
    return all;
  }, [selected, data?.topics]);

  const chapters: IChapters[] = useMemo(
    () =>
      allChapters.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [allChapters, search],
  );

  return (
    <Container isLoading={isLoading} scrollEnabled={false}>
      <Header title={subject_name}>
        <View style={styles.header}>
          <Search
            placeholder="Search chapter"
            onChangeText={setSearch}
            value={search}
          />
        </View>
      </Header>
      {isError ? (
        <View style={styles.container}>
          <Text style={styles.title}>{error.message}</Text>
        </View>
      ) : (
        <FlatList
          data={chapters}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <HomeTitle
                title="Recommended Topics"
                description="See all"
                containerStyle={[styles.pv10, styles.ph10, styles.pb10]}
                onPress={() => setSelected(null)}
              />
              <FlatList
                data={data?.topics}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item?.id}
                renderItem={({item, index}) => (
                  <HomeTopic
                    title={item?.title}
                    onPress={() => setSelected(index)}
                  />
                )}
              />
              <HomeTitle
                title="Chapters"
                containerStyle={[styles.pv10, styles.ph10]}
              />
            </>
          }
          contentContainerStyle={styles.ph10}
          renderItem={({item, index}) => (
            <Topic
              index={index}
              title={item?.title}
              onPress={() => {
                navigation.navigate('StartSession', {
                  subject_name: subject_name,
                  chapter_id: item?.id,
                });
              }}
            />
          )}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    textAlign: 'center',
  },
  header: {
    paddingTop: 18,
    paddingBottom: 20,
  },
  pb10: {paddingBottom: 10},
  pv10: {paddingVertical: 20},
  ph10: {paddingHorizontal: 10},
});
