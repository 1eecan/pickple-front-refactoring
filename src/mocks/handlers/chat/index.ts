import { mockGetAllChatMessages } from './mockGetAllChatMessages';
import { mockGetAllChatRoomList } from './mockGetAllChatRoomList';
import { mockGetChatRoomDetails } from './mockGetChatRoomDetails';

export const chatHandlers = [
  mockGetAllChatRoomList,
  mockGetChatRoomDetails,
  mockGetAllChatMessages,
];
