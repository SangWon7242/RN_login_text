import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CutomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.loginButton, style]} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const hadleEmailLogin = () => {
    return;
  };

  const hadleGoogleLogin = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>로그인</Text>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.loginTitle}>Login TEST</Text>
      </View>
      <View style={styles.loginBtnBox}>
        <CutomButton
          title="이메일로 로그인"
          onPress={hadleEmailLogin}
          style={styles.emailLogin}
        />
        <CutomButton
          title="구글로 계속하기"
          onPress={hadleGoogleLogin}
          style={styles.googleLogin}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  topBarTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  titleBox: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginTitle: {
    fontSize: 70,
    fontWeight: "bold",
  },
  loginBtnBox: {
    flex: 1,
    alignItems: "center",
  },
  loginButton: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: "70%",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
