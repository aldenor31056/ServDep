import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class DependentesListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { dependente, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {dependente.dsc_tipo_condicao_dependente}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { cod_pessoa_dependente, nom_dependente } = this.props.dependente;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectDependente(cod_pessoa_dependente)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{nom_dependente}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedDependenteId === ownProps.dependente.cod_pessoa_dependente;

  return { expanded };
};

export default connect(mapStateToProps, actions)(DependentesListItem);