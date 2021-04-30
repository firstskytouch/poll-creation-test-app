import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Body, Left, ListItem, Right, Text, Thumbnail, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { PollMessage, User } from '../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A83D7F',
    margin: 15,
    borderRadius: 18,
  },
  subtitle: {
    color: '#7E7A9A',
  },
  avatar: {
    paddingTop: 20,
  },
  profile: {
    height: 70,
    paddingTop: 20,
  },
  white: {
    color: '#FEFEFE',
  },
  votesView: {
    backgroundColor: '#AC1393',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  votes: {
    fontSize: 10,
  },
  optionView: {
    padding: 20,
  },
  option: {
    backgroundColor: '#1C6EF226',
    borderRadius: 15,
    height: 40,
    marginTop: 8,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

type Props = {
  message: PollMessage;
  user: User;
};

export const Poll: FC<Props> = ({ user, message }) => {
  return (
    <LinearGradient
      colors={['#A83D7F', '#6F1D7A', '#4C0977', '#031143']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ListItem avatar noBorder>
        <Left style={styles.avatar}>
          <Thumbnail source={{ uri: user.avatar }} small />
        </Left>
        <Body style={styles.profile}>
          <Text style={styles.subtitle}>Public Poll</Text>
          <Text style={styles.white}>{user.name}</Text>
        </Body>
        <Right>
          <View style={styles.votesView}>
            <Text style={styles.white}>0</Text>
            <Text style={[styles.white, styles.votes]}>votes</Text>
          </View>
        </Right>
      </ListItem>
      <View style={styles.optionView}>
        <Text style={styles.white}>{message.question}</Text>
        {message.options.map((option, i) => {
          return (
            <View key={i} style={styles.option}>
              <Text style={styles.white}>{option}</Text>
            </View>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default Poll;
