import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'

import LogOutButton from '../../components/LogOutButton'

import axios from 'axios'
import Test1 from '../../components/Test1'
import Footer from '../../components/Footer'

// Test News : url取得
const URI = 'https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=bf39bb0eb94c493a9263ffffcda774ed'

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    // list画面だけログアウト項目表示
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])

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
    console.log(response)
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
      siteUrl={item.url}
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
