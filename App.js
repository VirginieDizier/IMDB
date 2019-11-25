import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  return (
    <ScrollView
      style={{ backgroundColor: "#191919", size: "100%" }}
      containContainerStyle={{ flex: 1 }}
    >
      <View style={{ backgroundColor: "#393939", marginTop: 45 }}>
        <Image
          style={{ height: 50, width: 70, margin: 10 }}
          source={require("./assets/imdb-logo.png")}
          resizeMode="contain"
        ></Image>
      </View>
      <View>
        <Text style={[styles.text, styles.title]}>Interstellar</Text>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={[styles.text, styles.placement]}>2014</Text>
          <Text style={[styles.text, styles.placement]}>PG-13</Text>
          <Text style={[styles.text, styles.placement]}>2h49min</Text>
          <Text style={[styles.text, styles.placement]}>
            Adventure,Drama,Sci-Fi
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("./assets/poster-interstellar.jpg")}
              style={{ height: 150, width: 100 }}
            ></Image>
            <View style={{ flex: 1, margin: 10 }}>
              <Text style={styles.text}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <Button
                title="+ ADD TO WATCHLIST"
                // style={{ color: "white", backgroundColor: "blue" }}
              ></Button>
            </View>
          </View>
          <View style={{ flexDirection: "row", margin: 30 }}>
            <View style={styles.data}>
              <Ionicons
                name="ios-star"
                color="yellow"
                style={styles.icon}
              ></Ionicons>
              <Text style={styles.text}>8.6/10</Text>
              <Text style={styles.text}>1.1M</Text>
            </View>
            <View style={styles.data}>
              <Ionicons
                name="ios-star"
                color="white"
                style={styles.icon}
              ></Ionicons>
              <Text style={styles.text}>RATE THIS</Text>
            </View>
            <View style={styles.data}>
              <Ionicons
                name="ios-square"
                color="green"
                style={styles.icon}
              ></Ionicons>
              <Text style={styles.text}>Metascore</Text>
              <Text style={styles.text}>46 critic reviews</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "white", margin: 10, fontSize: 20 }}>
            Top Billed Cast
          </Text>
          <Text style={{ color: "#0176BD" }}>SEE ALL</Text>
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Image
              source={require("./assets/matthew-mcconaughey.jpeg")}
              style={styles.actor}
            ></Image>
            <Text style={styles.text}>Matthew McConaughey</Text>
            <Text style={styles.text}>Cooper</Text>
          </View>
          <View>
            <Image
              source={require("./assets/anne-hathaway.jpeg")}
              style={styles.actor}
            ></Image>
            <Text style={styles.text}>Anne Hathaway</Text>
            <Text style={styles.text}>Brand</Text>
          </View>
          <View>
            <Image
              source={require("./assets/jessica-chastain.jpeg")}
              style={styles.actor}
            ></Image>
            <Text style={styles.text}>Jessica Chastain</Text>
            <Text style={styles.text}>Murph</Text>
          </View>
          <View>
            <Image
              source={require("./assets/casey-affleck.jpeg")}
              style={styles.actor}
            ></Image>
            <Text style={styles.text}>Casey Affleck</Text>
            <Text style={styles.text}>Tom</Text>
          </View>
        </ScrollView>
        <View style={{ margin: 10 }}>
          <Text style={styles.text}>Director</Text>
          <Text style={styles.text}>Christopher Nolan</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.text}>Writers</Text>
          <Text style={styles.text}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white"
  },
  title: {
    fontSize: 40,
    marginLeft: 10,
    marginTop: 10
  },
  actor: {
    height: 180,
    width: 120,
    margin: 10,
    resizeMode: "contain"
  },
  placement: {
    flex: 1
  },
  data: {
    flex: 1,
    alignItems: "center"
  },
  icon: {
    fontSize: 25
  }
});

export default App;
