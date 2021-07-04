import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import styled from 'styled-components/native'
import GrayText from './GrayText'

export const GroupC = ({ time, diagnosis, user, active, navigation }) => {
  return (
    <Group>
      <GroupItem onPress={() => navigation.navigate('Home')}>
        <Avatar source={{ uri: user.avatar }} />
        <View style={{ flex: 1 }}>
          <FullName>{user.fullName}</FullName>
          <GrayText>{diagnosis}</GrayText>
        </View>
        <GroupDate active={active}>{time}</GroupDate>
      </GroupItem>
    </Group>
  )
}

const GroupDate = styled.Text`
  background: ${props => (props.active ? '#2A86FF' : '#e9f5ff')};
  color: ${props => (props.active ? '#fff' : '#4294ff')}
  width: 70px;
  height: 32px;
  text-align: center;
  border-radius: 18px;
  font-weight: bold;
  line-height: 32px;
`

const Group = styled.View`
  margin-bottom: 25px;
  padding: 0px 20px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  padding: 20px 0px;
  flex-direction: row;
  borderBottomWidth: 1px;
  borderBottomColor: black;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
`;

const FullName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
