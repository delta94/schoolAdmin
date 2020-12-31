import React, { Component } from 'react';
import {
    Container,
    Body,
    Card,
    Item,
    Input,
    Button,
    Text,
    View,
    Spinner
} from "native-base";
import { connect } from "react-redux";
import {Image} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import {Dimensions} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import * as actions from "../actions"
class Login extends Component {
    state={
        userName:'',
        password:'',
        loading:false
    }
    spinnerRender=()=>{
        this.setState({loading:!this.state.loading})
    }    
    render() {
        return (
            <Container style={styles.container}>
                <LinearGradient
                    colors={['#ae0000','#ff2c2c','#ae0000']}
                    style={styles.background}
                />
                    <Image source={require('../assets/admin.png')} style={{width:100,height:100, marginBottom:20}}/>
                    <Item error={this.props.admin.Error ? true : false} regular style={styles.input}>
                        <AntDesign name="user" size={24} color="black" />
                        <Input onChangeText={v=>this.setState({userName:v})} placeholder="User Name"/>
                    </Item>
                    <Item error={this.props.admin.Error ? true : false} regular style={styles.input}>
                        <AntDesign name="key" size={24} color="black" />
                        <Input onChangeText={v=>this.setState({password:v})} placeholder="Password" secureTextEntry/>
                    </Item>
                    <Text>{this.props.admin.Error ? this.props.admin.Error : null}</Text>
                    <View style={styles.button}>
                    <Button 
                    onPress={() => {
                        this.spinnerRender()
                        this.props.loginRes(this.state,this.spinnerRender,this.props.navigation);
                        
                      }}
                    block 
                    style={{backgroundColor:'#2e2e2e',borderRadius:10}}
                    >
                        {this.state.loading?<Spinner color="white"/>:<Text>Login</Text>}
                    </Button>
                    </View>
            </Container>
        );
    }
}
const styles={
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height,
      },
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      input:{
          width:'90%',
          backgroundColor:'white',
          borderRadius:10,
          marginBottom:20,
          paddingLeft:20

      },
      button:{
        width:'90%'
      }
}

function mapStateToProps({ admin }) {
    return { admin }
  }
  
  export default connect(mapStateToProps, actions)(Login)