import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { useNavigation, router } from 'expo-router'
import { useEffect, useState } from 'react'

import LogOutButton from '../../components/LogOutButton'

import axios from 'axios'
import Test1 from '../../components/Test1'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

// Test News : url取得
const URI = 'https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=bf39bb0eb94c493a9263ffffcda774ed'

const handlePress = (): void => {
  router.push('/memo/list')
}

// const List = (): JSX.Element => {
export const List = (): JSX.Element => {
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
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getNews()
  }, [])

  // useEffect(() => {
  //   alert(Constants?.expoConfig?.extra?.TestKeyNews)
  // }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getNews = async () => {
    const response = await axios.get(URI)
    console.log(response)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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

    <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color= 'white' />
            </CircleButton>

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
