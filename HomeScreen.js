import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const HomeScreen = ({
  navigation,
  route,
}) => {
  const [localIsLoggedIn, setLocalIsLoggedIn] = useState(false);
  const [localSelectedUniversity, setLocalSelectedUniversity] = useState("");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (route.params?.isLoggedIn !== undefined) {
      setLocalIsLoggedIn(route.params.isLoggedIn);
      setLocalSelectedUniversity(route.params.selectedUniversity || "");
      setUserInfo({
        nickname: route.params.nickname || "",
        userId: route.params.userId || "",
        password: route.params.password || "",
        selectedUniversity: route.params.selectedUniversity || "",
      });
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/favicon.png")} style={styles.logo} />
      </View>

      {localIsLoggedIn ? (
        <Text style={styles.universityText}>대학 {localSelectedUniversity}</Text>
      ) : (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={localSelectedUniversity}
            style={styles.picker}
            onValueChange={(itemValue) => setLocalSelectedUniversity(itemValue)}
          >
            <Picker.Item label="대학을 선택하세요" value="" />
            <Picker.Item label="대학 A" value="A대학교" />
            <Picker.Item label="대학 B" value="B대학교" />
            <Picker.Item label="대학 C" value="C대학교" />
          </Picker>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("JobBoard", { userInfo })}
      >
        <Text style={styles.buttonText}>취업게시판</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SchoolLifeBoard", {userInfo})}
      >
        <Text style={styles.buttonText}>학교생활게시판</Text>
      </TouchableOpacity>

      <View style={styles.authTextContainer}>
        {localIsLoggedIn ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate("MyPage")}>
              <Text style={styles.authText}>마이페이지</Text>
            </TouchableOpacity>
            <Text style={styles.separator}> | </Text>
            <TouchableOpacity onPress={() => setLocalIsLoggedIn(false)}>
              <Text style={styles.authText}>로그아웃</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.authText}>로그인</Text>
            </TouchableOpacity>
            <Text style={styles.separator}> | </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.authText}>회원가입</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.logoutButton,
          {
            position: "absolute",
            top: 40,
            right: 20,
            backgroundColor: localIsLoggedIn ? "#f39c12" : "#2980b9",
          },
        ]}
        onPress={() => setLocalIsLoggedIn(!localIsLoggedIn)}
      >
        <Text style={styles.loginandoutText}>
          {localIsLoggedIn ? "로그아웃" : "로그인"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  logoContainer: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 20,
    borderRadius: 75,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  pickerContainer: {
    width: "80%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  picker: {
    height: 40,
    color: "#000000",
  },
  button: {
    backgroundColor: "#f39c12",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize : 18,
  },
  authTextContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  authText: {
    color: "#ffffff",
    textDecorationLine: "underline",
  },
  separator: {
    color: "#ffffff",
    marginHorizontal: 10,
  },
  universityText: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 20,
  },
  loginandoutText: {
    fontSize: 15,
    color: "#ffffff",
    margin: 7,
  },
});

export default HomeScreen;
