import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
        <View>
        <TouchableOpacity>
          <Link href={{ pathname: '/memo/list2' }}asChild>

              <Text style={styles.kiji}>News</Text>

          </Link>

          <Link href={{ pathname: '/memo/list' }}asChild>

              <Text style={styles.memo}>Memo</Text>

          </Link>
          </TouchableOpacity>
        </View>

    </View>

  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    height: 60,
    justifyContent: 'flex-end'
  },
  kiji: {
    position: 'absolute',
    left: 20,
    bottom: 10,
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'white'
  },
  score: {
    position: 'absolute',
    right: 140,
    bottom: 10,
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'white'
  },

  memo: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Header
