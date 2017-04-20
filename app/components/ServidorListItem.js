import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import * as servidorService from '../services/serv-dep';

class ServidorListItem extends Component {

    showDetails() {    
        this.props.navigator.push({name: 'dependentes-list', data: this.props.data, title: this.props.data.nom_completo_pessoa});
    }

    render() {
        return (
            <TouchableHighlight onPress={this.showDetails.bind(this)} underlayColor={'#EEEEEE'}>
                <View style={styles.container}>
                    <Image source={{uri: 'https://server-desenv.cbm.df.gov.br/programadores/eulalio/images/icons/calendar-day_16x16.png'}} style={styles.picture} />
                    <View>
                        <Text>{this.props.data.nom_completo_pessoa}</Text>
                        <Text style={styles.title}>{this.props.data.posto_graducao} - {this.props.data.vlr_identificacao_unica}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

export default ServidorListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    picture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8
    },
    title: {
        color: '#848484'
    }
});
