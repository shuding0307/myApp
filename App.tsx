import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Center } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WebToonSwiper from './components/Header/WebtoonSwiper';
import { Dimensions } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  return (
    //React Query를 사용하기 위해 사용하고자 하는 컴포넌트를 QueryClientProvider로 감싸고 QueryClient값을 Props로 넣어줌
    <QueryClientProvider client={queryClient}>
    <GluestackUIProvider config={config}>
      <Center bg='$black' flex={1} justifyContent='center' alignItems='center'>
        <Center width={Dimensions.get('window').width} height={350}>
          <WebToonSwiper />
        </Center>
      </Center>
    </GluestackUIProvider>
  </QueryClientProvider>
  );
}

