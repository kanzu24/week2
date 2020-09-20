import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View , Image, ScrollView,TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const imgData = [
    { id: 1, imgSource: require('./assets/anh1.jpg') },
    { id: 2, imgSource: require('./assets/anh2.jpg') },
    { id: 3, imgSource: require('./assets/anh3.jpg') },
    { id: 4, imgSource: require('./assets/anh4.jpg') },
  ];
  return (
    <ScrollView style={styles.ScrollView}>
     <View style={styles.container}>
          <View style={styles.header}>
          <Ionicons name="ios-arrow-back" size={24} color="black" />
          <Entypo name="grid" size={24} color="black" />
      </View>
      <View style= {styles.avatarWarpper} >
        <Image 
           source={require("./assets/anh1.jpg")} 
           style={styles.posterAvatar}/>
           
      </View>
      <View style={{flec:3}}>
         <View style={{alignItems:'center'}}>
           <Text style={{ fontSize: 40,fontWeight: "500"}}> Tuan Nguyen</Text>
           <Text style={{ fontSize: 10,fontWeight: "200"}} > hoc sinh</Text>
           </View> 
      </View>
      <View style={{flex:3}}>
         <View style={{ flexDirection:'row', justifyContent:"space-around"}}>
            <View style={{alignItems:'center'}}>
                <Text> 5</Text>
                <Text style ={{ fontSize:15, color:'grey',}}> Post</Text>
            </View>
         </View>
         <View style={{ flexDirection:'row', justifyContent:"space-around"}}>
            <View style={{alignItems:'center'}}>
                <Text> 200</Text>
                <Text style ={{ fontSize:15, color:'grey',}}> follower</Text>
            </View>
         </View>
         <View style={{ flexDirection:'row', justifyContent:"space-around"}}>
            <View style={{alignItems:'center'}}>
                <Text> 1</Text>
                <Text style ={{ fontSize:15, color:'grey',}}> following</Text>
            </View>
         </View>
      </View>
    </View>

     

    </ScrollView>

   
  );
}

const styles = StyleSheet.create({
  
  scrollView: {
    marginTop: Constants.statusBarHeight,
  },
  container: {
    height: "100%",
    padding: 20,
    
  },
  header:{
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  avatarWarpper: {
    flex:1,
  },
  posterAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
  },
  
  
  
});
