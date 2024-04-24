import {Post} from '@domain';
import { useNavigation } from '@react-navigation/native';

import { Box, Text } from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>

export function PostBottom({author, commentCount, text, id}: Props){
    const navigation = useNavigation();

    const commentText = getCommentText(commentCount);

    function navigateToPostCommentScreen(){
        navigation.navigate('PostCommentScreen', {
            postId: id,
            postAuthorId: author.id,
        });
    }

    function getCommentText(commentCount: number): string | null{
        if (commentCount === 0){
            return null;
        } else if (commentCount === 1){
            return 'ver comentário';
        } else {
            return `ver ${commentCount} comentários`;
        }
    }

    return (
        <Box mt="s16">
            <Text preset="paragraphMedium" bold>{author.userName}</Text>
            <Text preset="paragraphMedium" color="gray1">{text}</Text>
            {commentText && (
                <Text
                    preset="paragraphSmall"
                    bold
                    color="primary"
                    mt="s8"
                    onPress={navigateToPostCommentScreen}>{commentText}</Text>
            )}
        </Box>
    );
}
