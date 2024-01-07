import { Avatar, Box, Divider, Flex, Text, Textarea, Button } from '@chakra-ui/react';
import ResizeTextarea from 'react-textarea-autosize';
import { useState } from 'react';
import { InMessage } from '@/models/message/in_message';
import convertDateToString from '@/utils/convert_date_to_string';

interface Props {
  uid: string;
  displayName: string;
  isOwner: boolean;
  item: InMessage;
  photoURL: string;
  onSendComplete: () => void;
}

const MessageItem = function ({ uid, photoURL, displayName, isOwner, item, onSendComplete }: Props) {
  const [reply, setReply] = useState('');

  async function postReply() {
    const resp = await fetch('/api/message.add.reply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, messageId: item.id, reply }),
    });
    if (resp.status < 300) {
      onSendComplete();
    }
  }

  const haveReply = item.reply !== undefined;
  return (
    <Box borderRadius="md" width="full" bg="white" boxShadow="md">
      <Box>
        <Flex pl="2" pt="2" alignItems="center">
          <Avatar
            size="xs"
            src={item.author ? item.author.photoURL ?? 'https://bit.ly/broken-link' : 'https://bit.ly/broken-link'}
          />
          <Text fontSize="xx-small" ml="1">
            {item.author ? item.author.displayName : '익명'}
          </Text>
          <Text whiteSpace="pre-line" fontSize="xx-small" color="gray.500" ml="1">
            {convertDateToString(item.createAt)}
          </Text>
        </Flex>
      </Box>
      <Box p="2">
        <Box borderRadius="md" borderWidth="2px" p="2">
          <Text whiteSpace="pre-line" fontSize="sm">
            {item.message}
          </Text>
        </Box>
        {haveReply && (
          <Box pt="2">
            <Divider />
            <Flex alignItems="center">
              <Box display="flex" mt="2" />
              <Box pt="2">
                <Avatar size="xs" src={photoURL} mr="2" />
              </Box>
              <Box borderRadius="md" mt="2" p="2" width="full" bg="gray.100">
                <Flex alignItems="center">
                  <Text fontSize="xs" pr="2">
                    {displayName}
                  </Text>
                  <Text whiteSpace="pre-line" fontSize="xs" color="gray">
                    {convertDateToString(item.replyAt)}
                  </Text>
                </Flex>
                <Text whiteSpace="pre-line" fontSize="xs">
                  {item.reply}
                </Text>
              </Box>
            </Flex>
          </Box>
        )}
        {haveReply === false && isOwner && (
          <Box pt="2">
            <Divider />
            <Box display="flex" mt="2">
              <Box pt="1">
                <Avatar size="xs" src={photoURL} mr="2" />
              </Box>
              <Box borderRadius="md" width="full" bg="gray.100" mr="2">
                <Textarea
                  border="none"
                  boxShadow="none !important"
                  resize="none"
                  minH="unset"
                  overflow="hidden"
                  fontSize="xs"
                  as={ResizeTextarea}
                  placeholder="댓글을 입력해주세요.."
                  value={reply}
                  onChange={(e) => setReply(e.currentTarget.value)}
                />
              </Box>
              <Button
                disabled={reply.length === 0}
                colorScheme="pink"
                bgColor="#FF75B5"
                variant="solid"
                size="sm"
                onClick={() => {
                  postReply();
                }}
              >
                등록
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MessageItem;
