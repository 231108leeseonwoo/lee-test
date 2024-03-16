import { View, Text, StyleSheet, type TextStyle} from 'react-native'

interface Props {
    children: string
    bang?: boolean
    style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
    const { children, bang, style } = props
  return (
        <View>
            <Text style={[styles.text, style]}>
                Hello97 {children}{bang === true ? '!' : ''}
            </Text>
        </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello