import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'

// 編集するための次の画面にidを渡す
const handlePress = (id: string): void => {
  router.push({ pathname: '/memo/Edit', params: { id } })
}

const Detail = (): JSX.Element => {
  // 渡されたメモのidを受け取る
  // idの形を指定
  const id = String(useLocalSearchParams().id)
  console.log(id)
  const [memo, setMemo] = useState<Memo | null>(null)
  // データベースに取得したidを使って該当メモを取得
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      // memoに値を入れる
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt
      })
    })
    return unsubscribe
  }, [])
  return (
        <View style={styles.container}>

            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>

            <CircleButton onPress={() => { handlePress(id) } } style={{ top: 60, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color= 'white' />
            </CircleButton>

        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 90,
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 15
  },
  memoTitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingHorizontal: 27
  },
  memoBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: 'black'
  }
})

export default Detail
