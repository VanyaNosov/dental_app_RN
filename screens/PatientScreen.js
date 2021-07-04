import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList, Button } from 'react-native';
import styled from 'styled-components/native'
import GrayText from '../components/GrayText'
import ButtonForm from '../components/ButtonForm'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// const buttonParam = {
//   text: 'Формула зубо',
//   color: '#2A84FF',
//   width: 270,
//   height: 45,
//   borderRadius: 50
// }

export const PatientScreen = () => (
  <Container>
    <ContactsBlock>
      <Tittle>Марина Алмазова</Tittle>
      <GrayText style={{ marginBottom: 10 }}>+ (097) 55-74-094</GrayText>
      <PatientsButtons>
        <ButtonForm buttonParam={{
          text: 'Формула зубов',
          color: '#2A84FF',
          width: 270,
          height: 45,
          borderRadius: 50
        }} />
        <ButtonCall>
          <FontAwesome name="phone" size={24} color="white" />
        </ButtonCall>
      </PatientsButtons>
    </ContactsBlock>
    <AdmissionInformation>
      <AdmissionInformationTittle>Приемы</AdmissionInformationTittle>
      <PatientInformationContainer>
        <ContentContainer>
          <InfoBlock>
            <ToothBlock>
              <FontAwesome5 name="tooth" size={15} color="black" />
              <TextI>Зуб:</TextI>
              <TextBold>12</TextBold>
            </ToothBlock>
            <ToothBlock>
              <FontAwesome5 name="tooth" size={15} color="black" />
              <TextI>Диагноз:</TextI>
              <TextBold>Пульпит</TextBold>
            </ToothBlock>
          </InfoBlock>
        </ContentContainer>
      </PatientInformationContainer>
    </AdmissionInformation>
  </Container>
)

const TextBold = styled.Text`
    font-weight: bold;
    margin-left: 5px;
`;

const TextI = styled.Text`
    margin-left: 5px;
    `;

const ToothBlock = styled.View`
    flex-direction: row;
    &:first-child {
      margin-bottom: 10px;
    }
`;

const InfoBlock = styled.View`

`;

const ContentContainer = styled.View`

`;

const PatientInformationContainer = styled.View`
    background: white;
    width: 100%;
    height: auto;
    padding: 20px;
`;

const AdmissionInformationTittle = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 15px;
    `

const AdmissionInformation = styled.View`
    width: 100%;
    height: 100%;
    background: #f8fafd;
    padding: 25px;
    `;

const Container = styled.View`
    background: white;
    `;

const ContactsBlock = styled.View`
    padding: 25px;
    `;

const Tittle = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 22px;
    margin-bottom: 5px;
    `;

const ButtonCall = styled.TouchableOpacity`
    background: #86D269;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    `;

const PatientsButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

// const ButtonForm = styled.TouchableOpacity`
//   border-radius: 30px;
//   justify-content: center;
//   background: #2A84FF;
//   width: 269px;
//   height: 45px;
//   align-items: center;
// `;
