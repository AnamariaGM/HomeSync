import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {useForm} from 'react-hook-form';
function NewPasswordScreen(props) {
  const{ control, handleSubmit, formState:{error}}=useForm();

  const navigation = useNavigation();

  const onSubmitPressed = (data) => {
    console.warn(data);
    navigation.navigate('HomeScreen');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          name='code'
          placeholder="Code"
          control={control}
          rules={{required: 'Code is required'}}
        />
          <CustomInput
          name='password'
          placeholder="Enter your new password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: "New password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters long",
            },
          }}      />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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

export default NewPasswordScreen;
