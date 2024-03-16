import {View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>

            <Header />

            <View style={styles.inner}>

                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value='Email address' />
                <TextInput style={styles.input} value='Password' />

                <Button label='Submit' />

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Text style={styles.footerLink}>Sign up here!</Text>
                </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 33,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: 'white',
        fontSize: 12,
        height: 48,
        padding: 8,
        marginBottom: 16
    },
   
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: 'black'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: 'blue'
    }
})

export default LogIn