import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { useAuth } from '@/contexts/auth_user_context';

const GNB = function () {
  const { loading, authUser, signOut, signInWithGoogle } = useAuth();
  const authInitialized = loading || authUser === null;
  const logInBtn = (
    <Button
      fontSize="sm"
      fontWeight="600"
      color="white"
      bg="pink.400"
      _hover={{ background: 'pink.300' }}
      onClick={signInWithGoogle}
    >
      로그인
    </Button>
  );
  const logOutBtn = <Button onClick={signOut}>로그아웃</Button>;
  return (
    <Box borderBottom={1} borderStyle="solid" borderColor="gray.200" bg="white">
      <Flex minH="60px" py={{ base: 2 }} px={{ base: 4 }} align="center" maxW="md" mx="auto">
        <Spacer />
        <Box flex="1">
          <img style={{ height: '40px' }} src="/logo.svg" alt="logo" />
        </Box>
        <Box justifyContent="flex-end">{authInitialized ? logInBtn : logOutBtn}</Box>
      </Flex>
    </Box>
  );
};

export default GNB;
