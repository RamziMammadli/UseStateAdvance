import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const data = [
    {
      name: "Slack",
      date: "28 moments ago",
      size: "101MB",
    },
    {
      name: "Du Battery Saver",
      date: "19 moments ago",
      size: "37MB",
    },
    {
      name: "Google",
      date: "11 minutes ago",
      size: "300MB",
    },
    {
      name: "Youtube",
      date: "42 minutes ago",
      size: "382MB",
    },
    {
      name: "Facebook",
      date: "4 hr. ago",
      size: "446MB",
    },
    {
      name: "Flipboard",
      date: "15 hr. ago",
      size: "446MB",
    },
    {
      name: "Slack",
      date: "28 moments ago",
      size: "101MB",
    },
    {
      name: "Du Battery Saver",
      date: "19 moments ago",
      size: "37MB",
    },
    {
      name: "Google",
      date: "11 minutes ago",
      size: "300MB",
    },
    {
      name: "Youtube",
      date: "42 minutes ago",
      size: "382MB",
    },
    {
      name: "Facebook",
      date: "4 hr. ago",
      size: "446MB",
    },
    {
      name: "Flipboard",
      date: "15 hr. ago",
      size: "446MB",
    },
    {
      name: "Slack",
      date: "28 moments ago",
      size: "101MB",
    },
    {
      name: "Du Battery Saver",
      date: "19 moments ago",
      size: "37MB",
    },
    {
      name: "Google",
      date: "11 minutes ago",
      size: "300MB",
    },
    {
      name: "Youtube",
      date: "42 minutes ago",
      size: "382MB",
    },
    {
      name: "Facebook",
      date: "4 hr. ago",
      size: "446MB",
    },
    {
      name: "Flipboard",
      date: "15 hr. ago",
      size: "446MB",
    },
  ];

  const [status, setStatus] = useState("OPEN");

  const CurrentStatus = () => {
    setStatus(status == "OPEN" ? "UPDATE" : "OPEN");
  };

  const [update, setUpdate] = useState([]);
  const myAlert = (name) => {
    let arrData = update.find((item) => item.name == name);
    console.log(arrData);
    setUpdate(alert({ ...arrData }));
    CurrentStatus();
  };

  const renderItem = ({ item }) => (
    <Box name={item.name} date={item.date} size={item.size} />
  );

  const Box = ({ name, date, size }) => (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#DFDDDA",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/iconn.png")}
          style={{ width: 35, height: 35 }}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text>{name}</Text>
          <Text>
            {size} * {date}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "lime",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => myAlert(name)}
      >
        <Text style={{ color: "lime" }}>{status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headertop}>
          <View
            style={{ flexDirection: "row", width: "75%", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faBars} size={20} color={"white"} />
            <Text style={{ fontSize: 20, paddingLeft: 10, color: "white" }}>
              My apps & games
            </Text>
          </View>
          <View
            style={{
              width: "25%",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faSearch} size={17} color={"white"} />
          </View>
        </View>
        <View style={styles.headerbottom}>
          <Text style={{ fontSize: 14, paddingLeft: 10, color: "white" }}>
            UPDATES
          </Text>
          <Text style={{ fontSize: 17, paddingLeft: 10, color: "white" }}>
            INSTALLED
          </Text>
          <Text style={{ fontSize: 14, paddingLeft: 10, color: "white" }}>
            LIBRARY
          </Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.maintop}>
          <View>
            <Text style={{ color: "#5B5B5B" }}>On this device (131)</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ paddingRight: 15, color: "#5B5B5B" }}>
              Last Used
            </Text>
            <FontAwesomeIcon icon={faFilter} color={"#5B5B5B"} />
          </View>
        </View>
        <View>
          <FlatList data={data} renderItem={renderItem}></FlatList>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDDDA",
  },
  header: {
    backgroundColor: "#109D57",
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  headertop: {
    flexDirection: "row",
  },
  headerbottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  main: {
    flex: 7,
    marginHorizontal: "3%",
    backgroundColor: "white",
    marginTop: "2%",
  },
  maintop: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
