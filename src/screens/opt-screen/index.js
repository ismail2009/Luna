import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RoundedButton} from '../../shared/components/Button';
import RoundedInput from '../../shared/components/Input/RoundedInput';
import {headers} from '../../shared/styles';
import {colors, fonts, sizes} from '../../shared/styles/theme.style';
import styles from './styles';
import CustomHeader from '../../shared/components/Header';

class NewPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{backgroundColor: colors.WHITE_COLOR, flex: 1}}>
        <CustomHeader
          bgColor2={'#FFFFFF'}
          actions={{
            goBack: () => this.props.navigation.goBack(),
          }}
          isGoBack
        />
        <View style={styles.content}>
          <Text style={[headers.primary, styles.header]}>
            استعادة كلمة المرور
          </Text>
          <View style={{marginVertical: 10}} />

          <RoundedInput
            width={'70%'}
            placeholder={'ادخل البريد الخاص بك '}
            placeholderTextColor="#FFF"
          />
          <View style={{marginVertical: 5}} />

          <RoundedButton
            onPress={() => this.props.navigation.navigate('NewPassword')}
            classes={{button: {width: '50%', height: 45}}}>
            إرسال
          </RoundedButton>
        </View>
      </View>
    );
  }
  setValue(key, value) {
    this.setState({[key]: value});
  }
}

export default NewPasswordScreen;
