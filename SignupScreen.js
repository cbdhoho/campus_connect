import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const [authMethod, setAuthMethod] = useState("");
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // 회원가입 처리 로직
    // 예시로 홈 화면으로 이동하는 navigate를 사용
    Alert.alert(
      "로그인 유지",
      "로그인 상태를 유지하시겠습니까?",
      [
        {
          text: "아니오",
          onPress: () => navigation.navigate("Home", {
            isLoggedIn: false,
            nickname,
            userId,
            password,
            selectedUniversity: selectedSchool,
          }),
        },
        {
          text: "예",
          onPress: () => {
            navigation.navigate("Home", {
              isLoggedIn: true,
              nickname,
              userId,
              password,
              selectedUniversity: selectedSchool,
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>회원가입</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>닉네임</Text>
            <TextInput
              style={styles.input}
              placeholder="닉네임"
              placeholderTextColor="#bdc3c7"
              value={nickname}
              onChangeText={setNickname}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>아이디</Text>
            <View style={styles.idInputContainer}>
              <TextInput
                style={[styles.input, styles.idInput]}
                placeholder="아이디"
                placeholderTextColor="#bdc3c7"
                value={userId}
                onChangeText={setUserId}
              />
              <TouchableOpacity style={styles.checkButton}>
                <Text style={styles.checkButtonText}>중복검사</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
              style={styles.input}
              placeholder="비밀번호"
              placeholderTextColor="#bdc3c7"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>학교</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedSchool}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedSchool(itemValue)}
              >
                <Picker.Item label="학교를 선택하세요" value="" />
                <Picker.Item label="학교 A" value="schoolA" />
                <Picker.Item label="학교 B" value="schoolB" />
                <Picker.Item label="학교 C" value="schoolC" />
              </Picker>
            </View>
          </View>

          <View style={styles.authMethodContainer}>
            <Text style={styles.label}>인증 방법 </Text>
            <View style={styles.authBox}>
              <TouchableOpacity
                style={[
                  styles.authButton,
                  authMethod === "합격자 인증" && styles.authButtonSelected,
                ]}
                onPress={() => setAuthMethod("합격자 인증")}
              >
                <Text
                  style={[
                    styles.authButtonText,
                    authMethod === "합격자 인증" &&
                      styles.authButtonTextSelected,
                  ]}
                >
                  합격자 인증
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.authButton,
                  authMethod === "재학생 인증" && styles.authButtonSelected,
                ]}
                onPress={() => setAuthMethod("재학생 인증")}
              >
                <Text
                  style={[
                    styles.authButtonText,
                    authMethod === "재학생 인증" &&
                      styles.authButtonTextSelected,
                  ]}
                >
                  재학생 인증
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.authButton,
                  authMethod === "졸업생 인증" && styles.authButtonSelected,
                ]}
                onPress={() => setAuthMethod("졸업생 인증")}
              >
                <Text
                  style={[
                    styles.authButtonText,
                    authMethod === "졸업생 인증" &&
                      styles.authButtonTextSelected,
                  ]}
                >
                  졸업생 인증
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.completeButton}
            onPress={handleSignup}
          >
            <Text style={styles.completeButtonText}>완료</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: "#ffffff", // Changed background color to white
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20, // Added padding to avoid overlap with header
  },
  header: {
    backgroundColor: '#2c3e50',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    position: 'absolute',
    left: 16,
    top: 40,
  },
  headerTextContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // 전체 너비를 사용
    paddingHorizontal: 20, // 양쪽에 패딩 추가
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50", // Changed text color to match header color
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%", // 전체 너비를 사용
  },
  idInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%", // 입력 요소 너비 조정
  },
  idInput: {
    width: "60%", // 입력 요소 너비 조정
  },
  checkButton: {
    backgroundColor: "#e67e22", // 주황색 배경
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    color: "#2c3e50", // Changed text color to match header color
    width: "30%", // 라벨 너비 조정
    textAlign: "left", // 좌측 정렬
  },
  input: {
    width: "70%", // 입력 요소 너비 조정
    height: 40,
    backgroundColor: "#ecf0f1", // Changed background color of input
    paddingLeft: 10,
    borderRadius: 20, // 둥글게 만들기
    color: "#2c3e50", // Changed text color to match header color
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 10,
  },
  pickerWrapper: {
    backgroundColor: "#ecf0f1", // Changed background color of picker wrapper
    borderRadius: 20, // 둥글게 만들기
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#bdc3c7",
  },
  picker: {
    width: "100%",
    height: 40,
    color: "#2c3e50", // Changed text color to match header color
  },
  pickerItem: {
    fontSize: 16,
    height: 40,
    color: "#000000",
  },
  authMethodContainer: {
    width: "100%",
    marginBottom: 10,
  },
  authBox: {
    marginTop: 10,
    backgroundColor: "#ecf0f1", // Changed background color
    padding: 10,
    borderRadius: 20, // 둥글게 만들기
  },
  authButton: {
    backgroundColor: "#bdc3c7",
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 20, // 둥글게 만들기
  },
  authButtonSelected: {
    backgroundColor: "#2980b9",
  },
  authButtonText: {
    color: "#2c3e50",
    fontSize: 16, // Increased font size
  },
  authButtonTextSelected: {
    color: "#ffffff",
  },
  completeButton: {
    backgroundColor: "#3498db", // 파란색 배경
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20, // 둥글게 만들기
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  completeButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16, // Increased font size
  },
  separator: {
    borderBottomColor: "#2c3e50", // Changed separator color to match header color
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 10,
  },
});

export default SignupScreen;
