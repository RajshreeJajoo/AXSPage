import { StyleSheet, Text,TouchableOpacity,Button, View ,Image, BackHandler, ImageBackground,ScrollView} from 'react-native';
import React ,{useState} from 'react';
import logo from '../assests/TopRevealedTen.jpeg'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from "@react-native-material/core";
import Season1 from '../../AxsTvPage/screens/season1';
import MoreEpisodeSeries from '../../AxsTvPage/screens/moreEpisodeSeries';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home =()=>{
    return(
 <ScrollView>
    <View style={{height:'auto'}}>
    <ImageBackground source={logo} style={{width:'100%'}}>

    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'48%',margin:'1.2%'}}>
     <TouchableOpacity  style={[styles.imageButton,{width:'22%'}]} 
     onPress={()=>alert('Watch Now')}>
       <Text style={{color:'white'}}>Watch Now</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.imageButton,{width:'40%'}]} 
      onPress={()=>alert('Add To My Watch List')}>
       <Text style={{color:'white'}}>Add To My Watch List</Text>
      </TouchableOpacity>
     </View>
    </ImageBackground>

    <Text style={{margin:'2%'}}>2018 | English</Text>
<View style={{flexDirection:'row'}}>
<Text style={{marginLeft:'2%',fontWeight:'600'}}>The Top ten Revealed puts the spoitlight</Text>
<Icon name='share' size={20} style={{marginTop:'0%',marginLeft:'15%'}} onPress={()=>alert("Share This")}/>
<Icon name='watch' size={20} style={{marginTop:'0%',marginLeft:'5%'}} onPress={()=>alert("WatchNow")}/>

</View>
    <Text style={{margin:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat praesentium provident quibusdamo dolore</Text>

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
        backgroundColor:'#007FFF',
        marginBottom:'2%',
        alignItems:'center'
    }
})