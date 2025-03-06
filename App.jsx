// import React from 'react';
// import 'react-native-reanimated';
// import { TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBars, faHome, faList, faUser, faHandshake, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

// import Home from './src/components/homeScreen';
// import DetailsScreen from './src/components/detailScreen';
// import PartnersScreen from './src/components/becomePartner';
// import Ingredients from './src/components/productIngredientsScreen';
// import ListingScreen from './src/components/listingScreen';
// import LandingPage from './src/components/landingPage';
// import UserProfileScreen from './src/components/userScreen';
// import EditProfileScreen from './src/components/editProfileScreen';
// import FavListScreen from './src/components/favouriteList';
// import registerScreen from './src/components/registerScreen';
// import { UserProvider } from './src/assets/contexts/userContext';
// import { FavoritesProvider } from './src/assets/contexts/favContext';
// import LoginScreen from './src/components/loginScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <Stack.Screen
//         name="Details"
//         component={DetailsScreen}
//         options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }}
//       />
//       <Stack.Screen
//         name="Ingredients"
//         component={Ingredients}
//         options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }}
//       />
//     </Stack.Navigator>
//   );
// }

// function ProfileStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={UserProfileScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }} />
//       <Stack.Screen name="Favourites" component={FavListScreen} options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }} />
//     </Stack.Navigator>
//   );
// }

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: { backgroundColor: '#6c5b5b' },
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: '#e6ddcc',
//         tabBarLabelStyle: { fontSize: 10, marginBottom: 1, padding: 1, fontWeight: '700' },
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === 'HomeTab') {
//             iconName = faHome;
//           } else if (route.name === 'Items Menu') {
//             iconName = faList;
//           } else if (route.name === 'Partners Program') {
//             iconName = faHandshake;
//           } else if (route.name === 'ProfileTab') {
//             iconName = faUser;
//           } else if (route.name === 'Register') {
//             iconName = faSignOutAlt;
//           }
//           return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name="HomeTab" component={HomeStack} />
//       <Tab.Screen name="Items Menu" component={ListingScreen} />
//       <Tab.Screen name="Partners Program" component={PartnersScreen} />
//       <Tab.Screen name="ProfileTab" component={ProfileStack} />
//     </Tab.Navigator>
//   );
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={({ navigation }) => ({
//         drawerStyle: { backgroundColor: '#6c5b5b' },
//         drawerActiveTintColor: '#fff',
//         drawerInactiveTintColor: '#e6ddcc',
//         headerShown: true, // Show the header
//         headerStyle: { backgroundColor: '#6c5b5b' },
//         headerTintColor: '#e6ddcc',
//         headerLeft: () => (
//           <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
//             <FontAwesomeIcon icon={faBars} size={24} color="#fff" />
//           </TouchableOpacity>
//         ),
//       })}
//     >
//       <Drawer.Screen name="Home" component={HomeStack} />
//       <Drawer.Screen name="Items Menu" component={ListingScreen} />
//       <Drawer.Screen name="Partners Program" component={PartnersScreen} />
//       <Drawer.Screen name="Profile" component={ProfileStack} />
//       <Drawer.Screen name="Register" component={registerScreen} />
//       <Drawer.Screen name="Login" component={LoginScreen} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <UserProvider>
//       <FavoritesProvider>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen
//               name="Landing"
//               component={LandingPage}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="MainApp"
//               component={DrawerNavigator}
//               options={{ headerShown: false }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </FavoritesProvider>
//     </UserProvider>
//   );
// }



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faList, faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';

import Home from './src/components/homeScreen';
import DetailsScreen from './src/components/detailScreen';
import PartnersScreen from './src/components/becomePartner';
import Ingredients from './src/components/productIngredientsScreen';
import ListingScreen from './src/components/listingScreen';
import LandingPage from './src/components/landingPage';
import UserProfileScreen from './src/components/userScreen';
import EditProfileScreen from './src/components/editProfileScreen';
import FavListScreen from './src/components/favouriteList';
import LoginScreen from './src/components/loginScreen';  // Assuming you have these components
import RegisterScreen from './src/components/registerScreen';  // Assuming you have these components
import { UserProvider } from './src/assets/contexts/userContext';
import { FavoritesProvider } from './src/assets/contexts/favContext';
import regScreen from './src/components/oasRegisterScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }}
      />
      <Stack.Screen
        name="Ingredients"
        component={Ingredients}
        options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={UserProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }} />
      <Stack.Screen name="Favourites" component={FavListScreen} options={{ headerStyle: { backgroundColor: '#6c5b5b' }, headerTintColor: '#e6ddcc' }} />
    </Stack.Navigator>
  );
}

function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#6c5b5b' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#e6ddcc',
        tabBarLabelStyle: { fontSize: 10, marginBottom: 1, padding: 1, fontWeight: '700' },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Items Menu') {
            iconName = faList;
          } else if (route.name === 'Partners Program') {
            iconName = faHandshake;
          } else if (route.name === 'Profile') {
            iconName = faUser;
          }
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Items Menu" component={ListingScreen} />
      <Tab.Screen name="Partners Program" component={PartnersScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Register" component={regScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainApp"
              component={MainApp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </UserProvider>
  );
}


