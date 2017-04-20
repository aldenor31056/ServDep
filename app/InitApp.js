import React, {Component} from 'react';
import {Navigator, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ServidorList from './components/ServidorList';
import DependentesProvider  from './components/DependentesProvider';

class InitApp extends Component {

    renderScene(route, navigator) {
        switch (route.name) {
            case 'servidor-list':
                return <ServidorList navigator={navigator} />
            case 'dependentes-list':
                return <DependentesProvider navigator={navigator} data={route.data} />
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'servidor-list', title: 'Lista de Servidores'}}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) => {
                                if (route.name === 'servidor-list') {
                                    return null;
                                } else {
                                    return (
                                        <TouchableOpacity onPress={() => navigator.pop()}>
                                            <Image source={require('./assets/back.png')} style={styles.backButton} />
                                        </TouchableOpacity>
                                    );
                                }
                            },
                            RightButton: (route, navigator, index, navState) => {
                                return null;
                            },
                            Title: (route, navigator, index, navState) => {
                                return (<Text style={styles.title}>{route.title}</Text>);
                            },
                        }}
                        style={styles.navBar}
                    />
                }
            />
        )
    }
}
export default InitApp;

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#FAFAFF',
        height: 60,
    },
    backButton: {
        marginTop: 8,
        marginLeft: 12,
        height: 24,
        width: 24
    },
    title: {
        padding: 8,
        fontSize: 16,
        fontWeight: 'bold'
    }
});