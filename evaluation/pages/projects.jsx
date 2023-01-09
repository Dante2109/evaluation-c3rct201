import React from 'react';
import {Box,SimpleGrid,Stack,CardBody,CardFooter,Heading,Text,Card,Button, HStack} from "@chakra-ui/react"
function Project({data}) {
console.log(data)
  return (
    <Box>
      <SimpleGrid columns={2} spacing={4}>
         {data.items.map(el=>(
          <Box>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              >

              <Stack>
                  <CardBody>
                    <Heading size='md'>{el.name}</Heading>
                    <Text py='2'>
                     Descriiption: {el.description?el.description:"-"}
                    </Text>
                    <Text py='2'>
                     stars:{el.stargazers_count}
                    </Text>
       
                    <Text py='2'>
                     Forks:{el.forks_count}
                    </Text>
                    <Text py='2'>
                     Language : {el.language?el.language:" Javascript"}
                    </Text>
                  </CardBody>

                </Stack>
              </Card>
            </Box>
         ))}
      </SimpleGrid>
    </Box>
  );
}

export default Project;

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/search/repositories?q=user:dante2109+fork:true&sort=updated&per_page=10&type=Repositories`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }