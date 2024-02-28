import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, SafeAreaView, StatusBar, Center, ScrollView } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WebToonSwiper from './components/Header/WebToonSwiper';
import { Dimensions } from 'react-native';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenThree from './screens/ScreenThree';
import { ScreensParams } from './types';
import WebtoonList from './components/List/WebtoonList';
import HomeScreen from './screens/HomeScreen';

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
              name='ScreenOne'
              component={ScreenOne}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name='ScreenTwo'
              component={ScreenTwo}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name='ScreenThree'
              component={ScreenThree}
              options={{ header: () => null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GluestackUIProvider>
  </QueryClientProvider>
  );
}

