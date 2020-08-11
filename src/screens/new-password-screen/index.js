import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {RoundedButton, SoundButton} from '../../shared/components/Button';
import RoundedInput from '../../shared/components/Input/RoundedInput';
import {headers} from '../../shared/styles';
import {colors} from '../../shared/styles/theme.style';
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
          bgColor1={'#FFFFFF'}
          bgColor2={'#FFFFFF'}
          actions={{
            goBack: () => this.props.navigation.goBack(),
          }}
          isGoBack
        />
        <View style={styles.content}>
          <Text style={[headers.primary, styles.header]}>
            إنشاء كلمة مرور جديدة
          </Text>
          <View style={{marginVertical: 10}} />

          <RoundedInput
            width={'70%'}
            placeholder={'ادخل كلمة المرور الجديدة '}
            placeholderTextColor="#FFF"
          />
          <View style={{marginVertical: 5}} />
          <RoundedInput
            width={'70%'}
            placeholder={'اعادة كلمة المرور'}
            placeholderTextColor="#FFF"
          />
          <View style={{marginVertical: 5}} />

          <RoundedButton classes={{button: {width: '50%', height: 45}}}>
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
