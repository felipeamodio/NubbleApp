
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';

import { Box, Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom, PostCommentItem } from './components';


export function PostCommentScreen({route}: AppScreenProps<'PostCommentScreen'>){
    const postId = route.params.postId;
    const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
    const {bottom} = useAppSafeArea();

    function renderItem({item}: ListRenderItemInfo<PostComment>) {
        return (
            <PostCommentItem postComment={item} />
        );
    }

    return (
        <Screen canGoBack title="Comentários">
            <Box>
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
            </Box>
        </Screen>
    );
}
