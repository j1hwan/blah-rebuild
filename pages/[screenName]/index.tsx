import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ServiceLayout } from '@/component/service_layout';

const userInfo = {
  uid: 'test',
  displayName: 'testuser',
  email: 'test@gmail.com',
  photoURL: 'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
};

const UserHomePage: NextPage = function () {
  return (
    <ServiceLayout title="user info" minH="100vh" backgroundColor="gray.50">
      <Box maxW="md" mx="auto" pt="6">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2px" bg="white">
          <Flex p="6px">
            <Avatar size="lg" src={userInfo.photoURL} mr="2" />
            <Flex direction="column" justify="center">
              <Text fontSize="md">{userInfo.displayName}</Text>
              <Text fontSize="xs">{userInfo.email}</Text>
            </Flex>
          </Flex>
        </Box>
        test
      </Box>
    </ServiceLayout>
  );
};

export default UserHomePage;
