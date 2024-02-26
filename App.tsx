import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, SafeAreaView, StatusBar, Center } from '@gluestack-ui/themed';
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
      <Center bg='$black' flex={1} justifyContent='center' alignItems='center'>
        <SafeAreaView>
        <HomeScreen/>
        </SafeAreaView>
        </Center>
    </GluestackUIProvider>
  </QueryClientProvider>
  );
}

