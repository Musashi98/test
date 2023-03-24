import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { Pressable } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

export default function Calculator() {

  const [text, setText] = useState("")

  const buttonPressHandler = (code) => {
    if (code == 'X') {
      setText(text.substring(0, text.length - 1))
    }
    else {
      setText(text + code)
    }
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 80 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', paddingLeft: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 0, padding: 0 }}>{text}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
        <Pressable onPress={() => { buttonPressHandler('7') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>7</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => { buttonPressHandler('8') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>8</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => { buttonPressHandler('9') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>9</Text>
          </View>
        </Pressable>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={() => { buttonPressHandler('4') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>4</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => { buttonPressHandler('5') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>5</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => { buttonPressHandler('6') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>6</Text>
          </View>
        </Pressable>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={() => { buttonPressHandler('1') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>1</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => { buttonPressHandler('2') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>2</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => { buttonPressHandler('3') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>3</Text>
          </View>
        </Pressable>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 60, height: 60 }}></View>
        <Pressable onPress={() => { buttonPressHandler('0') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>0</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => { buttonPressHandler('X') }}>
          <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'rgb(50, 50, 50)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>X</Text>
          </View>
        </Pressable>

      </View>
    </View >
  )
}