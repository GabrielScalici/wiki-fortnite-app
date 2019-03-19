import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        height: metrics.headerHeight,
        paddingTop: metrics.headerPadding,
        paddingHorizontal: metrics.padding,
        alignItems: 'center',
        backgroundColor: colors.primariaVermelha,
        justifyContent: 'space-between',
    },
    container_back:{
        flexDirection: "row",
        height: metrics.headerHeight,
        paddingTop: metrics.headerPadding,
        paddingHorizontal: metrics.padding,
        alignItems: 'center',
        backgroundColor: colors.primariaVerde,
        justifyContent: 'space-between',
    },
    title:{
        fontSize: font.header,
        color: colors.branco,
    },
    icon:{
        fontSize: font.iconHeader,
        color: colors.branco,
    },
    iconHelp:{
        fontSize: font.iconNotification,
        color: colors.branco,
    },
    image: {
        height: 40 ,
        width: 40,
        borderRadius: 10,
    },
    container_icon: {
        //width: 45,
        paddingHorizontal: metrics.half_padding,
    }


});

export default styles;