import { StyleSheet, Text,TouchableOpacity,Button, View ,Image, BackHandler, ImageBackground,ScrollView} from 'react-native';
import React ,{useState} from 'react';
import image1 from '../assests/image1.jpeg'
import image2 from '../assests/image2.jpeg'
import image3 from '../assests/image3.jpeg'
import image4 from '../assests/image4.jpeg'

import { Divider } from "@react-native-material/core";
const MoreEpisodeSeries=()=>{
    return(  
   <View>
   <Divider/>
   <Text style={{margin:'3%',fontWeight:'600'}}>You May Also Like</Text>
   <Divider/>
   <View style={{flexDirection:'row',margin:'2%'}}>
      <Image source={image1} style={{width:'48%'}}/>
        <View style={{marginLeft:'5%'}}/>
       <Image source={image2} style={{width:'48%'}}/>
  </View>
  <View style={{flexDirection:'row',margin:'2%'}}>
      <Image source={image3} style={{width:'48%'}}/>
        <View style={{marginLeft:'5%'}}/>
       <Image source={image4} style={{width:'48%'}}/>
  </View>
  </View>
    )
}

export default MoreEpisodeSeries