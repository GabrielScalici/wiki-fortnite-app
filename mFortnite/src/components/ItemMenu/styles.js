import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    //MODAL
    modal: {
        justifyContent: "flex-end",
        margin: 0
    },
    m_container: {
        backgroundColor: colors.cinza,
        marginHorizontal: metrics.half_padding,
        borderTopRightRadius: metrics.radio,
        borderTopLeftRadius: metrics.radio,
    },
    m_header: {
        backgroundColor: colors.primariaVermelha,
        borderTopRightRadius: metrics.radio,
        borderTopLeftRadius: metrics.radio,
        borderBottomRightRadius: metrics.radio,
        borderBottomLeftRadius: metrics.radio,
        margin: metrics.padding,
        padding: metrics.padding,
        justifyContent: 'center',
        alignItems: 'center',
    },
    m_body: {
        backgroundColor: colors.cinza,
        padding: metrics.half_padding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    m_title: {
        fontSize: font.title,
        color: colors.branco,
        fontFamily: 'System',
        textAlign: 'center'
    },
    m_text: {
        fontSize: font.subtitle,
        fontFamily: 'System',
        textAlign: 'center',
        padding: metrics.padding
    },
    m_fechar: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    m_image:{
        height: 80,
        width: 80,
        borderRadius: 20,
    },
    m_preco:{
        fontSize: font.subtitle,
        fontFamily: 'System',
        textAlign: 'center',
    }


});

export default styles;