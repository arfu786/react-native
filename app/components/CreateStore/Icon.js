import React from 'react'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { View} from 'react-native'

function Icon({name,size=25,backgroundColor="#fff",color="#000"}){
    return(
        <View style={{
            width:size,
            height:size,
            backgroundColor,
            borderRadius:size/2,
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:2
            }}>
        <MaterialCommunityIcons name={name} size={size * .7} color={color}/>
        </View>
    )
}


export default Icon;