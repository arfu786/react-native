import React from 'react'
import {View, StyleSheet} from 'react-native'

import Label from "./Label"
import SelectImagePlaceHolder from "./SelectImagePlaceHolder"

function StoreLogoBox({labelName}){
    return(
        <View>
            <Label name={labelName} />
            <View style={styles.logoContainer}>
                <SelectImagePlaceHolder/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer:{
        borderRadius:5,
        borderColor:'#E9E9E9',
        borderWidth:1,
        width:"100%",
        height:70,
        marginTop:7,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default StoreLogoBox;