import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostCommentScreen({route}: AppScreenProps<'PostCommentScreen'>){
    // route.params.postId
    return (
        <Screen canGoBack title="Comentários">
            <Box>
                <Text>TELA DE COMENTARIOS</Text>
            </Box>
        </Screen>
    );
}
