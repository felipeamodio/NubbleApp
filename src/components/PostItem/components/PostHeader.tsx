import { Post } from '@domain';

import {Box, Text, ProfileAvatar} from '@components';

type PostHeaderProps = Pick<Post, 'author'>

export function PostHeader({author}: PostHeaderProps){
    return (
        <Box flexDirection="row" alignItems="center" mb="s16">
            <ProfileAvatar imageURL={author.profileURL} size={32} borderRadius={14} />
            <Text preset="paragraphMedium" semiBold ml="s12">{author.name}</Text>
        </Box>
    );
}
