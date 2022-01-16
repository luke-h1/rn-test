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
      const res = await fetch("https://jsonplaceholder.cypress.io/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false)
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24, marginVertical: 60 }}>
      {loading ? (
        <ActivityIndicator testID='loading' />
      ) : (
        <FlatList
          accessibilityLabel="users"
          data={users}
          keyExtractor={({ id }, index) => String(id)}
          renderItem={({ item }) => (
            <Text testID="user">
              {item.name} | {item.email}
            </Text>
          )}
        />
      )}
    </View>
  );
};
export default App;
