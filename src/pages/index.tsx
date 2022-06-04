import type { NextPage } from 'next'
import {
  VStack, Text, Heading, Input, Button
} from '@chakra-ui/react'
import { useTextState, useTextMutators, useCharCountState } from "../globalStates/textState";
import Link from 'next/link';

const Home: NextPage = () => {
  const text = useTextState();
  const charCount = useCharCountState();
  const { setText } = useTextMutators()
  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <Text fontSize='xl'>{charCount}</Text>      
      <Text fontSize='xl'>{text}</Text>
      <Input type="text" defaultValue={text} onChange={(e) => setText(e.target.value)} />
      <Link href="/sample1">
        <Button>
          サンプルページ
        </Button>
      </Link>
    </VStack>
  )
}

export default Home
