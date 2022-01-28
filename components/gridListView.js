import React from 'react';
import {View,Text,StyleSheet,Button,TouchableNativeFeedback,TouchableOpacity,Platform} from "react-native";


const GridTile = (props) => {

    let TouchableOpc = TouchableOpacity;

    if(Platform.OS === 'android'){
        TouchableOpc = TouchableNativeFeedback
    }

    return ( 
        <View style={styles.gridStyle}>
            <TouchableOpc style={{flex:1}}  onPress={ props.onSelect }  >         
                <View style = {{...styles.container,...{backgroundColor:props.color}}}>
                    <Text style = {styles.title}>{props.title}</Text>
                </View>
            </TouchableOpc> 
        </View>
           
     );
}


const styles = StyleSheet.create({
   container:{
       flex:1,
       borderRadius:10,
       padding:15,
       justifyContent:'flex-end',
       alignItems:'flex-end',
       shadowColor:'black',
       shadowOpacity:0.30,
       shadowRadius:10,
       shadowOffset: {width:0,height:3},
      

   },
   gridStyle:{
       flex:1,
       margin:15,
       height:150,
       borderRadius:10,
       overflow:Platform.OS==='android'?'hidden':'visible',
       elevation:6
   }
   ,
   title:{
    fontFamily:'open-sans-bold',
    fontSize:20

   }
})
 
export default GridTile ;