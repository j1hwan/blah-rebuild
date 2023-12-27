import { Avatar, Box, Button, Flex, FormControl, FormLabel, Switch, Text, Textarea, useToast } from '@chakra-ui/react';
import { NextPage } from 'next';
import ResizeTextarea from 'react-textarea-autosize';
import { useState } from 'react';
import { ServiceLayout } from '@/component/service_layout';
import { useAuth } from '@/contexts/auth_user_context';

const userInfo = {
  uid: 'test',
  displayName: 'testuser',
  email: 'test@gmail.com',
  photoURL: 'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
};

const UserHomePage: NextPage = function () {
  const [message, setMessage] = useState('');
  const toast = useToast();
  const [isAnonymous, setIsAnonymous] = useState(true);
  const { authUser } = useAuth();

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
            <Avatar
              size="xs"
              src={isAnonymous ? 'https://bit.ly/broken-link' : authUser?.photoURL ?? 'https://bit.ly/broken-link'}
              mr="2"
            />
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
              value={message}
              onChange={(e) => {
                if (e.currentTarget.value) {
                  const lineCount = (e.currentTarget.value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 1) + 1;
                  if (lineCount > 7) {
                    toast({
                      title: '7줄까지만 입력 가능합니다.',
                      position: 'top-right',
                    });
                    return;
                  }
                }
                setMessage(e.currentTarget.value);
              }}
            />
            <Button
              disabled={message.length === 0}
              bg="#ffb86c"
              color="white"
              colorScheme="yellow"
              variant="solid"
              size="sm"
            >
              등록
            </Button>
          </Flex>
          <FormControl display="flex" alignItems="center" mt="2" pb="2">
            <Switch
              size="sm"
              colorScheme="orange"
              id="anonymous"
              mr="1"
              isChecked={isAnonymous}
              onChange={() => {
                if (authUser === null) {
                  toast({
                    title: '로그인이 필요합니다.',
                    position: 'top-right',
                  });
                  return;
                }
                setIsAnonymous((prev) => !prev);
              }}
            />
            <FormLabel htmlFor="anonymous " mb="0" fontSize="x-small" ml="1">
              {isAnonymous ? '(기본)익명 등록' : '공개 등록'}
            </FormLabel>
          </FormControl>
        </Box>
      </Box>
    </ServiceLayout>
  );
};

export default UserHomePage;
