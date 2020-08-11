import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';

import StoreBubble from '../../shared/components/StoreBubble';
import Animals from '../../shared/constants/Animales';

class AnimalsScreen extends React.Component {
  state = {
    visible: false,
  };
  render() {
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/animals-bg/background.png')}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={'#D3701E'}
            bgColor2={'#F78E2F'}
            title={'الحيوانات'}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
          />
          <StoreBubble bgColor={'#D3701E'} />
          <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
            <FlatList
              data={Animals}
              renderItem={this.renderItem}
              keyExtractor={({index}) => `item-${index}`}
              style={{
                flex: 1,
                marginBottom: 30,
              }}
              horizontal={false}
              numColumns={3}
              getItemLayout={this._getItemLayout}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              columnWrapperStyle={{
                alignSelf: 'center',
                justifyContent: 'flex-end',
              }}
              ItemSeparatorComponent={() => (
                <View style={{paddingVertical: 10}} />
              )}
            />
          </View>

          {/*<LoginModal*/}
          {/*  modalVisible={this.state.visible}*/}
          {/*  closeModal={this.closeModal}*/}
          {/*/>*/}
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

export default AnimalsScreen;
