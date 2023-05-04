import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Container, Header, Subject} from '~components';
import {useGetSubjectQuery} from '~services';
import {TabScreenProps} from 'types';
import {COLORS, FONTS} from '~constants';

export default function SubjectsScreen({
  navigation,
}: TabScreenProps<'Subjects'>) {
  const {data, isLoading, isError, error} = useGetSubjectQuery();

  return (
    <Container isLoading={isLoading} scrollEnabled={false}>
      <Header title="Subjects" back={false} />
      {isError ? (
        <View style={styles.container}>
          <Text style={styles.title}>{error?.message}</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>Select the Subject for Test</Text>
          <FlatList
            data={data}
            numColumns={2}
            bounces={false}
            keyExtractor={item => item?.id}
            renderItem={({item}) => (
              <Subject
                title={item?.title}
                onPress={() => {
                  navigation.navigate('Topics', {subject_id: item?.id});
                }}
              />
            )}
          />
        </View>
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
  content: {
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    lineHeight: 21,
    color: COLORS.primary_text,
    marginBottom: 15,
    marginLeft: 10,
  },
});
