import { Post } from '@domain';

import { Box, IconProps, TouchableOpacityBox, Text, Icon } from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>

interface ItemProps{
    onPress: () => void;
    marked: boolean;
    icon: {
        default: IconProps['name'];
        marked: IconProps['name'];
    }
    text: number;
}

function Item({onPress, marked, icon, text}: ItemProps){
    return (
        <TouchableOpacityBox onPress={onPress} flexDirection="row" alignItems="center" mr="s24">
            <Icon name={marked ? icon.marked : icon.default} color={marked ? 'market' : undefined} />
            {text > 0 &&
            <Text preset="headingSmall" bold ml="s4">{text}</Text>
            }
        </TouchableOpacityBox>
    );
}

export function PostActions({commentCount, favoriteCount, reactionCount}: Props){
    function likePost(){
        //TODO: todo like post function
    }

    function navigateToComments(){
        //TODO: todo navigation to comments
    }

    function favoritePost(){
        //TODO: todo favorite post function
    }

    return (
        <Box flexDirection="row" mt="s16">
            <Item
                onPress={likePost}
                icon={{default: 'heart', marked: 'heartFill'}}
                marked
                text={reactionCount}
            />
            <Item
                onPress={navigateToComments}
                icon={{default: 'comment', marked: 'comment'}}
                marked={false}
                text={commentCount}
            />
            <Item
                onPress={favoritePost}
                icon={{default: 'bookmark', marked: 'bookmarkFill'}}
                marked
                text={favoriteCount}
            />
        </Box>
    );
}
