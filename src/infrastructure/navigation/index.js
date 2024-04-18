import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
export const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
