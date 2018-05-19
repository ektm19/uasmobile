import React from "react";

import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert,Image, Platform} from 'react-native';
import { StatusBar } from "react-native";
import {
  Button,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Thumbnail,
  Icon,
  Right
} from "native-base";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  
 GetItem (nama_brg) {
   
  Alert.alert(nama_brg);
 
  }
  GetItem (pemilik) {
   
    Alert.alert(pemilik);
   
    }
 
  componentDidMount() {
 
    return fetch('https://ajudanuts.000webhostapp.com/listVas.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .8,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
      
      <View style={styles.MainContainer}>
      
      <Header>
      <Left>
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        >
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>HomeScreen</Title>
        
      </Body>
      <Right />
    </Header>
 
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) =>
 
         <View style={{flex:1, flexDirection: 'row'}}>
 
           <Image source = {{ uri: rowData.gmbr }} style={styles.imageViewContainer} />
         
          
           <View style={{ marginTop: 30 }}>
           <Text>{rowData.nama_brg}</Text>
           <Text>{rowData.pemilik}</Text>
           </View>
         </View>
          }
        />
 
      </View>
    );
  }
 }
 
 const styles = StyleSheet.create({
 
 MainContainer :{
 
 // Setting up View inside content in Vertically center.
 justifyContent: 'center',
 flex:1,
 margin: 0,
 paddingTop: (Platform.OS === 'ios') ? 20 : 0,
 
 },
 
 imageViewContainer: {
 width: '50%',
 height: 100 ,
 margin: 10,
 borderRadius : 10
 
 },
 
 textViewContainer: {
 
   marginTop:30,
   width:'50%', 
   padding:20
 
 }
 
 });
 
