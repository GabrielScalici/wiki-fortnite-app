import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Text, Content, Accordion, Card, CardItem, Left, Thumbnail, Body, Right } from "native-base";
import Modal from 'react-native-modal';
import renderif from 'render-if';

//MEDIDAS
import { metrics, colors, font } from '../../styles';

//MEDIDAS
import styles from './styles';

//COMPONENTES

export default class ItemMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        }

        this.setState = this.setState.bind(this);
    }

    render() {
        return (
            <View>
                <Card style={styles.container}>
                    <TouchableOpacity
                        onPress={this.props.onPress}
                    >
                        <CardItem>
                            <Left style={{flex: 3}}>
                                <Thumbnail source={this.props.image} />
                                <Body>
                                    <Text> {this.props.title} </Text>
                                    <Text note> {this.props.description} </Text>
                                </Body>
                            </Left>
                            <Right style={{flex: 1}}>
                                <Text> {this.props.p_grande} </Text>
                                <Text note> {this.props.p_broto} </Text>
                            </Right>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
                <Modal
                    style={styles.modal}
                    isVisible={this.state.modal}
                    onRequestClose={() => { this.setState({ modal: false }) }}
                    onBackdropPress={() => this.setState({ modal: false })}
                    onSwipe={() => this.setState({ modal: false })}
                    swipeDirection={'down'}
                    swipeThreshold={100}
                    animationIn={'slideInUp'}
                    animationInTiming={500}
                    backdropOpacity={0.50}
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={400 - 300}
                >
                    <TouchableOpacity style={styles.m_fechar}
                        onPress={() => { this.setState({ modal: false }) }}
                    >
                        <Text style={{ color: colors.branco }}> Fechar </Text>
                        <Icon name="ios-close-outline" size={35} color={colors.branco}> </Icon>
                    </TouchableOpacity>
                    <View style={styles.m_container}>
                        <View style={styles.m_header}>
                            <Text style={styles.m_title}> {this.props.title} </Text>
                        </View>
                        <View style={styles.m_body}>
                            <Image source={this.props.image} style={styles.m_image} />
                            <Text style={styles.m_text}> {this.props.description} </Text>

                            <View style={{flexDirection: "row"}}>
                                <View style={{paddingHorizontal: 10}}>
                                    <Text style={styles.m_preco}> GRANDE</Text>
                                    <Text style={styles.m_preco}>{this.props.p_grande} </Text>
                                </View>
                                <View style={{paddingHorizontal: 10}}>
                                    <Text style={styles.m_preco}> BROTO</Text>
                                    <Text style={styles.m_preco}>{this.props.p_broto} </Text>
                                </View>
                            </View>

                            {renderif(this.props.obs)(
                                <Text style={styles.m_text}> OBS: {this.props.obs} </Text>
                            )}
                            {this.props.children}
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }

}