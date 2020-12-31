import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "../actions";
import { Ionicons } from '@expo/vector-icons';
import config from "../config/config.json"
import {
    Container,
    Picker,
    Item,
    Input,
    Label,
    Icon,
    Form,
    Button,
    Text,
} from "native-base"
class SendNotification extends Component {
    state={
        title:'',
        notice:'',
        date:'',
        NoticeFor:'',
        notice_type_id:'',
        grade_Id:'',
        CampusId:'',
        Creater_Id:''
    }
    componentDidMount(){
        this.setState({
            CampusId:this.props.route.params.CampusId,
            date:new Date().toString().slice(0,15),
            Creater_Id:this.props.admin.UserInfo.User_Id,
            Token:config.Token
        })
    }
    sendData=()=>{
        if(this.state.title && this.state.notice){
            alert("please fill the data")
        }else{
            this.props.sendNotification(this.state)
        }
    }
    render() {
        return (
            <Container style={styles.container}>
                <Form style={styles.form}>
                <Item floatingLabel>
                    <Label>Tile</Label>
                <Input onChangeText={v=>this.setState({title:v})}/>
                </Item>
                <Item floatingLabel>
                    <Label>Notice</Label>
                <Input onChangeText={v=>this.setState({notice:v})} />
                </Item>
                <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ width: undefined }}
                selectedValue={this.state.NoticeFor}
                onValueChange={v=>this.setState({NoticeFor:v})}
                >
                    {
                        this.props.route.params.CampusInfo.NoticeForList.map((n)=>{
                            return <Picker.Item key={n.Id} label={n.Name} value={n.Id} />
                        })
                    }
                </Picker>
                <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ width: undefined }}
                selectedValue={this.state.notice_type_id}
                onValueChange={v=>this.setState({notice_type_id:v})}
                >
                    {
                        this.props.route.params.CampusInfo.NoticeTypeList.map((n)=>{
                            return <Picker.Item key={n.Id} label={n.Name} value={n.Id} />
                        })
                    }
                </Picker>
                <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ width: undefined }}
                selectedValue={this.state.grade_Id}
                onValueChange={v=>this.setState({grade_Id:v})}
                >
                    {
                        this.props.route.params.CampusInfo.GradesList.map((n)=>{
                            return <Picker.Item key={n.Id} label={n.Name} value={n.Id} />
                        })
                    }
                </Picker>
                <Button block style={{backgroundColor:'green',marginTop:20}} onPress={this.sendData}>
                    <Text>Send Notification</Text>
                    <Ionicons name="send" size={24} color="white" />
                </Button>

                </Form>
            </Container>
        );
    }
}
const styles={
    form:{
        width:'90%'
    },
    container:{
        flex:1,
        alignItems:'center'
    }
}
function mapStateToProps({admin}){
    return {admin}
}

export default connect(mapStateToProps,actions)(SendNotification)