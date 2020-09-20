import React, { useEffect, useState } from 'react';
import { View,StyleSheet,Text, Image,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome,} from '@expo/vector-icons';
import AppText from '../components/CreateStore/AppText'
import AppButton from '../components/CreateStore/AppButton'
import StoreLogoBox from '../components/CreateStore/StoreLogoBox';
import AppTextInput from '../components/CreateStore/AppTextInput';



function CreateStoreScreen(props){
    const webRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
    const [disable,setDisable] = useState(true)
    const [userNameValid,setUserNameValid] = useState(false)
    const [webSiteValid, setWebSiteValid] = useState(false)
    const [form,setForm] = useState({
        storeName:'',
        userName:'',
        webSite:'',
    })
    const validate = () => {
        if(form.webSite.length > 0 ){
            setWebSiteValid(true)
        }else{setWebSiteValid(false)}
        if(form.userName.length > 0 ){
            setUserNameValid(true)
        }else{setUserNameValid(false)}
        if(form.storeName.length > 0 && userNameValid && webSiteValid ){
            setDisable(false)
        }else{setDisable(true)}
    }
    useEffect(validate,[form.storeName,form.userName,form.webSite,webSiteValid])

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.background}>
            <Image style={styles.bgimg}
            source={require("../assets/Group5.png")} />
            <View style={styles.backbottom}>
                <View style={styles.copyright}>
                   <View style={styles.copyrightText}>
                    <FontAwesome  name="copyright" size={14} color="#2C5372"/>
                    <Text style={styles.text}>2020 stors app</Text>
                   </View>
                </View>
            </View>

            <View style={styles.card}>
                <AppText title='Hi Arfad'
                 subTitle="Let's get started by creating a new store"/>   
                <StoreLogoBox labelName="STORE LOGO"/>
                <AppTextInput labelName='STORE NAME' placeHolder='Enter your store name'
                submit={value => setForm({...form,storeName:value})} />
                <AppTextInput labelName='USERNAME' placeHolder='Enter your user name'
                valid={userNameValid}
                submit={value => setForm({...form,userName:value})}/>
                <View style={styles.webContainer}>
                    <AppTextInput labelName='WEBSITE' placeHolder='Enter your website address'
                    valid={webSiteValid}
                    submit={value => setForm({...form,webSite:value})} />
                    <Text style={styles.bold}>.stors.app</Text>
                </View>
                <AppButton width='100%' 
                    height={50}
                    backgroundColor='#ec3e5d'
                    form={form}
                    disable={disable}
                    onPress={()=>console.log(form.storeName,form.userName,form.webSite)}>
                    Create Store
                </AppButton>
            </View>
        </View>
        </TouchableWithoutFeedback>
        );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#e5e5e5',
        flex:1,
        paddingTop:10,
        justifyContent:'flex-end',
    },
    backbottom:{
        backgroundColor: "#011627",
        height:'65%',
        width:'100%',    
    },
    bgimg:{
        alignSelf:'center',
        width:191,
        height:95,
        marginVertical:120,
    },
    bold:{
        fontWeight:"bold",
        fontSize:15,
        top:5,
        paddingLeft:5
        
    },
    card:{
        backgroundColor:'#fff',
        position:"absolute",
        bottom:'23.12%',
        left:'6.64%',
        top:'22.5%',
        right:'6.64%',
        width:345,
        height:465,
        borderRadius:5,
        paddingHorizontal:20,
        paddingVertical:20,

    },
    copyright:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        padding:15
    },
    copyrightText:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

    },
    text:{
        paddingLeft:5,
        color:"#2C5372",
        fontSize:14,
        fontFamily:"Roboto",
        fontStyle:"normal",
        
    },
    webContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
})

export default CreateStoreScreen;