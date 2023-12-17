import { Box, Button } from '@chakra-ui/react';

export const GoogleLoginButton = function () {
  return (
    <Box>
      <Button
        size="lg"
        width="full"
        maxW="md"
        color="white"
        colorScheme="blue"
        borderRadius="full"
        bgColor="#4285f4"
        leftIcon={
          <img
            src="/google_logo.svg"
            alt="구글 로고"
            style={{ backgroundColor: 'white', padding: '8px', borderRadius: 'full' }}
          />
        }
      >
        Google 계정으로 시작하기
      </Button>
    </Box>
  );
};
