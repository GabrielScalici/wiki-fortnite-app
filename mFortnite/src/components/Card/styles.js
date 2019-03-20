import { StyleSheet, Dimensions } from 'react-native';

import { metrics, font, colors } from '../../styles';

let widthS = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.double_padding,
        margin: metrics.padding,
        backgroundColor: colors.secundaria
    },
    child: {
        width: widthS - metrics.double_padding,
        height: widthS - 200,
        margin: metrics.padding,
    },
    title: {
        fontFamily: 'Burbank',
        fontSize: font.titleList,
        color: 'white'
    },
    titleView:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        margin: metrics.padding,
    }


});

export default styles;