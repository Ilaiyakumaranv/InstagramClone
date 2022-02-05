import { View, Text,StyleSheet, Image } from 'react-native';
import React from 'react';
import LoginForm from '../components/loginScreen/LoginForm';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={require('../assets/image2.png')}
                style={styles.icon}
        />
        </View>
        <LoginForm/>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
     flex : 1,
     backgroundColor: 'white',
     paddingTop: 50,
     paddingHorizontal: 12,
 },

 logoContainer:{
     alignItems: 'center',
     marginTop: 60,
    },
 icon: {
    width: 100,
    height: 100,
},
})

export default LoginScreen
