import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';

const MealItem = (props) => {
    return ( 
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onPress}>
            <View>
                <View style={{...styles.headerRow,...styles.itemTop}}>
                     <ImageBackground source={{uri:props.image}} style={styles.imageBg} >
                     <View style={styles.imgContainer}>
                         <Text style={styles.title}>{props.title}</Text>
                     </View>
                        
                     </ImageBackground>
                        
                </View>
                    <View style={{...styles.headerRow,...styles.itemBottom}}>
                        <Text> {props.duration}</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.afford.toUpperCase()}</Text>
                    </View>
            </View>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    mealItem:{
        height:200,
        width:'94.5%',
        backgroundColor:"#ccc",
        margin:10,
        borderRadius:10,
        overflow:'hidden'
    },
    imageBg:{
        width:"100%",
        height:"100%",
        justifyContent:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'white',
        textAlign:'center',
       

    },
    imgContainer:{
        backgroundColor:'rgba(0,0,0,0.4)',
        paddingHorizontal:5,
        paddingVertical:12

    },
    headerRow:{
       // marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    itemTop:{
        height:'90%'
    },
    itemBottom:{
         height:'10%',
         justifyContent:'space-between',
         marginHorizontal:10,
    }
});
 
export default MealItem;