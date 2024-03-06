import {HStack, Text} from '@gluestack-ui/themed';

interface Props {
  count:number;
  inputNumber: number;
}

export default function NumberPreview({count, inputNumber}:Props) {
  return (
    <HStack gap={80}>
      <Text size='4xl' bold={true} color='#876972'>
        {inputNumber ? count-inputNumber : ''}
      </Text>
      <Text size='4xl' bold={true} color='#876972'>
        {inputNumber ? count+inputNumber : ' '}
      </Text>
    </HStack>

  )
}