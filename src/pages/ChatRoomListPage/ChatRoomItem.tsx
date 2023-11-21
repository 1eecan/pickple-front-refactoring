import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { ChatRoom } from '@type/models/ChatRoom.ts';

import { getTimeStamp } from '@utils/getTimeStamp.ts';

import {
  ChatItemAvatar,
  ChatMatchDuration,
  ChatMatchStartTime,
  ChatMatchStatus,
  DateText,
  Nickname,
} from './ChatRoomListPage.style.ts';

type ChatRoomItemProps = {
  chatRoomItem: ChatRoom;
  onClickChatRoomItem: () => void;
};

const GuestChatRoomProfile = ({
  playStartTime,
  playTimeMinutes,
}: Pick<ChatRoom, 'playStartTime' | 'playTimeMinutes'>) => {
  const playTimeHours = (playTimeMinutes as number) / 60;

  return (
    <ChatMatchStatus>
      <ChatMatchStartTime>{playStartTime}</ChatMatchStartTime>
      <ChatMatchDuration>{playTimeHours}h</ChatMatchDuration>
    </ChatMatchStatus>
  );
};

export const ChatRoomItem = ({
  chatRoomItem,
  onClickChatRoomItem,
}: ChatRoomItemProps) => {
  const {
    roomName,
    type: roomType,
    lastMessageCreatedAt,
    lastMessageContent,
    roomIconImageUrl,
  } = chatRoomItem;

  return (
    <Flex justify="space-between" onClick={onClickChatRoomItem}>
      <Flex gap={8}>
        {roomType === '게스트' ? (
          <GuestChatRoomProfile
            playStartTime={chatRoomItem.playStartTime}
            playTimeMinutes={chatRoomItem.playTimeMinutes}
          ></GuestChatRoomProfile>
        ) : (
          <ChatItemAvatar
            width="40"
            alt="avatar"
            src={roomIconImageUrl as string}
          />
        )}
        <Flex direction="column">
          <Nickname size={12} weight={500} ellipsis={1}>
            {roomName}
          </Nickname>
          <Text size={12} weight={300} ellipsis={1}>
            {lastMessageContent}
          </Text>
        </Flex>
      </Flex>
      <DateText size={8} color={theme.PALETTE.GRAY_500}>
        {getTimeStamp(lastMessageCreatedAt)}
      </DateText>
    </Flex>
  );
};