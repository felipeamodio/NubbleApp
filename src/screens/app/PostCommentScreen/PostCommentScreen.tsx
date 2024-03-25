import { usePostCommentList } from 'src/domain/PostComment/useCases/usePostCommentList';

import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostCommentScreen({route}: AppScreenProps<'PostCommentScreen'>){
    const postId = route.params.postId;
    usePostCommentList(postId);

    return (
        <Screen canGoBack title="Comentários">
            <Box>
                <Text>TELA DE COMENTARIOS</Text>
            </Box>
        </Screen>
    );
}
