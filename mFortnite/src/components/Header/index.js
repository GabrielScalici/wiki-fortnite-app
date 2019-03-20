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

const Header = ({ onPress, children, onPressN, back, simple }) => {


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

    } else {
        if (back) {
            return (
                <View style={styles.container}>

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
        }
    }

};

export default Header;

/*
() => this.props.navigation.navigate('DrawerOpen')
 */