import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/views/Home';
import Girl from './src/views/Girl';
import Boy from './src/views/Boy';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ headerShown: true }} component={Home}/>
        <Stack.Screen name="Girl" options={{ headerShown: true }} component={Girl}/>
        <Stack.Screen name="Boy" options={{ headerShown: true }} component={Boy}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}