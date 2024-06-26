import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { CrewAvatar, RankText, RankingItemWrapper } from './RankingItem.styles';
import { getRankingItemBackgroundColor } from './getRankingItemBackgroundColor';

type RankingItemProps = {
  rank: number;
  profileImageUrl: string;
  name: string;
  rating: number;
  onClick: VoidFunction;
};

export const RankingItem = ({
  rank,
  profileImageUrl,
  name,
  rating,
  onClick,
}: RankingItemProps) => {
  return (
    <RankingItemWrapper
      justify="space-between"
      align="center"
      onClick={onClick}
      backgroundColor={getRankingItemBackgroundColor(rank)}
      data-testid="ranking-item"
    >
      <Flex align="center" gap={10}>
        <RankText size={14} nowrap>
          {rank}
        </RankText>
        <CrewAvatar size={40} src={profileImageUrl} radius="5px" />
        <Text size={16} weight={700} ellipsis={1}>
          {name}
        </Text>
      </Flex>
      <Text size={12} weight={700} color={theme.PALETTE.GRAY_600} nowrap>
        {rating.toLocaleString()}
      </Text>
    </RankingItemWrapper>
  );
};
