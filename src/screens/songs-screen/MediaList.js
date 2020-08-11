import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const MediaList = ({navigation, route, itemId}) => {
  console.log(itemId, 'itemId');
  useEffect(() => {});
  return (
    <View
      style={{
        width: wp(100),
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginTop: 50,
      }}>
      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={({item, index}) => (
          <MediaItem item={item} index={index} navigation={navigation} />
        )}
        keyExtractor={({index}) => `item-${index}`}
        horizontal={false}
        numColumns={3}
        getItemLayout={getItemLayout}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        columnWrapperStyle={{
          alignSelf: 'center',
        }}
        ItemSeparatorComponent={() => <View style={{paddingVertical: 10}} />}
      />
    </View>
  );
};
const MediaItem = ({item, index, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('FullScreenVideo')}
    style={[styles.primaryButton, {marginHorizontal: '1.5%'}]}>
    <View style={styles.iconStyle}>{item.image}</View>
  </TouchableOpacity>
);
const getItemLayout = (data, index) => {
  const productHeight = 110;
  return {
    length: productHeight,
    offset: productHeight * index,
    index,
  };
};
export default MediaList;
