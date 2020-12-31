import axios from "axios";
import config from "../config/config.json";
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
export const sendNotification=(data,nav,renderSpinner)=>async(dispatch)=>{
    delete data.isLoading
    console.log("data",data)
    const res= await axios.post(config.sendNotificationApi,data);
    renderSpinner();
    nav.navigate('campus');
    console.log("res",res.data)
}