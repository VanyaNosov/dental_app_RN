import React from 'react';
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { PatientScreen } from './screens/PatientScreen';
import SectionTitle from './components/SectionTitle';

const Stack = createStackNavigator()



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeS">
        <Stack.Screen name="Home" component={PatientScreen} options={{ title: 'Карта Поциента', headerTintColor: '#2A86FF' }} />
        <Stack.Screen name="HomeS" component={HomeScreen} options={{ title: 'Поциенты', headerTintColor: '#2A86FF' }} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App;







































// import {StatusBar} from 'expo-status-bar';
// import React from 'react';
// import {StyleSheet, Text, View, Image, TouchableOpacity, SectionList} from 'react-native';
// import styled from 'styled-components/native'
// import {GroupC} from './components/Group';
// import SectionTitle from './components/SectionTitle';
// import {Ionicons} from '@expo/vector-icons';

// const DATA = [
//   {
//     title: "14 сентября",
//     data: [
//       {
//         time: '15:30',
//         diagnosis: 'геморой',
//         active: true,
//         user: {
//           fullName: 'Сергей Вац',
//           avatar: 'https://avatars.githubusercontent.com/u/55053878?v=4'
//         }
//       },
//       {
//         time: '18:10',
//         diagnosis: 'пульпит',
//         user: {
//           fullName: 'Ваня Носов',
//           avatar: 'https://avatars.githubusercontent.com/u/39305380?v=4'
//         }
//       },
//       {
//         time: '19:00',
//         diagnosis: 'удаление зуба',
//         user: {
//           fullName: 'Вася Пупкин',
//           avatar: 'https://avatars.githubusercontent.com/u/30403859?v=4'
//         }
//       },
//       {
//         time: '19:00',
//         diagnosis: 'удаление зуба',
//         user: {
//           fullName: 'Вася Пупкин',
//           avatar: 'https://avatars.githubusercontent.com/u/30403859?v=4'
//         }
//       },
//     ]
//   },
//   {
//     title: "12 сентября",
//     data: [
//       {
//         time: '15:30',
//         diagnosis: 'геморой',
//         user: {
//           fullName: 'Сергей Вац',
//           avatar: 'https://avatars.githubusercontent.com/u/55053878?v=4'
//         }
//       },
//       {
//         time: '18:10',
//         diagnosis: 'пульпит',
//         user: {
//           fullName: 'Ваня Носов',
//           avatar: 'https://avatars.githubusercontent.com/u/39305380?v=4'
//         }
//       },
//       {
//         time: '19:00',
//         diagnosis: 'удаление зуба',
//         user: {
//           fullName: 'Вася Пупкин',
//           avatar: 'https://avatars.githubusercontent.com/u/30403859?v=4'
//         }
//       }
//     ]
//   },
// ];

// export default function App() {
//   return (
//     <Container>
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({ item }) => <GroupC {...item} />}
//         renderSectionHeader={({ section: { title } }) => (
//           <SectionTitle>{title}</SectionTitle>
//         )}
//       />
//       <AddButton>
//         <Ionicons name="ios-add" size={36} color="white" />
//       </AddButton>
//     </Container >
//   );
// }

// const AddButton = styled.TouchableOpacity`
//   align-items: center;
//   justify-content: center;
//   background: #2A84FF;
//   width: 64px;
//   height: 64px;
//   border-radius: 50px;
//   position: absolute;
//   bottom: 25px;
//   right: 25px;
// `;

// const Container = styled.View`
//   flex: 1;
//   margin-top: 50px;
// `;














{/* <GroupC title={'11 января'} items={[
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
      ]} />
      <GroupC title={'16 января'} items={[
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
      ]} /> */}


