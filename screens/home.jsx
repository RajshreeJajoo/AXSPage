import { StyleSheet, Text,TouchableOpacity,Share, View ,Image, ImageBackground,ScrollView, Linking} from 'react-native';
import React ,{useState} from 'react';
import logo from '../assests/TopRevealedTen.jpeg'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from "@react-native-material/core";
import Season1 from '../../AxsTvPage/screens/season1';
import MoreEpisodeSeries from '../../AxsTvPage/screens/moreEpisodeSeries';
import Icon from 'react-native-vector-icons/Feather';
const Home =()=>{

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'share link with your family and friends',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
    return(
 <ScrollView>
    <View style={{height:'auto'}}>
    <TouchableOpacity  
     onPress={()=>Linking.openURL('https://youtu.be/6HL1oKE6aZc?si=6xVTT1QRhVhjYPez')}>
    <ImageBackground source={logo} style={{width:'100%',margin:'1%',padding:'1%'}}>

    <View style={{alignItems:'center',marginTop:'40%',margin:'1.2%'}}>
       <Icon name='play-circle' color='white' size={40} style={{marginBottom:'20%'}} onPress={()=>Linking.openURL('https://youtu.be/6HL1oKE6aZc?si=6xVTT1QRhVhjYPez')}/>      
     </View>
    </ImageBackground>
    </TouchableOpacity>


    <Text style={{margin:'2%',color:'black'}}>2018 | English</Text>
<View style={{flexDirection:'row'}}>
<Text style={{marginLeft:'2%',fontWeight:'600',color:'black'}}>The Top ten Revealed puts the spoitlight</Text>
<Icon name='share' size={20}  color='black' style={{marginTop:'0%',marginLeft:'15%'}} onPress={onShare}/>
<Icon name='watch' size={20} color='black' style={{marginTop:'0%',marginLeft:'5%'}} onPress={()=>alert("Add To My Watch List")}/>

</View>
    <Text style={{margin:'2%',color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat praesentium provident quibusdamo dolore</Text>

     {/* <Accordion>
        <AccordionSummary>
          <Text>Accordion 1</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Text>
        </AccordionDetails>
      </Accordion>  */}
      
    {/* <List.Section>
      <List.Accordion
        title="See More"
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" style={{backgroundColor:'red'}}/>
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section> */}

         <Divider/>
        <Season1/>
        <MoreEpisodeSeries/>
    </View>
</ScrollView>

    
    )
}

export default Home

const styles= StyleSheet.create({
    imageButton:{
        // backgroundColor:'#007FFF',
        // marginBottom:'2%',
        borderRadius:20,
        alignItems:'center'
    }
})