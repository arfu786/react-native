import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AppText=({title,subTitle}) => {
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:17,
        color:'#4F4F4F',
        fontFamily:"Roboto",
        paddingBottom:2,
    },
    subTitle:{
        color:"#4F4F4F",
        fontSize:15,
        fontFamily:"Roboto",
    }
})

export default AppText;