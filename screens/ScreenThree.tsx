import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../types';

export default function ScreenOne() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();

  return (
    <Center width='$full' height='$full' bg='#F6B6CA' gap={10}>
      <Text>Screen Three</Text>
      <Button bg='#46373B' disabled={!navigation.canGoBack()} onPress={() => navigation.goBack()}>
        <Text color='$lightgrey'>Go Back</Text>
      </Button>
      <Button bg='#876972' onPress={() => navigation.navigate('ScreenOne')}>
        <Text color='$lightgrey'>Go Screen 1</Text>
      </Button>
      <Button bg='#876972' onPress={() => navigation.navigate('ScreenTwo')}>
        <Text color='$lightgrey'>Go Screen 2</Text>
      </Button>
    </Center>
  );
}