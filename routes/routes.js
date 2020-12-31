import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/login";
import Home from "../screens/home";
import Campus from "../screens/campus";
import SendNotification from "../screens/sendNotification";

const Stack=createStackNavigator();

class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                screenOptions={{
                        headerStyle: {
                            backgroundColor: 'red',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen options={{headerShown:false}} name="login" component={Login}/>
                    <Stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerLeft: null
                    }}
                    />
                    <Stack.Screen
                    name="campus"
                    component={Campus}
                    options={{
                        title: 'Campus'
                    }}
                    />
                    <Stack.Screen
                    name="sendNotification"
                    component={SendNotification}
                    options={{
                        title: 'Send Notification'
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Routes;