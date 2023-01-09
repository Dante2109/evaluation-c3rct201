import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import {
  Badge,
  Button,
  Center,
  Flex,
  Image,
  Box,
  SimpleGrid,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Home({details}) {

  const router=useRouter()
  const projects=()=>{
    router.push("/projects")
  }
  return (
    <>
      <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit={"cover"}
            boxSize="100%"
            src={
              details.avatar_url
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
           Akshay Verma
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            <Link href={details.html_url}>@AkshayVerma</Link>
            
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3} fontSize="sm">
            {details.bio}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Text
              px={2}
              py={1}
              fontSize="sm"
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              Followers:{details.followers}
            </Text>
            <Text
              px={2}
              py={1}
              fontSize="sm"
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              Following:{details.following}
            </Text>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              <Link href="https://drive.google.com/file/d/1e0UsfaFSO5pOkOz2AgOxE1cqo997aw2x/view?usp=share_link">Resume</Link>
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              <Link href={details.html_url}>Follow</Link>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Box>
      <Heading>
        Tech Stack
      </Heading>
    </Box>
    </Center>
      <SimpleGrid columns={5}  spacing={10}>
              <Box  p="10px">
                <Heading size={"md"}>
                      HTML
                </Heading>
              </Box>
              <Box p="10px">
                <Heading size={"md"}>
                      CSS
                </Heading>
              </Box>
              <Box  p="10px">
                <Heading size={"md"}>
                      JAVASCRIPT
                </Heading>
              </Box>
              <Box p="10px">
                <Heading size={"md"}>
                      REACT
                </Heading>
              </Box>
              <Box  p="10px">
                <Heading size={"md"}>
                      NEXTJS
                </Heading>
              </Box>
              <Box p="10px">
                <Heading size={"md"}>
                      REDUX
                </Heading>
              </Box>
              <Box  p="10px">
                <Heading size={"md"}>
                      NODEJS
                </Heading>
              </Box>
              <Box p="10px">
                <Heading size={"md"}>
                      GIT
                </Heading>
              </Box>
              <Box  p="10px">
                <Heading size={"md"}>
                      NPM
                </Heading>
              </Box>
              <Box p="10px">
                <Heading size={"md"}>
                      RENDER
                </Heading>
                </Box>
      </SimpleGrid>
    
    </>
  )
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/dante2109')
  const details = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      details
    },
  }
}

