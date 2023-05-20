import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Container, Error, Header, Subject} from '~components';
import {COLORS, FONTS} from '~constants';
import {useGetSubjectQuery} from '~services';
import {TabScreenProps} from 'types';

export default function SubjectsScreen({
  navigation,
}: TabScreenProps<'Subjects'>) {
  const {data, isLoading, isError} = useGetSubjectQuery();

  return (
    <Container isLoading={isLoading} scrollEnabled={false}>
      <Header title="Subjects" back={false} />
      {isError ? (
        <Error msg="No Subject Found" />
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
                  navigation.navigate('Topics', {
                    subject_id: item?.id,
                    subject_name: item?.title,
                  });
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
    fontFamily: FONTS.RobotoMedium,
    lineHeight: 21,
    color: COLORS.primary_text,
    marginBottom: 15,
    marginLeft: 10,
  },
});
