import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'
import { GroupC } from '../components/Group';
import SectionTitle from '../components/SectionTitle';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    title: "14 сентября",
    data: [
      {
        time: '15:30',
        diagnosis: 'геморой',
        active: true,
        user: {
          fullName: 'Сергей Вац',
          avatar: 'https://avatars.githubusercontent.com/u/55053878?v=4'
        }
      },
      {
        time: '18:10',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Ваня Носов',
          avatar: 'https://avatars.githubusercontent.com/u/39305380?v=4'
        }
      },
      {
        time: '19:00',
        diagnosis: 'удаление зуба',
        user: {
          fullName: 'Вася Пупкин',
          avatar: 'https://avatars.githubusercontent.com/u/30403859?v=4'
        }
      },
      {
        time: '19:00',
        diagnosis: 'удаление зуба',
        user: {
          fullName: 'Вася Пупкин',
          avatar: 'https://avatars.githubusercontent.com/u/30403859?v=4'
        }
      },
    ]
  },
  {
    title: "12 сентября",
    data: [
      {
        time: '15:30',
        diagnosis: 'геморой',
        user: {
          fullName: 'Сергей Вац',
          avatar: 'https://avatars.githubusercontent.com/u/55053878?v=4'
        }
      },
      {
        time: '18:10',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Ваня Носов',
          avatar: 'https://avatars.githubusercontent.com/u/39305380?v=4'
        }
      },
      {
        time: '19:00',
        diagnosis: 'удаление зуба',
        user: {
          fullName: 'Вася Пупкин',
          avatar: 'https://avatars.githubusercontent.com/u/30403859?v=4'
        }
      }
    ]
  },
];

export function HomeScreen({ navigation }) {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <GroupC navigation={navigation} {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <AddButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </AddButton>
    </Container >
  );
}

const AddButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #2A84FF;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  position: absolute;
  bottom: 25px;
  right: 25px;
`;

const Container = styled.View`
  flex: 1;
  background: white;
`;


