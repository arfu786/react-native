import React from 'react'
import { View,StyleSheet } from 'react-native'

import { MaterialCommunityIcons} from '@expo/vector-icons'

function SelectImagePlaceHolder(){
    return(
    <View style={styles.container}>
        <MaterialCommunityIcons name="camera-image" size={20} color="#EC3E5D" />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
            height:50,
            width:50,
            borderRadius:25,
            borderStyle:'dashed',
            borderWidth:1,
            borderColor:'#EC3E5D',
            backgroundColor:'#f7b2be',
            justifyContent:'center',
            alignItems:'center'
    }
    
})

export default SelectImagePlaceHolder;