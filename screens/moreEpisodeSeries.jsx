import { StyleSheet, Text,TouchableOpacity,Button, View ,Image, BackHandler, ImageBackground,ScrollView,Linking} from 'react-native';
import React ,{useState} from 'react';
import image1 from '../assests/image1.jpeg'
import image2 from '../assests/image2.jpeg'
import image3 from '../assests/image3.jpeg'
import image4 from '../assests/image4.jpeg'
import image6 from '../assests/image6.jpeg'
import image8 from '../assests/image8.jpeg'
import Icon from 'react-native-vector-icons/Feather';

import { Divider } from "@react-native-material/core";
const MoreEpisodeSeries=()=>{
    return(  
   <View>
   <Divider/>
   <Text style={{margin:'3%',fontWeight:'600',color:'black'}}>You May Also Like</Text>
   <Divider/>
   <View style={{flexDirection:'row',margin:'2%'}}>


   <TouchableOpacity  onPress={()=>Linking.openURL('https://youtu.be/oXETzpD905o?si=YSO5rk0l6CZS3WOE')}>
    <ImageBackground source={image4} style={{width: 200, alignSelf: 'center'}}>

    <View style={{alignItems:'center',marginTop:'40%',margin:'1.2%'}}>
       <Icon name='play-circle' color='white' size={20} style={{marginBottom:'30%'}} onPress={()=>Linking.openURL('https://youtu.be/oXETzpD905o?si=YSO5rk0l6CZS3WOE')}/>      
     </View>
    </ImageBackground>
    </TouchableOpacity>

        <View style={{marginLeft:'5%'}}/>
      
    <TouchableOpacity  onPress={()=>Linking.openURL('https://youtu.be/iEk17pAgFe0?si=YPUq7TRrJxXqc9kx')}>
    <ImageBackground source={image2} style={{width: 200, alignSelf: 'center'}}>

    <View style={{alignItems:'center',marginTop:'40%',margin:'1.2%'}}>
       <Icon name='play-circle' color='white' size={20} style={{marginBottom:'30%'}} onPress={()=>Linking.openURL('https://youtu.be/iEk17pAgFe0?si=YPUq7TRrJxXqc9kx')}/>      
     </View>
    </ImageBackground>
    </TouchableOpacity>

  </View>




  <View style={{flexDirection:'row',margin:'2%'}}>

          <TouchableOpacity  onPress={()=>Linking.openURL('https://youtu.be/u_VriV6cX8o?si=RvoJpYOpOcwwWAcV')}>
    <ImageBackground source={image3} style={{width: 200, alignSelf: 'center'}}>

    <View style={{alignItems:'center',marginTop:'40%',margin:'1.2%'}}>
       <Icon name='play-circle' color='white' size={20} style={{marginBottom:'30%'}} onPress={()=>Linking.openURL('https://youtu.be/u_VriV6cX8o?si=RvoJpYOpOcwwWAcV')}/>      
     </View>
    </ImageBackground>
    </TouchableOpacity>


        <View style={{marginLeft:'5%'}}/>

          <TouchableOpacity  onPress={()=>Linking.openURL('https://youtu.be/uE5VY6perMw?si=_-snkPTrcFIR5jv8')}>
    <ImageBackground source={image1} style={{width: 200, alignSelf: 'center'}}>

    <View style={{alignItems:'center',marginTop:'40%',margin:'1.2%'}}>
       <Icon name='play-circle' color='white' size={20} style={{marginBottom:'30%'}} onPress={()=>Linking.openURL('https://youtu.be/uE5VY6perMw?si=_-snkPTrcFIR5jv8')}/>      
     </View>
    </ImageBackground>
    </TouchableOpacity>

          
  </View>
  <View style={{flexDirection:'row',margin:'2%'}}>

  <TouchableOpacity  onPress={()=>Linking.openURL('https://youtu.be/ilVtobb7PLs?si=8gxIQOrpV5WA6NOf')}>
    <ImageBackground source={image6} style={{width: 200, alignSelf: 'center'}}>

    <View style={{alignItems:'center',marginTop:'40%',margin:'1.2%'}}>
       <Icon name='play-circle' color='white' size={20} style={{marginBottom:'30%'}} onPress={()=>Linking.openURL('https://youtu.be/ilVtobb7PLs?si=8gxIQOrpV5WA6NOf')}/>      
     </View>
    </ImageBackground>
    </TouchableOpacity>

        <View style={{marginLeft:'5%'}}/>

          <TouchableOpacity  onPress={()=>Linking.openURL('https://youtu.be/kt3w_ZPkSWY?si=m0DfUNJv5j7kV3xy')}>
    <ImageBackground source={image8} style={{width: 200, alignSelf: 'center'}}>

    <View style={{alignItems:'center',marginTop:'40%',margin:'1.2%'}}>
       <Icon name='play-circle' color='white' size={20} style={{marginBottom:'30%'}} onPress={()=>Linking.openURL('https://youtu.be/kt3w_ZPkSWY?si=m0DfUNJv5j7kV3xy')}/>      
     </View>
    </ImageBackground>
    </TouchableOpacity>

  </View>
  </View>
    )
}

export default MoreEpisodeSeries