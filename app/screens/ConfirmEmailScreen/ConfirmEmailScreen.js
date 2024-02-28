import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";


function ConfirmEmailScreen(props) {

  const [code, setCode] = useState("");
  const navigation=useNavigation();

  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();

  const onConfirmPressed = (data) => {
    console.warn(data);
    navigation.navigate('HomeScreen')
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  };
  const onResendCodePressed = () => {
    console.warn("onResendCodePressed");
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Sign Up</Text>

        <CustomInput
          name='confirmation-code'
          placeholder="Enter your confirmation code"
          control={control}
          rules={{ required: "Confirmation code is required" }}
        />
  

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />


        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
  text:{
    color:'gray',
    marginVertical: 10
  },
  link:{
    color:'#fdb075'
  }
});

export default ConfirmEmailScreen;
