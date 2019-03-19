/**
 * Donatello's pizzaria
 * 
 * Autor: Gabriel Henrique Campos Scalici
 * 
 * Função Tela : Chamada para todas as telas do projeto
**/

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import homeScreen from './src/homeScreen';
import weekScreen from './src/weekScreen';
import missionScreen from './src/missionScreen';
import aboutScreen from './src/aboutScreen';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    homeScreen: { screen: homeScreen },
    weekScreen: { screen: weekScreen },
    missionScreen: { screen: missionScreen },
    aboutScreen: { screen: aboutScreen },
}, {
    // Default config for all screens
    headerMode: 'none',
    //title: 'Main',
    initialRouteName: 'homeScreen',
});

export default PrimaryNav