import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

interface Props {
  imageuri: string
  title: string
  subtext: string
}

const Test1 = (props: Props): JSX.Element => {
  const { imageuri, title, subtext } = props
  return (

<Link href={{ pathname: '/memo/list' }}asChild>
          <TouchableOpacity>
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{subtext}</Text>
      </View>

      <View style={styles.gazoBox}>
        <Image style={{ width: 100, height: 100 }} src={ imageuri } />
      </View>
    </View>
    </TouchableOpacity>
</Link>
  )
}

export default Test1

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    flexDirection: 'row'
  },

  moziBox: {
    flex: 1,
    backgroundColor: 'steelblue',
    padding: 16,
    justifyContent: 'space-between'
  },

  gazoBox: {
    width: 100,
    backgroundColor: 'powderblue'
  },

  text: {
    fontSize: 16
  },

  subText: {
    fontSize: 12,
    color: 'red'
  }
})
