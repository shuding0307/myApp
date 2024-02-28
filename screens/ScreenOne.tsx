import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../types';

export default function ScreenOne() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();

  return (
    <Center width='$full' height='$full' bg='#B0A0FC' gap={10}>
      <Text>Screen One</Text>
      <Button bg='$yellow300' disabled={!navigation.canGoBack()} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Button bg='$yellow100' onPress={() => navigation.navigate('ScreenTwo')}>
        <Text>Go Screen 2</Text>
      </Button>
      <Button bg='$yellow100' onPress={() => navigation.navigate('ScreenThree')}>
        <Text>Go Screen 3</Text>
      </Button>
    </Center>
  );
}