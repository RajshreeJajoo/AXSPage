import { StyleSheet, Text,TouchableOpacity,Button, View ,Image, BackHandler, ImageBackground,ScrollView} from 'react-native';
import React ,{useState} from 'react';
import { Divider } from "@react-native-material/core";
import image6 from '../assests/image6.jpeg'
import image7 from '../assests/image7.jpeg'
import image8 from '../assests/image8.jpeg'
import image9 from '../assests/image9.jpeg'
import image10 from '../assests/image10.jpeg'
import logo from '../assests/TopRevealedTen.jpeg'

const Season1=()=>{

const [show,setShow]=useState(false);
 const[colorSeason1,setColorSeason1]=useState(false);
 const[colorSeason2,setColorSeason2]=useState(false);
const[showEpsiodeSeason1,setShowEpsiodeSeason1] = useState(false)
const[showEpsiodeSeason2,setShowEpsiodeSeason2] = useState(false)

    const showMore=()=>{
        setShow(!show);
    }

    const showSeason1=()=>{
        setColorSeason1(true);
        setColorSeason2(false);
        setShowEpsiodeSeason1(true);
        setShowEpsiodeSeason2(false);   
    }

    const showSeason2=()=>{
        setColorSeason1(false);
        setColorSeason2(true);
        setShowEpsiodeSeason1(false);
        setShowEpsiodeSeason2(true);    
    }

    return(
<View>
        <TouchableOpacity onPress={showMore}>
       <Text style={{margin:'3%',fontWeight:'600'}}>See More</Text>
      </TouchableOpacity>
      <Divider/>

  { show && <View style={{flexDirection:'row',justifyContent:'flex-start'}}>

    <TouchableOpacity  style={[ styles.buttonDesgin,{backgroundColor:colorSeason1?'#007FFF':'white'}]} 
    onPress={showSeason1}>
      <Text style={{color:colorSeason1?'white':'black'}}>Season 1</Text>
     </TouchableOpacity>

     <TouchableOpacity  style={[styles.buttonDesgin,{backgroundColor:colorSeason2?'#007FFF':'white'}]} 
     onPress={showSeason2}>
      <Text style={{color:colorSeason2?'white':'black'}}>Season 2</Text>
     </TouchableOpacity>
    </View>
  }  
  {showEpsiodeSeason1 && show && <View style={{margin:'4%'}}>

    <View style={{flexDirection:'row'}}>
    <Image source={logo} style={styles.imageDesgin}/>
    <View style={{flexDirection:'column',marginTop:'4%'}}>
    <Text style={{fontWeight:'500'}}>The Top Ten Episode 24 </Text>
    <Text>2018 | 02:03:35</Text>
    <Text style={{marginRight:'2%',width:'40%',marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat praesentium 
    </Text>
  </View>
    </View>

    <Divider />

  <View style={{flexDirection:'row'}}>
    <Image source={image6} style={styles.imageDesgin}/>
    <View style={{flexDirection:'column',marginTop:'4%'}}>
    <Text style={{fontWeight:'500'}}>The Top Ten Episode 25</Text>
    <Text>2018 | 01:03:00</Text>
        </View>
    </View>

    <Divider />

   <View style={{flexDirection:'row'}}>
    <Image source={image7} style={styles.imageDesgin}/>
    <View style={{flexDirection:'column',marginTop:'4%'}}>
    <Text style={{fontWeight:'500'}}>The Top Ten Episode 26</Text>
    <Text>2018 | 02:00:35</Text>
        </View>
    </View>
    
  </View>}
  <Divider />

  {showEpsiodeSeason2 && show && <View>


    <View style={{flexDirection:'row'}}>
    <Image source={image8} style={styles.imageDesgin}/>
    <View style={{flexDirection:'column',marginTop:'4%'}}>
    <Text style={{fontWeight:'500'}}>The Top Ten Episode 290 </Text>
    <Text>2020 | 01:00:40</Text>
  </View>
    </View>

    <Divider />


    <View style={{flexDirection:'row'}}>
    <Image source={image9} style={styles.imageDesgin}/>
    <View style={{flexDirection:'column',marginTop:'4%'}}>
    <Text style={{fontWeight:'500'}}>The Top Ten Episode 291 </Text>
    <Text>2020 | 03:12:00</Text>
   
  </View>
    </View>

    <Divider />


    <View style={{flexDirection:'row'}}>
    <Image source={image10} style={styles.imageDesgin}/>
    <View style={{flexDirection:'column',marginTop:'4%'}}>
    <Text style={{fontWeight:'500'}}>The Top Ten Episode 292 </Text>
    <Text>2020 | 01:40:35</Text>
 
  </View>
    </View>

    <Divider />

   </View>}
    </View>
    )

}

export default Season1

const styles = StyleSheet.create({
    imageDesgin:{
        width:'40%',
        margin:'2%'
    },
    buttonDesgin:{
        margin:'2%',
    padding:'1%',width:'25%',alignItems:'center',borderWidth:2
    }
  
})

