import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const App = () => {
  const showMessage = () => {
    Alert.alert(
      "Hello from Shivam Kumar!",
      "This button was created by developer Shivam Kumar to show how easy it is to create interactive apps with React Native.",
      [{ text: "Close", onPress: () => console.log("Alert closed") }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button} onPress={showMessage}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Developed by Shivam Kumar</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: '#841584',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default App;
