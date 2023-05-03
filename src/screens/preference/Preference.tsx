import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Button, Container, Header, PreferenceItem} from '~components';
import {COLORS, FONTS} from '~constants';
import {
  useEditProfileMutation,
  useGetCoursesQuery,
  useGetProfileQuery,
} from '~services';
import {log} from '~utils';
import {StackScreenProps} from 'types';

export default function PreferenceScreen({
  navigation,
}: StackScreenProps<'Preference'>) {
  const {data: user} = useGetProfileQuery();
  const {isLoading, data, isError, error} = useGetCoursesQuery();
  const [update, {isLoading: loading}] = useEditProfileMutation();

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectPreference = () => {
    update({preference_course_id: selectedItem})
      .unwrap()
      .then(() => navigation.goBack())
      .catch(err => log(err));
  };

  return (
    <Container isLoading={isLoading || loading} scrollEnabled={false}>
      <Header title="Select Preference" />
      {isError ? (
        <View style={styles.container}>
          <Text style={styles.title}>{error.message}</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          bounces={false}
          keyExtractor={item => item?.id}
          renderItem={({item}) => (
            <PreferenceItem
              title={item?.title}
              isSelected={
                selectedItem
                  ? selectedItem === item?.id
                  : user?.preference_course_id === item?.id
              }
              onPress={() => setSelectedItem(item?.id)}
            />
          )}
          ListFooterComponent={
            <Button title="Save" onPress={handleSelectPreference} />
          }
          ListFooterComponentStyle={styles.footer}
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
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  footer: {
    flex: 1,
    width: '100%',
    marginBottom: 40,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});
