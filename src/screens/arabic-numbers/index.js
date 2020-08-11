import React from 'react';
import {
  ImageBackground,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';

import StoreBubble from '../../shared/components/StoreBubble';
import ArabicNumbers from '../../shared/constants/ArabicNumbers';

class ArabicNumbersScreen extends React.Component {
  state = {
    visible: false,
  };
  render() {
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/numbers-bg/background.png')}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={'#955299'}
            bgColor2={'#A967AA'}
            title={'الأرقام العربية'}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
          />
          <StoreBubble bgColor={'#955299'} />
          <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
            <FlatList
              data={ArabicNumbers}
              renderItem={this.renderItem}
              keyExtractor={({index}) => `item-${index}`}
              style={{
                flex: 1,
              }}
              horizontal={false}
              numColumns={4}
              getItemLayout={this._getItemLayout}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              columnWrapperStyle={{
                alignSelf: 'center',
                // alignItems: 'flex-start',
              }}
              ItemSeparatorComponent={() => (
                <View style={{paddingVertical: 10}} />
              )}
            />
          </View>

          <LoginModal
            modalVisible={this.state.visible}
            closeModal={this.closeModal}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
  renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[styles.primaryButton, {marginHorizontal: '1.5%'}]}>
      <View style={styles.iconStyle}>{item.image}</View>
    </TouchableOpacity>
  );
  _getItemLayout = (data, index) => {
    const productHeight = 100 + 10;
    return {
      length: productHeight,
      offset: productHeight * index,
      index,
    };
  };
  closeModal = () => this.setState({visible: false});
  openModal = () => this.setState({visible: true});
}

export default ArabicNumbersScreen;
