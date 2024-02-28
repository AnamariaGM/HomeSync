// const NeonEffect = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
//       <Svg width="600" height="600" viewBox="0 0 400 200">
//         <Defs>
//           <LinearGradient id="neonGradient" x1="0%" y1="10%" x2="100%" y2="10%">
//             <Stop offset="0%" stopColor="rgb(238, 0, 255)" stopOpacity="1" />
//             <Stop offset="50%" stopColor="rgb(0, 26, 255)" stopOpacity="1" />
//             <Stop offset="100%" stopColor="rgb(255, 0, 195)" stopOpacity="1" />
//           </LinearGradient>
//           <Filter id="glow" x="-40%" y="-50%" width="600%" height="600%">
//             <FeGaussianBlur in="SourceGraphic" stdDeviation="10" />
//           </Filter>
//         </Defs>
//         <G>
//           <Path
//             d="M50,100 C50,70 100,50 150,90 C200,130 250,130 250,100 C250,70 200,50 150,90 C100,130 50,130 50,100"
//             stroke="url(#neonGradient)"
//             strokeWidth="4"
//             strokeLinecap="round"
//             strokeDasharray="600"
//             strokeDashoffset="600"
//             fill="none"
//             animated={[
//               { strokeDashoffset: '600' },
//               { strokeDashoffset: '-600' },
//             ]}
//           />
//           <Path
//             d="M50,100 C50,70 110,70 150,100 C190,130 250,130 250,100 C250,70 190,70 150,100 C110,130 50,130 50,100"
//             stroke="url(#neonGradient)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeOpacity="0.8"
//             filter="url(#glow)"
//             strokeDasharray="600"
//             strokeDashoffset="600"
//             fill="none"
//             animated={[
//               { strokeDashoffset: '1000' },
//               { strokeDashoffset: '-600' },
//             ]}
//           />
//         </G>
//       </Svg>
//     </View>
//   );
// }

// export default NeonEffect;
