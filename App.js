import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import SchoolLifeBoardScreen from "./SchoolLifeBoardScreen";
import JobBoardScreen from "./JobBoardScreen";
import MyPageScreen from "./MyPageScreen";
import PostDetailScreen from "./PostDetailScreen";
import SearchScreen from './SearchScreen';
import WritePostScreen from './WritePostScreen';
import AnswerDetailScreen from './AnswerDetailScreen';
import AccountInfoScreen from './AccountInfoScreen';
import PostManagementScreen  from './PostManagementScreen';
import CommentManagementScreen  from './CommentManagementScreen';
import LikeManagementScreen  from './LikeManagementScreen';
import ScrapManagementScreen  from './ScrapManagementScreen';
import PointShopScreen  from './PointShopScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "홈",
            headerShown: false
          }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              selectedUniversity={selectedUniversity}
              setSelectedUniversity={setSelectedUniversity}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobBoard"
          component={JobBoardScreen}
          options={{ headerShown: false }}
        />        
        <Stack.Screen
          name="SchoolLifeBoard"
          component={SchoolLifeBoardScreen}
          options={{ headerShown: false }}
        />        
        <Stack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostDetailScreen"
          component={PostDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ headerShown : false }} />
        <Stack.Screen
          name="WritePostScreen"
          component={WritePostScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="AnswerDetailScreen" 
        component={AnswerDetailScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="AccountInfoScreen" 
        component={AccountInfoScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="PostManagementScreen" 
        component={PostManagementScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="CommentManagementScreen" 
        component={CommentManagementScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="LikeManagementScreen" 
        component={LikeManagementScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="ScrapManagementScreen" 
        component={ScrapManagementScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="PointShopScreen" 
        component={PointShopScreen} 
        options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
