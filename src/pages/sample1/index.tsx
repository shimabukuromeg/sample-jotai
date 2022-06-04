import type { NextPage } from 'next'
import {
  VStack, Text, Heading, Button
} from '@chakra-ui/react'
import { useTextState, useCharCountState } from "../../globalStates/textState";
import Link from 'next/link';

const Home: NextPage = () => {
  const text = useTextState();
  const charCount = useCharCountState();
  return (
    <VStack p={4}>
      <Heading>サンプルページだよ</Heading>
      <Text fontSize='xl'>{`文字数は${charCount}です`}</Text>
      <Text fontSize='xl'>{text}</Text>
      <Link href="/">
        <Button>
            トップページに戻る
          </Button>
      </Link>
    </VStack>
  )
}

export default Home
