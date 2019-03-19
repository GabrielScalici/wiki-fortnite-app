import { AppRegistry } from 'react-native';
import React, {Component} from 'React';

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

import App from './App';
import Splash from "./src/splashScreen";

console.disableYellowBox = true;

class Main extends Component {
    constructor(props){
        super(props);
        //Estado para verificar qual a tela esta sendo exibida (INICIAL ==> splashScreen)
        this.state = { atualScreen: 'Splash' };
        //Funcao temporizadora para mudar de tela após um período
        setTimeout(() => {
            this.setState({ atualScreen: 'App'})
        }, 3000) // 3 segundos
    }

    render() {
        const {atualScreen} = this.state
        //Analise para ver qual tela esta sendo exibida para tomar as decisoes
        let mainScreen = atualScreen === 'Splash' ? <Splash /> : <App />
        return mainScreen

    }
}

AppRegistry.registerComponent('mFortnite', () => Main );

