import React from 'react'
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native'

const ButtonForm = ({ buttonParam }) => {
  return (
    <ButtonF style={{ backgroundColor: buttonParam.color, width: buttonParam.width, height: buttonParam.height, borderRadius: buttonParam.borderRadius }}><TextButton>{buttonParam.text}</TextButton></ButtonF>
  )
}

const TextButton = styled.Text`
  color: white;
`;

// const objParam = {
//   w: { width },
// }

const ButtonF = styled.TouchableOpacity`
align-items: center;
justify-content: center;
`;

export default ButtonForm
