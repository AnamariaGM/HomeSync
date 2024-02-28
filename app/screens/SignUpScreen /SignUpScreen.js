import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'`*+-^_/=?{|}]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z0-9-]+)*$/;


function SignUpScreen(props) {

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { error },
    watch
  } = useForm();
  const pwd = watch('password');

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed ");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("onPrivacyPolicyPressed ");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{ required: "Email is required",pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry={true}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters long",
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          placeholder="Repeat Password"
          control={control}
          secureTextEntry={true}
          rules={{ validate: value => value === pwd || 'Password do not match' }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
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
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#fdb075",
  },
});

export default SignUpScreen;
