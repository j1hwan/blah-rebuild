import { Avatar, Box, Button, Flex, Text, Textarea } from '@chakra-ui/react';
import { NextPage } from 'next';
import ResizeTextarea from 'react-textarea-autosize';
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
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2px" bg="white" p="2">
          <Flex align="center">
            <Avatar size="xs" src="https://bit.ly/broken-link" mr="2" />
            <Textarea
              bg="gray.100"
              border="none"
              placeholder="내용을 입력하세요"
              resize="none"
              minH="unset"
              overflow="hidden"
              fontSize="xs"
              mr="2"
              as={ResizeTextarea}
              maxRows={7}
            />
            <Button bg="#ffb86c" color="white" colorScheme="yellow" variant="solid" size="sm">
              등록
            </Button>
          </Flex>
        </Box>
      </Box>
    </ServiceLayout>
  );
};

export default UserHomePage;
