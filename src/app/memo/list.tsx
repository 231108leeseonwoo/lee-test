import { View, StyleSheet, FlatList } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  // ここからがMemo機能
  // 表示するデータの変数を指定 + データ形を読み込んで適用
  const [memos, setMemos] = useState<Memo[]>([])

  const navigation = useNavigation()
  useEffect(() => {
    // list画面だけログアウト項目表示
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])
  // データベースにあるデータを取得
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    // 取り出すデータを指定(列：日付順)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // データを入れる配列変数生成
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        // doc.data()から指定したデータを取り出す
        const { bodyText, updatedAt } = doc.data()
        // 配列変数に取り出したデータを入れる
        remoteMemos.push({
          id: doc.id,
          // 省略できる
          // bodyText: bodyText
          bodyText,
          updatedAt
        })
      })
      // 処理が終わったタイミングで保存
      setMemos(remoteMemos)
    })
    // 画面が消えたタイミングで監視中断
    return unsubscribe
  }, [])
  return (

        <View style={styles.container}>

            <FlatList
              data={memos}
              renderItem={({ item }) => <MemoListItem memo={item} /> }
            />

            <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color= 'white' />
            </CircleButton>

        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }

})

export default List
