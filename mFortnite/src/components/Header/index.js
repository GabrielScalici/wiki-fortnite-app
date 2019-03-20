import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

//COMPONENTES

const Header = ({ onPress, children, simple }) => {


    if (simple) {
        return (
            <View style={styles.container}>
                
                <View style={{ width: 40 }}>
                </View>

                <Text style={styles.title}>{children}</Text>

                <View style={{ width: 40 }}>
                </View>

            </View>
        )
    }

};

export default Header;

/*
() => this.props.navigation.navigate('DrawerOpen')
 */