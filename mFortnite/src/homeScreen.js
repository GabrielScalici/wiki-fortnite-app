/**
    Aplicativo Missoes do Fortnite
    Criado e Produzido por: Gabriel Scalici e Gustavo Scalici
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, ScrollView, Dimensions, Image } from 'react-native';

//COMPONENTES
import Header from './components/Header';
import Card from './components/Card';

//MEDIDAS
import { colors, font, metrics, ad } from './styles';
let widthS = Dimensions.get('window').width;

//IMAGENS
import s1 from '../img/week/s1.png';
import s2 from '../img/week/s2.png';
import s3 from '../img/week/s3.png';
import s4 from '../img/week/s4.png';
import s5 from '../img/week/s5.png';
import s6 from '../img/week/s6.png';
import s7 from '../img/week/s7.png';
import s8 from '../img/week/s8.png';
import s9 from '../img/week/s9.png';
import s10 from '../img/week/s10.png';

type Props = {};
export default class homeScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.primaria} barStyle="light-content" />
                <Header simple > MISSÕES FORTNITE </Header>

                <ScrollView>

                    <Card
                        text="SEMANA 1"
                        onPress={() => {
                            this.props.navigation.navigate('weekScreen');
                        }}
                    />
                    
                    <Image
                        source={s1}
                        style={styles.btn}
                    />        



                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    btn:{
        //width: widthS - metrics.double_padding,
        //height: widthS - 200,
        elevation: 10,
    }


});
