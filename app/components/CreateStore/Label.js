import React from 'react'
import { View,Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const Label = ({name}) => {
  return (
      <View style={styles.smallText}>
          <Text style={styles.inText}>{name}</Text>
          <Feather name="info" size={10} color="#EC3E5D" />
      </View>
  )
}

const styles = StyleSheet.create({
  inText:{
    color:"#EC3E5D",
    fontSize:10,
    paddingEnd:5,
  },
  smallText:{
    flexDirection:"row",
    alignItems:"center",
    top:14,
    left:18,
  },
})
export default Label;