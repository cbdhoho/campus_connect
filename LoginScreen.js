import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate("Home", {
      isLoggedIn: true,
      username, 
      password, 
      nickname : 'hong',
      selectedUniversity : 'a대학교',
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <FontAwesome
        name="user-circle-o"
        size={100}
        color="#ffffff"
        style={styles.icon}
      />
      <Text style={styles.text}>로그인</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>아이디</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디 입력..."
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력..."
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}       
      >
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db", // 파란색 배경
  },
  backIcon: {
    position: 'absolute',
    left: 16,
    top: 45,
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff", // 흰색 글자
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  label: {
    width: 80,
    fontSize: 16,
    color: "#ffffff", // 흰색 글자
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#ffffff", // 흰색 배경
    paddingLeft: 10,
    borderRadius : 10,
    
  },
  loginButton: {
    backgroundColor: "#f39c12", // 주황색 배경
    padding: 10,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize : 20,
  },
  signupText: {
    marginTop: 20,
    color: "#ffffff", // 흰색 글자
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
