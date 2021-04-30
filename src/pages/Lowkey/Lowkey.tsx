import React, { useEffect, useMemo, useState, FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Header,
  Icon,
  Input,
  Left,
  Right,
  Subtitle,
  Thumbnail,
  Title,
} from 'native-base';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

import data from './data';
import Chat from '../../components/Chat';
import Poll from '../../components/Poll';
import { Message, User, PollMessage } from '../../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14131B',
  },
  header: {
    backgroundColor: '#14131B',
  },
  white: {
    color: '#FEFEFE',
  },

  createButton: {
    color: '#1C6EF2',
  },
  options: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  addOption: {
    backgroundColor: '#1C1A2A',
    borderRadius: 15,
    height: 51,
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: '100%',
  },
  addOptionText: {
    color: '#1C6EF2',
  },
  actionWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#1C6EF2',
    width: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderText: {
    color: '#7E7A9A',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#2E2C3C',
    borderRadius: 10,
    height: 35,
  },
});

type RootStackParamList = {
  Lowkey: { poll: any };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Lowkey'>;

export const Lowkey: FC = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation();
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>(data.messages);
  const user = data.users[0];
  const params = route.params;

  const users: Map<string, User> = useMemo(() => {
    let userMap = new Map<string, User>();
    for (let user of data.users) {
      userMap.set(user.id, user);
    }
    return userMap;
  }, []);

  const actionSend = () => {
    if (!text) {
      return;
    }
    setMessages([...messages, { user: user.id, message: text }]);
    setText('');
  };

  const actionNewPoll = () => {
    navigation.navigate('NewPoll');
  };

  useEffect(() => {
    if (params.poll) {
      setMessages([...messages, { user: user.id, message: params.poll }]);
    }
  }, [params.poll]);

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="close" style={styles.white} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.white}>Lowkey Squad</Title>
          <Subtitle>1 member•1 online</Subtitle>
        </Body>
        <Right>
          <Thumbnail
            source={{
              uri: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
            }}
            small
          />
        </Right>
      </Header>
      <Content scrollEnabled>
        {messages.map((msg, i) => {
          const user = users.get(msg.user)!;
          const a = msg.message;
          const message = msg.message as string;
          const poll = msg.message as PollMessage;
          if (poll.options) {
            return <Poll user={user} message={poll} key={i} />;
          } else {
            return <Chat user={user} message={message} key={i} />;
          }
        })}
      </Content>
      <Footer style={styles.header}>
        <Button transparent onPress={actionNewPoll}>
          <Icon name="widgets" type="MaterialIcons" style={styles.white} />
        </Button>
        <Body>
          <Input
            style={[styles.input, styles.white]}
            placeholder="Message"
            value={text}
            onChangeText={setText}
          />
        </Body>
        <Button transparent onPress={actionSend}>
          <Icon name="radio-button-checked" type="MaterialIcons" style={styles.white} />
        </Button>
      </Footer>
    </Container>
  );
};

export default Lowkey;
