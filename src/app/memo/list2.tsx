import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'
import Constants from 'expo-constants'
import axios from 'axios'
import Test1 from '../../components/Test1'
import Footer from '../../components/Footer'

// Test News : url取得
const URI = 'https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=bf39bb0eb94c493a9263ffffcda774ed'

// Test Soccer
const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
  params: { fixture: '198772' },
  headers: {
    'X-RapidAPI-Key': 'cb77a2275amsh67211e0194f3276p1e834ejsn68572125ef0d',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    // list画面だけログアウト項目表示
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])
  // Test Soccer
  useEffect(() => {
    getSoccer()
  }, [])

  const getSoccer = async () => {
    try {
      const response2 = await axios.request(options)
      console.log(response2.data)
    } catch (error) {
      console.error(error)
    }
  }

  // Test News
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews()
  }, [])

  // useEffect(() => {
  //   alert(Constants?.expoConfig?.extra?.TestKeyNews)
  // }, [])

  const getNews = async () => {
    const response = await axios.get(URI)
    // console.log(response)
    setNews(response.data.articles)
  }

  return (
  <SafeAreaView style={styles.container}>

  <FlatList
    data={news}
    renderItem={({ item }) => (
    <Test1
      imageuri={item.urlToImage}
      title={item.title}
      subtext={item.publishedAt}
    />
    )}
     keyExtractor={(item, index) => index.toString()}
  />
    <Footer />

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }

})

export default List
