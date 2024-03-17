import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
  return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>TT Score</Text>
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    height: 80,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Header
