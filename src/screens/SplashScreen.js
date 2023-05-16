import { ActivityIndicator, View } from 'react-native';
import { styles } from '../styles/styles';
import { getCurrentUserInfo } from './SignInScreen';

const SplashScreen = ({ loaded }) => {
  getCurrentUserInfo().then(user => {
    loaded(user);
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
