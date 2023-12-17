import { NextPage } from 'next';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { ServiceLayout } from '@/component/service_layout';

const IndexPage: NextPage = function () {
  return (
    <ServiceLayout title="Home">
      <Box maxW="md" mx="auto">
        <img src="/main_logo.svg" alt="메인 로고" />
        <Flex justify="center">
          <Heading>#BlahBlah</Heading>
        </Flex>
      </Box>
      <Box>로그인 버튼</Box>
    </ServiceLayout>
  );
};

export default IndexPage;
