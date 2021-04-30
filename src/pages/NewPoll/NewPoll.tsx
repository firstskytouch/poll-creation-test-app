import React, { useState, FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Left,
  ListItem,
  Right,
  Switch,
  Text,
  Textarea,
  Title,
  View,
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const NewPoll: FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [voting, setVoting] = useState<boolean>(false);
  const [ability, setAbility] = useState<boolean>(false);

  const route = useRoute();
  const navigation = useNavigation();

  const onAddQuestion = () => {
    setOptions([...options, '']);
  };
  const onRemoveQuestion = (i: number) => {
    options.splice(i, 1);
    setOptions([...options]);
  };

  const onChangeQuestion = (txt: string) => {
    if (txt.length > 140) {
      return;
    }
    setQuestion(txt);
  };

  const onOptionChange = (txt: string, i: number) => {
    options[i] = txt;
    setOptions([...options]);
  };

  const onCreate = () => {
    const poll = {
      question,
      options,
      voting,
      ability,
    };
    navigation.navigate('Lowkey', { poll });
  };

  const onClose = () => {
    navigation.goBack();
  };

  const isCreateable =
    question.length > 0 &&
    options.length > 0 &&
    options.filter((option) => option.length == 0).length == 0;

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={onClose}>
            <Icon name="close" style={styles.white} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.white}>New Poll</Title>
        </Body>
        <Right>
          <Button transparent onPress={onCreate} disabled={!isCreateable}>
            <Text style={isCreateable ? styles.createButtonActive : styles.createButtonDisable}>
              Create
            </Text>
          </Button>
        </Right>
      </Header>
      <Content>
        <ListItem itemHeader noBorder>
          <Left>
            <Text style={styles.listHeaderText}>Question</Text>
          </Left>
          <Right>
            <Text style={styles.listHeaderText}>{question.length}/140</Text>
          </Right>
        </ListItem>
        <ListItem noBorder>
          <Textarea
            placeholder="Ask a question"
            value={question}
            onChangeText={onChangeQuestion}
            style={styles.input}
          />
        </ListItem>
        <ListItem itemHeader noBorder>
          <Left>
            <Text style={styles.listHeaderText}>Question</Text>
          </Left>
          <Right>
            <Text style={styles.listHeaderText}>{options.length}/8</Text>
          </Right>
        </ListItem>
        <View style={styles.options}>
          {options.map((_, i) => {
            return (
              <View key={i} style={styles.option}>
                <Input
                  placeholder="Input an option"
                  value={options[i]}
                  onChangeText={(e) => onOptionChange(e, i)}
                  style={styles.input}
                />
                <View style={styles.actionWrapper}>
                  <Button transparent onPress={() => onRemoveQuestion(i)}>
                    <Icon name="close" style={styles.white} />
                  </Button>
                </View>
              </View>
            );
          })}
        </View>
        {options.length < 8 && (
          <ListItem itemHeader noBorder>
            <Button block onPress={onAddQuestion} style={styles.addOption} iconLeft>
              <Text style={styles.addOptionText}>Add an option</Text>
            </Button>
          </ListItem>
        )}
        <ListItem itemHeader noBorder>
          <Left>
            <Icon name="person" type="MaterialIcons" style={styles.white} />
            <Text style={styles.white}>Anonymouse voating</Text>
          </Left>
          <Right>
            <Switch
              value={voting}
              onValueChange={(v) => setVoting(v)}
              trackColor={{ true: '#1C6EF2', false: 'transparent' }}
            />
          </Right>
        </ListItem>
        <ListItem itemHeader noBorder>
          <Left>
            <Icon name="playlist-add" type="MaterialIcons" style={styles.white} />
            <Text style={styles.white}>Ability to add more options</Text>
          </Left>
          <Right>
            <Switch
              value={ability}
              onValueChange={(v) => setAbility(v)}
              trackColor={{ true: '#1C6EF2', false: 'transparent' }}
            />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    backgroundColor: '#14131B',
  },
  header: {
    backgroundColor: '#14131B',
  },
  white: {
    color: '#FEFEFE',
  },
  createButtonActive: {
    color: '#1C6EF2',
  },
  createButtonDisable: {
    color: '#7E7A9A',
  },
  options: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  option: {
    marginBottom: 4,
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
    backgroundColor: '#1C6EF219',
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
    color: '#FEFEFE',
    backgroundColor: '#1C1A2A',
    borderRadius: 15,
    height: 51,
    width: '100%',
    flex: 1,
  },
});

export default NewPoll;
