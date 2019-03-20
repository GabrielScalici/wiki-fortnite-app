/**
    Aplicativo Missoes do Fortnite
    Criado e Produzido por: Gabriel Scalici e Gustavo Scalici
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

//MEDIDAS
import { colors, metrics, font } from './styles';

//IMAGENS
import star from '../img/star.png';

type Props = {};
export default class splashScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
            <Image source={star} style={styles.image}/>
            <Text style={styles.title}> Missões do Fortnite</Text>
            <Text style={styles.subtitle}> Winkazi </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaria,
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Burbank',
    color: 'white'
  },
  subtitle:{
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Burbank',
    color: 'white'
  },
  image:{
      height: 200,
      width: 200,
  }

});
