import React, { useState } from 'react'
import { View,TouchableOpacity,StyleSheet,Text } from 'react-native'

function AppButton({children,width,height,backgroundColor,disable,onPress}){
    
    return(
        <TouchableOpacity onPress={onPress} disabled={disable}> 
            <View style={[{
                width,
                height,
                borderRadius:5,
                marginTop:20,
                justifyContent:'center',
                alignItems:'center'
            },disable ? {backgroundColor:'#f56587'}:{ backgroundColor,}]}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize:16,
        color:'#fff'
    },
})

export default AppButton