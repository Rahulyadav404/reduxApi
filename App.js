import { View, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Reducer } from './redux/Reducer'
import { fetchUsers } from './redux/DataAction'
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

const store = createStore(Reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
  console.log(store.getState())
})

function runCode(){
  console.log('rahul')
  store.dispatch(fetchUsers())
}

const App = () => {
  return (
    <View>
      <TextInput style={{margin:20}}   label={'name'} mode='outlined' ></TextInput>
      <Button
        title="Submit"
        onPress={runCode}
        style = {{margin:50}}
        />
    </View>
  )
}

export default App