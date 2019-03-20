/**
    Aplicativo Missoes do Fortnite
    Criado e Produzido por: Gabriel Scalici e Gustavo Scalici
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, ScrollView, Dimensions } from 'react-native';

//COMPONENTES
import Header from './components/Header';
import Card from './components/Card';

//MEDIDAS
import { colors, font, metrics, ad } from './styles';
let widthS = Dimensions.get('window').width;

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
                    <Card
                        text="SEMANA 1"
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


});
