import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../types';

export default function ScreenOne() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();

  return (
    <Center width='$full' height='$full' bg='#CBE2B4' gap={10}>
      <Text>Screen Two</Text>
      <Button bg='#F0AFA8' disabled={!navigation.canGoBack()} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Button bg='#F7BFA8' onPress={() => navigation.navigate('ScreenOne')}>
        <Text>Go Screen 1</Text>
      </Button>
      <Button bg='#F7BFA8' onPress={() => navigation.navigate('ScreenThree')}>
        <Text>Go Screen 3</Text>
      </Button>
    </Center>
  );
}