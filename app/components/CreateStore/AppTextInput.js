import React, { useEffect, useState } from 'react'
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from './Icon'
import Label from './Label'

function AppTextInput({labelName,placeHolder,submit,valid=false}){
    const [value,setValue] = useState('');
    const [status,setStatus] = useState('untouched'); 
    const [showClearIcon,setShowClearIcon] = useState(false)
    const onTextInputChange = (text) => {
        if(value.length == 0 ){
            setStatus('untouched');
        }else{setStatus('touched');}
        setValue(text);
    };

    const clearText = () => {
        setStatus('untouched');
        setValue('');
    };

    const closeButton = () =>{
        if(status=='touched'){
            return(
                <TouchableOpacity onPress={clearText}>
                    <Icon name='close' size={20} backgroundColor='#B5B5B5' color='#fff'/>
                </TouchableOpacity>
            )
        }
    };
    const verified = () => {
        if(valid){
            return(
                <Icon name='check' size={22} backgroundColor='#CCFED1' color='#00FB19'/>
            )
        }
    } 
    return(
        <View style={styles.text}>
            <Label name={labelName}/>
            <View style={styles.inputContainer}>
                <TextInput style={styles.text}
                placeholder={placeHolder}
                value={value}
                onChangeText={(text) => onTextInputChange(text)}
                onBlur={()=>{submit(value)}}></TextInput>
                {verified()}
                {closeButton()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        borderRadius:5,
        borderColor:'#E9E9E9',
        borderWidth:1,
        height:50,
        width:'100%',
        marginTop:7,
        alignItems:'center',
        justifyContent:'space-between',
        padding:8,
    },
    text:{
        flex:1
    },
})

export default AppTextInput;