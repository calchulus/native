import Component from '../components/component.react';
import React from 'react-native';
import {msg} from '../intl/store';
import {
  View,
  Text
} from 'react-native';

import * as style from '../app/app.style';

class Home extends Component {

  render() {
    const {router} = this.props;
    return (
      <View style={style.containerWithNavbar}>
        <View style={[style.centeredView, style.paddingBottom]}>
          <Text onPress={_ => router.transitionTo('about')} style={[style.centered, style.paragraph]}>{msg('home.text')}</Text>
        </View>
      </View>
    );
  }

}

Home.propTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
