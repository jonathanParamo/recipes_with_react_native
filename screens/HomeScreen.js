import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 10,
          marginTop: "10%",
          width: "50%",
          alignSelf: "center"
        }}
        onPress={() => {
          navigation.navigate("Stack");
        }}
      >
        <Text
          style={{
            color: "#f5f5f5"
          }}
        >
          Go to Stack screen
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
