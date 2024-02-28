// import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Button, Alert, Platform, Dimensions } from 'react-native';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
// import ViewImageScreen from './app/screens/ViewImageScreen';

// import { create } from "domain";



// export default function App() {
//   return <ViewImageScreen/>;
// }
//   const handlePress = () => console.log("Text pressed");

//   return (

//     <SafeAreaView style={styles.container}>
//       <View style={{
//         backgroundColor: 'blue',
//         width: 150,
//       }}
//       ></View>
//       <Button
//         color='orange'
//         title='Click Me'
//         onPress={() =>
//           Alert.alert(
//             "My title",
//             "My message",
//             [
//               { text: "Yes", onPress: () => console.log("Yes") },
//               { text: "No", onPress: () => console.log("No") }
//             ]
//           )
//         }
//       />
//       <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
//         <View style={styles.content}>
//           <Text numberOfLines={1} onPress={handlePress} style={styles.text}>Hello you!</Text>
//           <Image
//             style={{ width: 200, height: 300, }}
//             source={{ uri: "https://picsum.photos/200/300" }}
//           />
//         </View>
//       </TouchableWithoutFeedback>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
//   content: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     textAlign: 'center',
// },
// });
