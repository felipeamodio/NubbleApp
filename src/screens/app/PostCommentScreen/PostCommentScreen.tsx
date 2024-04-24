import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList, useUser } from '@domain';

import { Box, Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom, PostCommentItem, PostCommentTextMessage } from './components';


export function PostCommentScreen({route}: AppScreenProps<'PostCommentScreen'>){
    const postId = route.params.postId;
    const postAuthorId = route.params.postAuthorId;
    const {list, fetchNextPage, hasNextPage, refresh} = usePostCommentList(postId);
    const {bottom} = useAppSafeArea();
    const {id} = useUser();

    function renderItem({item}: ListRenderItemInfo<PostComment>) {
        return (
            <PostCommentItem postComment={item} onRemoveComment={refresh} userId={id} postAuthorId={postAuthorId} />
        );
    }

    return (
        <Screen flex={1} canGoBack title="Comentários">
            <Box flex={1} justifyContent="space-between">
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: bottom}}
                    ListFooterComponent={
                        <PostCommentBottom
                            fetchNextPage={fetchNextPage}
                            hasNextPage={hasNextPage}
                            />
                    }
                />
                <PostCommentTextMessage postId={postId} onAddComment={refresh} />
            </Box>
        </Screen>
    );
}
