import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Button, Container, Error, Header, PreferenceItem} from '~components';
import {setIsSignup, useAuth, useDispatch} from '~app';
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
  const dispatch = useDispatch();
  const {isFromSignup} = useAuth();
  const {data: user} = useGetProfileQuery();
  const {isLoading, data, isError} = useGetCoursesQuery();
  const [update, {isLoading: loading}] = useEditProfileMutation();

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectPreference = () => {
    update({preference_course_id: selectedItem})
      .unwrap()
      .then(() => {
        dispatch(setIsSignup(false));
        navigation.goBack();
      })
      .catch(err => log(err));
  };

  return (
    <Container isLoading={isLoading || loading} scrollEnabled={false}>
      <Header title="Select Preference" back={!isFromSignup} />
      {isError ? (
        <Error msg="No preference found" />
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
