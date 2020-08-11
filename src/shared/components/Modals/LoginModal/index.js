import React, {useEffect} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Overlay from '../../ModalOverlay';

import CloseSvg from '../../../../assets/images/SVG/close.svg';
import {headers} from '../../../styles';
import RoundedInput from '../../Input/RoundedInput';
import {BasicButton, RoundedButton, SoundButton} from '../../Button';
import FacebookSvg from '../../../../assets/images/SVG/facebook.svg';
import GoogleSvg from '../../../../assets/images/SVG/google.svg';
import styles from './styles';
import {colors} from '../../../styles/theme.style';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin/index';
import {setting} from '../../../Api/Api';
import {configure} from '@react-native-community/netinfo';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

/**
 * @desc Login form for user sign in
 * @param modalVisible {boolean}
 * @param closeModal {function}
 * @param openModal {function}
 * @param actions {object}
 * @param user {object}
 * @param state {object}
 * @param onChange {function}
 * @returns {*}
 * @constructor
 */
const LoginModal = ({
  modalVisible,
  closeModal,
  openModal,
  onChange,
  actions,
  user,
  state,
  nameValidator,
  passwordValidator,
}) => {
  useEffect(() => {
    async function configureGoogle() {
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: setting.WEB_CLIENT_ID, // client ID of type WEB for your server(needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      });
    }
    configureGoogle();
  });
  return (
    <Overlay
      visible={modalVisible}
      onClose={closeModal}
      closeOnTouchOutside
      animationType="zoomIn"
      // containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
      childrenWrapperStyle={styles.content}
      extraProps={{
        supportedOrientations: ['portrait', 'landscape'],
      }}
      withScrolling
      animationDuration={500}>
      <ImageBackground
        style={styles.closeIcon}
        resizeMode={'contain'}
        source={require('../../../../assets/images/close-circle.png')}>
        <SoundButton onPress={closeModal}>
          <CloseSvg />
        </SoundButton>
      </ImageBackground>

      <Text style={[headers.primary, styles.header]}>تسجيل الدخول </Text>

      <RoundedInput
        placeholder={'اسم المستخدم'}
        placeholderTextColor="#FFF"
        onChangeText={text => onChange('name', text)}
        onBlur={() => nameValidator()}
      />
      {state.nameError != '' && (
        <Text
          style={{
            color: colors.ERROR,
            alignSelf: 'flex-end',
            marginVertical: 2,
          }}>
          {state.nameError}
        </Text>
      )}
      <RoundedInput
        style={{marginTop: 9}}
        placeholder={'كلمة المرور'}
        placeholderTextColor="#FFF"
        onChangeText={text => onChange('password', text)}
        secureTextEntry={true}
        onBlur={() => passwordValidator()}
      />
      {(state.passwordError != '' || user.authError.msg != '') && (
        <Text
          style={{
            color: colors.ERROR,
            alignSelf: 'flex-end',
            marginVertical: 2,
          }}>
          {user.authError.msg === 'Unauthorised' &&
          user.authError.statusCode === 401
            ? 'لقد قمت بإدخل اسم المستخدم او الباسوورد بشكل خاطئ'
            : state.passwordError}
        </Text>
      )}
      <RoundedButton
        classes={{button: {width: '100%'}}}
        isActivity={user.loading}
        onPress={actions?.onPressLogin}>
        تسجيل الدخول
      </RoundedButton>
      <View style={{alignSelf: 'center'}}>
        <BasicButton
          classes={{buttonStyle: {marginBottom: 5}}}
          onPress={actions?.onPressOptPassword}>
          نسيت كلمة المرور؟
        </BasicButton>
        <BasicButton onPress={actions?.onPressSignup}>
          إنشاء حساب جديد
        </BasicButton>
      </View>
      <View style={{flexDirection: 'row', marginTop: 9}}>
        <SoundButton
          onPress={() => fbSignIn()}
          style={[
            {
              backgroundColor: '#3B5998',
              marginRight: 10,
            },
            styles.socialIcons,
          ]}>
          <FacebookSvg />
        </SoundButton>
        <SoundButton
          onPress={() => signInGoogle()}
          style={[
            {
              backgroundColor: '#DDDDDD',
            },
            styles.socialIcons,
          ]}>
          <GoogleSvg />
        </SoundButton>
      </View>
    </Overlay>
  );
};

/**
 *  Google sign in function
 * @returns {Promise<void>}
 */
const signInGoogle = async () => {
  console.log('start singin');
  try {
    await GoogleSignin.hasPlayServices();
    const info = await GoogleSignin.signIn();
    alert(info);
    console.log(info, 'info');
    // setUserInfo(info);
  } catch (error) {
    alert(error.code);

    console.log(error, 'error');
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

/**
 *  Facebook sign in function
 * @returns {Promise<void>}
 */
const fbSignIn = () => {
  LoginManager.logInWithPermissions(['public_profile']).then(
    result => {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log(result, 'result');
        console.log(
          'Login success with permissions: ' +
            result.grantedPermissions.toString(),
        );
        AccessToken.getCurrentAccessToken()
          .then(data => {
            console.log(data, 'facebook');
            // console.log(this);
            this.props.loginSocial({
              grant_type: setting.GRANT_TYPE,
              client_id: 3,
              client_secret: setting.CLIENT_SECRET,
              provider: setting.FACEBOOK,
              access_token: data.accessToken,
            });
          })
          .then(() => {
            this.props.navigation.navigate('Home');
          });
      }
    },
    function(error) {
      console.log('Login fail with error: ' + error);
    },
  );
};

export default LoginModal;
