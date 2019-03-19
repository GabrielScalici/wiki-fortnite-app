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

const Header = ({ onPress, children, onPressN, back, simple }) => {


    if (simple) {
        return (
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={logo}
                />

                <Text style={styles.title}>{children}</Text>

                <View style={{ width: 40 }}>
                </View>

            </View>
        )

    } else {
        if (back) {
            return (
                <View style={styles.container_back}>

                    <TouchableOpacity
                        style={styles.container_icon}
                        onPress={onPress}>
                        <Icon name={"angle-left"} style={styles.icon} />
                    </TouchableOpacity>

                    <Text style={styles.title}>{children}</Text>

                    <View style={{ width: 20 }}>
                    </View>


                </View>
            )
        } else {
            return (
                <View style={styles.container}>

                    <Image
                        style={styles.image}
                        source={logo}
                    />

                    <Text style={styles.title}>{children}</Text>

                    <TouchableOpacity
                        style={styles.container_icon}
                        onPress={onPress}>
                        <Icon name={"cogs"} style={styles.icon} />
                    </TouchableOpacity>


                </View>
            )
        }
    }

};

export default Header;

/*
() => this.props.navigation.navigate('DrawerOpen')
 */