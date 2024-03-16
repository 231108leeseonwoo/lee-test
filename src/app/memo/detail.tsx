import { View, Text, ScrollView, StyleSheet} from 'react-native'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
    router.push('/memo/Edit')
}

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>


            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2024年03月15日</Text>
            </View>
         
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    tets333
                    3333333
                    3333333333333
                    33333333333333
                </Text>
            </ScrollView>

            <CircleButton onPress={handlePress}  style={{ top: 60, bottom: 'auto'}}>
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
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: 'black'
    }
})

export default Detail