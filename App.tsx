import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface User {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://jsonplaceholder.cypress.io/users").then((res) => res.json()).then((result) => setUsers(result))
      .catch(e => console.error(e))
      setLoading(false)
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24, marginVertical: 60 }}>
      {loading ? (
        <ActivityIndicator testID='loading' accessibilityLabel="loading users" />
      ) : (
        <FlatList
          accessibilityLabel="users"
          data={users}
          keyExtractor={({ id }, index) => String(id)}
          renderItem={({ item }) => (
            <Text testID="user" accessibilityLabel="user">
              {item.name} | {item.email}
            </Text>
          )}
        />
      )}
    </View>
  );
};
export default App;
