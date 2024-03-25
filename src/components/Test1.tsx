import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'

interface Props {
  imageuri: string
  title: string
  subtext: string
  siteUrl: string
}

const Test1 = (props: Props): JSX.Element => {
  const { imageuri, title, subtext, siteUrl } = props

  const date = new Date(subtext)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const hiduke = year + '年' + month + '月' + day + '日' + hour + '時' + min + '分'

  return (

    <TouchableOpacity
    onPress={() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      Linking.openURL(siteUrl)
    }}
  >
    <View style={styles.box}>

      <View style={styles.gazoBox}>
        <Image style={{ width: 100, height: 100 }} src={ imageuri } />
      </View>

      <View style={styles.moziBox}>
        <Text numberOfLines={3} style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{hiduke}</Text>
      </View>

    </View>
    </TouchableOpacity>

  )
}

export default Test1

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: '100%',
    borderColor: 'green',
    borderWidth: 1,
    flexDirection: 'row'
  },

  moziBox: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },

  gazoBox: {
    width: 100,
    backgroundColor: 'green'
  },

  text: {
    fontSize: 15
  },

  subText: {
    fontSize: 9,
    color: 'black'
  }
})
