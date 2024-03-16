import {View, Text, TextInput, TouchableOpacity,
     StyleSheet } from 'react-native'

import { Link, router } from 'expo-router'
import { useState } from 'react'

import Button from '../../components/Button'

const handlePress = (): void => {
    // 会員登録
    router.push('/memo/list')
}

const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    return (
        <View style={styles.container}>


            <View style={styles.inner}>

                <Text style={styles.title}>Sign Up</Text>
                <TextInput 
                    style={styles.input} 
                    value={email} 
                    onChangeText={(text) => { setEmail(text) }} 
                    autoCapitalize='none'   
                    keyboardType='email-address'
                    placeholder='Email Address'
                    textContentType='emailAddress'
                />
                <TextInput 
                    style={styles.input} 
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize='none' 
                    secureTextEntry
                    placeholder='Password'
                    textContentType='password'
                />
                <Button label='Submit' onPress={handlePress} />

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href='/auth/login' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In.</Text>
                        </TouchableOpacity>
                    </Link>
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

export default SignUp