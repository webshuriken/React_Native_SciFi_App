import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';
// import fonts from '../../styles'
import {
  useFonts,
  Montserrat_400Regular,
  LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/dev";

const HeaderNoProfile = () => {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    LobsterTwo_700Bold_Italic,
  });

  if (fontsLoaded === false) {
    return <Text>Loading...</Text>
  }
    return (
      <View style={styles.container}>
        <Text style={styles.titleFonts}>Trivia Quiz</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // position: 'absolute',
    width: '100%',
    height: 70,
    // marginTop: 0,
    padding: 10,
    backgroundColor: '#4B0082',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultFonts: {
    fontFamily: "Montserrat_400Regular",
    color: "#FFFFFF",
  },
  titleFonts: {
    fontFamily: "LobsterTwo_700Bold_Italic",
    color: "#EFA80C",
    fontSize: 48,
  },
});


export default HeaderNoProfile