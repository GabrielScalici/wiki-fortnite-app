import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';

import styles from './styles';

//MEDIDAS
let widthS = Dimensions.get('window').width;

const Card = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
        <CardView
            style={styles.card}
            cardElevation={10}
            cardMaxElevation={2}
            cornerRadius={20}
            cornerOverlap={false}
        >
            <View style={styles.child}>
                <View style={styles.titleView}>
                    <Text style={styles.title}> {text}</Text>
                </View>
            </View>
        </CardView>
        </TouchableOpacity>
    );

};

export default Card;

/*
() => this.props.navigation.navigate('DrawerOpen')
 */