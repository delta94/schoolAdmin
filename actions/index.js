import axios from "axios";
import config from "../config/config.json";
import { useNavigation } from '@react-navigation/native';
import {
ADMIN
} from "./types";




export const loginRes=(d,spinnerRender,navigation)=>async(dispatch)=>{
const res=await axios.post(config.api,{
        UserName:d.userName,
        Password:d.password,
        Token:config.Token
});
dispatch({
    type:ADMIN,
    payload:res.data
});
if(res.data.Error){
    spinnerRender();
    return null
}else{
    navigation.navigate('home')
    spinnerRender();
}
}
export const sendNotification=(data,nav)=>async(dispatch)=>{
    const res= await axios.post(config.sendNotificationApi,data);
    useNavigation().navigate('campus')
    console.log("res",res.data)
}