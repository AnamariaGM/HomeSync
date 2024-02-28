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
import { useForm, Controller } from "react-hook-form";


function ResetYourPasswordScreen(props) {

  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();


  const [username, setUsername] = useState("");
  const navigation=useNavigation();

  const onSendPressed = (data) => {
    console.warn(data);
    navigation.navigate('NewPassword');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          name='username'
          placeholder="Enter your username"
          control={control}
          rules={{
            required: 'Username is required'
          }}
        />
  

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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

export default ResetYourPasswordScreen;
