import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Container, Header, Notification, Space} from '~components';
import {TabScreenProps} from 'types';

export default function NotificationScreen({}: TabScreenProps<'Notification'>) {
  return (
    <Container scrollEnabled={false}>
      <Header title="Notification" back={false} />
      <FlatList
        data={[1, 2]}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, i) => i.toString()}
        renderItem={({}) => (
          <Notification message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doincididunt ut labore et dolore magna aliqua." />
        )}
        contentContainerStyle={styles.container}
      />
      <Space height={60} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },
});
