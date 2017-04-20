import React, {Component} from 'react';
import {Alert, View, ListView, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';
import ServidorListItem from './ServidorListItem';
import * as servidorService from '../services/serv-dep';

class ServidorList extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})};
    }

    search(vlrIdentificacaoUnica) {
        vlrIdentificacaoUnica = vlrIdentificacaoUnica.trim()
		if( vlrIdentificacaoUnica.length < 5) {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows([])
			});
	    } else {
             let servidores = [{"cod_pessoa":9659,"num_cpf_pessoa":"86339826172","nom_completo_pessoa":"ISMAEL DE FREITAS PINHO","descr_militar":"3 SGT - ISMAEL DE FREITAS PINHO - SIAPE: 1405707","vlr_identificacao_unica":"1405707","mat_sigrh_servidor":"083070","posto_graducao":"3 SGT"}];
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(servidores)
				});
                /*
			servidorService.findByVlrIdentificacaoUnica(vlrIdentificacaoUnica).then(servidores => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(servidores)
				});
			});
            */
		}
    }

    render() {
        return (
            <ListView style={styles.container}
                      dataSource={this.state.dataSource}
                      enableEmptySections={true}
                      renderRow={(data) => <ServidorListItem navigator={this.props.navigator} data={data} />}
                      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                      renderHeader={() => <SearchBar onChange={this.search.bind(this)} />}
            />
        );
    }
}
export default ServidorList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 60
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    }
});
