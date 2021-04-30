import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Body, Left, ListItem, Text, Thumbnail } from 'native-base';

import { User } from '../types';

type Props = {
  message: string;
  user: User;
};

const styles = StyleSheet.create({
  subtitle: {
    color: '#7E7A9A',
  },
  white: {
    color: '#FEFEFE',
  },
});

export const Chat: FC<Props> = ({ user, message }) => {
  return (
    <ListItem avatar noBorder>
      <Left>
        <Thumbnail source={{ uri: user.avatar }} small />
      </Left>
      <Body>
        <Text style={styles.subtitle}>{user.name}</Text>
        <Text style={styles.white}>{message}</Text>
      </Body>
    </ListItem>
  );
};

export default Chat;
