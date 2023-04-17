import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useGetTopicsQuery} from '~services';
import {StackScreenProps} from 'types';
import {Container} from '~common';
import {Topic} from '~components';

export default function TopicsScreen({route}: StackScreenProps<'Topics'>) {
  const subjetc_id = route.params?.subject_id as string;
  const {isLoading, data, isError, error} = useGetTopicsQuery(subjetc_id);

  return (
    <Container isLoading={isLoading} scrollEnabled={false}>
      {isError ? (
        <View style={styles.container}>
          <Text style={styles.title}>{error.message}</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <Topic title={item.title} onPress={() => {}} />
          )}
          contentContainerStyle={styles.content}
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
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
  content: {
    paddingTop: 5,
    paddingHorizontal: 5,
  },
});
