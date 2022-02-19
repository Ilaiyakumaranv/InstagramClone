import react from "react";
import { View, StyleSheet, Image } from 'react-native';
import { FilledButton } from "../components/FilledButton";
import { Input } from "../components/Inputs";
import { TextButton } from "../components/TextButton";
import { Error } from "../components/Error";



export function RegistrationScreen() {
  return (
   <View style={styles.container}> 
    <Image style= {styles.titleImage} source={require('../assets/image2.png')} />
    <Error error={''} /> 
    <Input 
      style = {styles.input} 
        placeholderTextColor='#4444'
        placeholder='Phone number, username or email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}  
    />
    <Input 
      style = {styles.input} 
        placeholderTextColor='#4444'
        placeholder='Password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'       
    />

    <FilledButton title ={'REGISTER'} style={styles.loginButton} onPress={() => {} }/>

   
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    padding: 20,
  },

  titleImage: {
    marginBottom: 48,
  },

  input: {
    marginVertical: 8,
  },

  loginButton: {
    marginVertical: 32,
  }

});
