import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {

  constructor (){
    super();
    this.state={
      countA:0,
      countB:0
    }
  }

  teamA(){
   
    db.ref('/').update({
      'teamA':this.state.countA
    })
  }
 
  teamB(){
    console.log(db);
   
    db.ref('/').update({
      'teamB':this.state.countB
    })
  }
 

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={()=>{
                this.setState({ countA:this.state.countA+1})
                this.teamA()
                this.props.navigation.navigate('ThankingScreen')}}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={()=>{
                 this.setState({countB:this.state.countB+1})
                 this.teamB()
                 this.props.navigation.navigate('ThankingScreen')}}
                 >
              <Text style={{ fontSize:20}}>Team B</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor:"aqua",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin:10,
    width: 150,
    height: 55,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
