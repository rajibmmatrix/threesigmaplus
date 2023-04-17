import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Container, Subject} from '~components';
import {useGetSubjectQuery} from '~services';
import {TabScreenProps} from 'types';

export default function SubjectsScreen({
  navigation,
}: TabScreenProps<'Subjects'>) {
  const {data, isLoading, isError, error} = useGetSubjectQuery();

  return (
    <Container isLoading={isLoading} scrollEnabled={false}>
      {isError ? (
        <View style={styles.container}>
          <Text style={styles.title}>{error?.message}</Text>
        </View>
      ) : (
        <FlatList
          data={data}
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
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
});
