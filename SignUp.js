import React from 'react'
import {
    View,
    TextInput,
    StyleSheet, ImageBackground, Image, Alert
} from 'react-native'
import MainButton from "./Components/MainButton";
import axios from 'axios'


export default class SignUp extends React.Component {
    state = {
        firstName: '', lastName: '', password: '', email: ''
    }
    onChangeText = (key, val) => {
        this.setState({[key]: val})
    }
    badlert = (text) => {
        Alert.alert(
            "Looks like this e-mail is already registered!"
        )
    }
    signUp = () => {
        const {firstName, lastName, password, email} = this.state

        axios.post('https://6319e5f5.ngrok.io/clients-api/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
            .then((response) => {
                    this.props.navigation.navigate('Onboarding1')
            })
            .catch(e => this.badlert())
    }


    render() {
        return (
            <ImageBackground
                style={styles.backGround}
                source={require('./images/night_1209938_1920.jpg')}
                resizeMode={`cover`}
            >
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='First Name'
                        autoCapitalize="none"
                        placeholderTextColor='black'
                        onChangeText={val => this.onChangeText('firstName', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Last Name'
                        autoCapitalize="none"
                        placeholderTextColor='black'
                        onChangeText={val => this.onChangeText('lastName', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        autoCapitalize="none"
                        placeholderTextColor='black'
                        onChangeText={val => this.onChangeText('email', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='black'
                        onChangeText={val => this.onChangeText('password', val)}
                    />

                    <MainButton
                        style={styles.mainButton}
                        title='Sign Up'
                        onPress={this.signUp}
                    />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 55,
        backgroundColor: `rgba(243, 247, 255, 1)`,
        opacity: 0.55,
        margin: 10,
        padding: 8,
        borderRadius: 5,
        color: `black`,
        fontSize: 15,
        fontWeight: '200',
    },
    container: {
        alignItems: `center`,
        flex: 1,
        justifyContent: `center`,
        width: `100%`
    },
    backGround: {
        flex: 1,
        opacity: 1
    },
})