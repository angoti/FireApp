import { useContext } from 'react';
import { AuthContext } from '../../App';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../styles/styles';

const HomeScreen = ({ signOut }) => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela principal</Text>
      <Text style={styles.texto}>{user.displayName}</Text>
      <Image
        source={{ uri: user.photoURL }}
        style={{ width: 200, height: 350 }}
        resizeMode="contain"
      />
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
