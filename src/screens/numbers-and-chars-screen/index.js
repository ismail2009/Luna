import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';

import {headers} from '../../shared/styles';
import {colors} from '../../shared/styles/theme.style';
import StoreBubble from '../../shared/components/StoreBubble';
import getIUri from '../../shared/utils/getIUri';
import {SoundButton} from '../../shared/components/Button';

class NumbersAndChars extends React.Component {
  state = {
    visible: false,
  };

  render() {
    const {
      state: {visible},
      props: {
        categories,
        route: {
          params: {category, user},
        },
      },
    } = this;
    console.log(category, 'category');

    return (
      <ImageBackground
        resizeMode={'cover'}
        source={{uri: getIUri(category.bg_image)}}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={category.title_color}
            bgColor2={category.bg_color}
            bgColorTitle={category.title_color}
            username={user?.userDetail?.name}
            title={'حروف وأرقام'}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
          />
          {/*<StoreBubble bgColor={'#199B4D'} />*/}
          <View style={styles.listStyle}>
            <FlatList
              data={category.sub_categories}
              renderItem={({item}) => {
                const uri = getIUri(item.image);
                return (
                  <SoundButton
                    onPress={() =>
                      this.props.navigation.navigate('ContentScreen', {
                        subCategory: item,
                        user,
                      })
                    }
                    style={styles.primaryButton}>
                    <View style={[styles.iconStyle]}>
                      <Image
                        style={styles.imageStyle}
                        source={{
                          uri,
                        }}
                      />
                    </View>
                    <Text
                      style={[headers.primary, {color: colors.WHITE_COLOR}]}>
                      {item.name}
                    </Text>
                  </SoundButton>
                );
              }}
              keyExtractor={({index}) => `item-${index}`}
              style={{flex: 1}}
              contentContainerStyle={styles.listStyle}
              numColumns={3}
              columnWrapperStyle={styles.column}
              getItemLayout={this._getItemLayout}
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
  closeModal = () => this.setState({visible: false});
  openModal = () => this.setState({visible: true});
}

export default NumbersAndChars;
