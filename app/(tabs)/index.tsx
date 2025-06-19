import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const search = Array(6).fill("search result");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.button}>back</Text>
        <Text style={styles.title}>content</Text>
        <Text style={styles.button}>filter</Text>
      </View>
      <TextInput style={styles.searchInput} placeholder="search" />
      <FlatList
        data={search}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    color: "#4CAF50",
    fontSize: 22,
  },
  title: {
    fontSize: 40,
  },
  searchInput: {
    backgroundColor: "#F1EFEC",
    borderRadius: 19,
    fontSize: 17,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
});
