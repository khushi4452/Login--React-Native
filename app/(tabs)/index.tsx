import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful', `Welcome, ${email}!`);
    } else {
      Alert.alert('Error', 'Please enter both email and password👍');
    }
  };

  return (
  <ThemedView style={styles.container}>
  <ThemedText type="title" style={styles.title}>
  Welcome Back😊!!
   </ThemedText>
   <TextInput
   style={styles.input}
   placeholder="Email"
   placeholderTextColor="#888"
   value={email}
   onChangeText={setEmail}
   keyboardType="email-address"
   autoCapitalize="none"
    />


  <TextInput
   style={styles.input}
   placeholder="Password"
   placeholderTextColor="#888"
   value={password}
   onChangeText={setPassword}
   secureTextEntry
   autoCapitalize="none"
  />


  <View style={styles.buttonContainer}>
   <Button title="Login" onPress={handleLogin} color="#BA4AD5" />
  </View>
  <ThemedText style={styles.footerText}>Don't have an account? Sign Up</ThemedText>
  </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#F5F5F5',
  },
  title: {
    marginBottom: 30,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    cursor: 'pointer'
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 17,
    color: '#32E9C5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
     cursor: 'pointer'
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
     cursor: 'pointer'
  },
  footerText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#D1465F',
    fontWeight: '800',
    cursor: 'pointer'
  },
});
