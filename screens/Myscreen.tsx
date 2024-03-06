import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CounterScreensParams } from '../types';

export default function MyScreen() {
  const navigation = useNavigation<NavigationProp<CounterScreensParams>>();

  return (
    <Center width='$full' height='$full' bg='$backgroundDark900' gap={10}>
      <Text color='$white'>My Screen</Text>
    </Center>
  );
}
