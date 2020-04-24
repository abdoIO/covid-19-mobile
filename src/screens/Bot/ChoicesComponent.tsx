import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import BotContext from '../../context/BotContext'

const ChoicesComponent = ({ steps, ...props }) => {
  const { setInitialRequestParams } = useContext(BotContext);

  setInitialRequestParams({
    age: steps['4'].value,
    gender: steps['6'].value,
    name: steps['2'].value,
  });



  
  
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity>
        <Text>aa</Text>
      </TouchableOpacity>
    </View>
  )
}



export default ChoicesComponent;
