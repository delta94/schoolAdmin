import React, { Component } from 'react';
import {
    Container,
    H1,
    Card,
    CardItem,
    Body,
    View,
    Button,
} from "native-base";
import {TouchableOpacity} from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
class Campus extends Component {
    render() {
        return (
            <Container style={{flex:1,alignItems:'center'}}>
                <Card style={styles.card}>
                    <CardItem>
                        <Body style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <MaterialCommunityIcons name="human-male-child" size={60} color="red" />
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Body style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <H1 style={{color:'darkred'}}>
                            Students: {this.props.route.params.CampusInfo.CampusStudents}
                            </H1>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={styles.card}>
                    <CardItem>
                        <Body style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FontAwesome5 name="chalkboard-teacher" size={60} color="red" />
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Body style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <H1 style={{color:'darkred'}}>
                            Teachers: {this.props.route.params.CampusInfo.CampusTeachers}
                            </H1>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={styles.card}>
                    <CardItem>
                        <Body style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FontAwesome5 name="money-bill" size={60} color="red" />
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Body style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <H1 style={{color:'darkred'}}>
                            Fee Collected: {25000}
                            </H1>
                        </Body>
                    </CardItem>
                </Card>
                <Button style={styles.btn} onPress={()=>this.props.navigation.navigate('sendNotification',this.props.route.params)}>
                    <Entypo name="plus" size={50} color="white" />
                </Button>
            </Container>
        );
    }
}

const styles={
    card:{
        marginTop:10,
        width:'90%'
    },
    btn:{
        position:'absolute',
        bottom:20,
        right:20,
        width:70,
        height:70,
        borderRadius:70,
        backgroundColor:'red',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}

export default Campus;