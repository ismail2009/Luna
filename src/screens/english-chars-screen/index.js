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
import EnglishChars from '../../shared/constants/EnglishChars';
import {widthPercentageToDP} from 'react-native-responsive-screen';

class ArabicNumbersScreen extends React.Component {
  state = {
    visible: false,
  };
  render() {
    const width = widthPercentageToDP(90);
    const itemWidth = widthPercentageToDP(25);
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/eng-bg/background.png')}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={'#07618E'}
            bgColor2={'#0074BC'}
            title={'الحروف الإنجليزية'}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
          />
          <StoreBubble bgColor={'#07618E'} />
          <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
            <FlatList
              data={EnglishChars}
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
                alignItems: 'flex-start',
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

export default ArabicNumbersScreen;
