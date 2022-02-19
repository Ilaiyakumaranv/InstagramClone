import react from "react";
import {NavigationContainer} from '@react-navigation/native';
import  {createStackNavigation} from '@react-navigation/stack';
import { AuthStackNavigator } from "./navigators/AuthStackNavigator";


const RootStack = createStackNavigation();



export default function () {
  return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator()} />
        </RootStack.Navigator>
      </NavigationContainer>
  );
}