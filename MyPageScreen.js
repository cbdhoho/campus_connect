import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';

const MyPageScreen = () => {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState("홍길동");

  const deleteAccount = () => {
    // 회원탈퇴 로직
    Alert.alert("회원탈퇴", "회원탈퇴가 완료되었습니다.", [{ text: "확인" }]);
    navigation.navigate("Home", {isLoggedIn: false,});
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>      
      <View style={styles.header}>
        <Ionicons name="person-circle" size={100} color="#2c3e50" />
        <Text style={styles.welcomeText}>반가워요, {nickname}님</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            navigation.navigate("AccountInfoScreen");
          }}
        >
          <Text style={styles.optionText}>계정 정보 변경</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>내가 쓴 게시글 & 댓글</Text>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            navigation.navigate("PostManagementScreen");
          }}
        >
          <Text style={styles.optionText}>게시글 관리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            navigation.navigate("CommentManagementScreen");
          }}
        >
          <Text style={styles.optionText}>댓글 관리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            navigation.navigate("LikeManagementScreen");
          }}
        >
          <Text style={styles.optionText}>좋아요 관리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            navigation.navigate("ScrapManagementScreen");
          }}
        >
          <Text style={styles.optionText}>스크랩 관리</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            navigation.navigate("PointShopScreen");
          }}
        >
          <Text style={styles.optionText}>포인트샵</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>회원탈퇴</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={deleteAccount}>
          <Text style={styles.deleteButtonText}>회원탈퇴</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  backIcon: {
    position: 'absolute',
    left: 1,
    top: 25,
    zIndex : 1,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 10,
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
  },
  optionButton: {
    backgroundColor: "#2c3e50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    color: "#ffffff",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MyPageScreen;
