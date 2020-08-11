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
import ArabicChars from '../../shared/constants/ArabicChars';
class ArabicCharsScreen extends React.Component {
  state = {
    visible: false,
  };
  render() {
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/arabic-bg/background.png')}
        style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            <CustomHeader
              bgColor1={'#9B1C98'}
              bgColor2={'#B226A7'}
              title={'الحروف العربية'}
              actions={{
                goBack: () => this.props.navigation.goBack(),
              }}
            />
            <StoreBubble bgColor={'#9B1C98'} />
            <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
              <FlatList
                data={ArabicChars}
                renderItem={this.renderItem}
                keyExtractor={({index}) => `item-${index}`}
                style={{
                  flex: 1,
                }}
                horizontal={false}
                numColumns={6}
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

            <LoginModal
              modalVisible={this.state.visible}
              closeModal={this.closeModal}
            />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
  renderItem = ({item, index}) => (
    <TouchableOpacity style={[styles.primaryButton, {marginHorizontal: '.7%'}]}>
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

export default ArabicCharsScreen;
