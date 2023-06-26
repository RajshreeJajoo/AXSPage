import React from "react";
import { View,Button } from "react-native";
const MainPage=({navigation})=>{
    return(
        <View style={{marginTop:'80%',width:'70%',marginLeft:'15%'}}>

            <Button title="Click to Navigate AxsTv Epsiode" onPress={()=>navigation.navigate('axsTv')}/>
        </View>
    )
}

export default MainPage