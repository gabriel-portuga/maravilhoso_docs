import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "../../components/EmailInput";
import NomeInput from "../../components/NomeInputs";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={{ backgroundColor: '#FF9E9D', flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.createAccount}>Criar conta</Text>
        <NomeInput
          value={name}
          setValue={setName}
        />
        <EmailInput
          value={email}
          setValue={setEmail}
        />

        <TextInput
          style={styles.textInput}
          label="Senha"
          mode="flat"
          secureTextEntry={showPassword}
          left={
            <TextInput.Icon
              name="lock"
              size={25}
              color="#ff6766"
            />
          }
          right={
            showPassword ? (
              <TextInput.Icon
                name="eye"
                size={25}
                color="#ff6766"
                onPress={() => setShowPassword(!showPassword)}
              />
            ) : (
              <TextInput.Icon
                name="eye-off"
                size={25}
                color="#ff6766"
                onPress={() => setShowPassword(!showPassword)}
              />
            )
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button style={styles.createButton} mode="contained">
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Criar</Text>
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={{ alignSelf: "center", marginBottom: 10, }}
        >
          <Text>
            Já tem uma conta?{" "}
            <Text style={styles.loginText}>Faça o login</Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "80%",
    backgroundColor: 'white',
    borderRadius: 25
  },
  createAccount: {
    color: '#ff6766',
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 20,
    paddingTop: 10,
  },
  textInput: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  createButton: {
    padding: 5,
    margin: 20,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "#FF9E9D",
  },
  loginText: {
    fontWeight: "bold",
    color: "#FF9E9D",
  },
});

export default SignUp;