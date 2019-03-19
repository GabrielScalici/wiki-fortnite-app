import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import logo from '../../../img/logo_so.png'

//COMPONENTES

const MenuDown = ({ onPress, children, color, title, desc, preco }) => {

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>

            {/* <Image
                    style={styles.image}
                    source={logo}
                /> */}

            <Text style={styles.title}>{title}</Text>

            <View>
                <Text style={styles.title}>{desc}</Text>
                <Text style={styles.title}>{preco}</Text>
            </View>

        </TouchableOpacity>
    )
};

export default MenuDown;

/*
() => this.props.navigation.navigate('DrawerOpen')
 */