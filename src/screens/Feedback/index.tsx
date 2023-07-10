import { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Main, Text as TextStyled} from "./style";

type Diet = {
  onDiet: 'onDiet' | 'offdiet'
}

export function Feedback() {
  const [somar, setSomar] = useState(1)

  function handleSomar(){
    setSomar(2)
  }

  return (
    <Main>
      {/* <TextStyled>Continue assim!</TextStyled>
      <Text>Você continua</Text> */}
      <TouchableOpacity onPress={handleSomar}>
        <Text>somar{somar}</Text>
      </TouchableOpacity>
    </Main>
  );
}
