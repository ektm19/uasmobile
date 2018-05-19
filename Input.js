import React, { Component } from 'react';
import { StatusBar, Alert } from "react-native";
import { Left, Right, Button, Text, Container, Header, Content, Form, Item, Input, Label, Body, Title } from 'native-base';
export default class FloatingLabelExample extends Component {
  constructor(props) {
 
    super(props) 
 
    this.state = {
 
      tgl: '',
      waktu: '',
      agenda: '',
      loading: 'true'
 
    }
 
  }

  InsertDataToServer = () =>{


    const { tgl }  = this.state ;
    const { waktu }  = this.state ;
    const { agenda }  = this.state ;
    
    
   fetch('https://ajudanuts.000webhostapp.com/kirimData.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       tgl: tgl,
    
       waktu: waktu,
    
       agenda: agenda


    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
   // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }
     

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
     return (
      <Container >
       <Header>
       <Body>
           <Button full>
          <Title style={{paddingTop:10,fontWeight:'bold',paddingRight:0}} >
          My-Ajudan</Title>
          </Button>
          </Body>
            </Header>
        <Content>
          <Form style={{marginRight: 10}} >
           
            <Item floatingLabel >
              <Label>Tanggal </Label>
              <Input onChangeText={tgl => this.setState({tgl})}/>
            </Item>
            <Item floatingLabel >
              <Label>Jam</Label>
              <Input onChangeText={waktu => this.setState({waktu})}/>
            </Item>
            <Item floatingLabel >
              <Label>Tuliskan Agenda</Label>
              <Input onChangeText={agenda => this.setState({agenda})}/>
            </Item>
          </Form>
        </Content>
        <Content style={{margin: 10}} >
          <Button block info onPress={this.InsertDataToServer}>
            <Text>Simpan</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}