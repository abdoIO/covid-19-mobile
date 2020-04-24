import React, { createContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BotContext = createContext({
  InitialRequestParams: {},
  setInitialRequestParams: (x)=>{},
})

export default BotContext;


