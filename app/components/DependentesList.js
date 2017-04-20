import React, {Component} from 'react';
import { Alert, View, ListView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DependentesListItem from './DependentesListItem';

class DependentesList extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows( this.props.dependentes );
        //this.state = { dependentes: this.props.dependentes };
    }    

    renderRow(dependente) {
        return <DependentesListItem dependente={dependente} />;
    }

  render() {
      return (
                 <ListView  dataSource={this.dataSource} 
                            renderRow={this.renderRow} />
      );
  }
}

const mapStateToProps = state => {
  return { dependentes: state.dependentes };
};

export default connect(mapStateToProps)(DependentesList);
