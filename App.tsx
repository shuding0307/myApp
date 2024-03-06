import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, SafeAreaView, StatusBar, Center } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WebToonSwiper from './components/Header/WebToonSwiper';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreensParams } from './types';
import WebtoonList from './components/List/WebtoonList';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const queryClient = new QueryClient();
const Stack = createStackNavigator<ScreensParams>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <StatusBar barStyle='light-content' />
    <GluestackUIProvider config={config}>
      <SafeAreaView flex={1} bg='$backgroundDark950'>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name='Main' 
            component={HomeScreen} 
            options={{ header: () => null }} />
            <Stack.Screen
              name='Search'
              component={SearchScreen}
              options={{ header: () => null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GluestackUIProvider>
  </QueryClientProvider>
);
}

