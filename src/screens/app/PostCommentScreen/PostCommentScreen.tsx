import { useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';

import { Box, Screen, TextMessage } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom, PostCommentItem } from './components';


export function PostCommentScreen({route}: AppScreenProps<'PostCommentScreen'>){
    const postId = route.params.postId;
    const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
    const {bottom} = useAppSafeArea();
    const [message, setMessage] = useState('');

    function renderItem({item}: ListRenderItemInfo<PostComment>) {
        return (
            <PostCommentItem postComment={item} />
        );
    }

    function onPressSend() {
        return null;
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
                <TextMessage
                    value={message}
                    onChangeText={setMessage}
                    onPressSend={onPressSend}
                    placeholder="Adicione um comentário"
                />
            </Box>
        </Screen>
    );
}
