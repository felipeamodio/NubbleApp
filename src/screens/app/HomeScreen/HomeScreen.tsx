/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl, StyleProp, ViewStyle } from 'react-native';

import { Post, usePostList } from '@domain';
import { useScrollToTop } from '@react-navigation/native';

import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';

const $screen: StyleProp<ViewStyle> = {
    paddingBottom: 0,
    paddingTop: 0,
    paddingHorizontal: 0,
    flex: 1,
};


export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>){
    const {error, loading, list: postList, refresh, fetchNextPage} = usePostList();

    const flatListRef = useRef<FlatList<Post>>(null);
    useScrollToTop(flatListRef);

    //nesse ListRenderItemInfo eu posso passar a interface do item q quero renderizar
    function renderItem({item}: ListRenderItemInfo<Post>){
        return <PostItem post={item} />;
    }

    // onEndReached={} é uma função que chama quando está chegando no limite da lista
    // onEndReachedThreshold={} é uma função que chama a porcentagem pra atualizar a próxima página da lista, 0.5 é na metade da lista
    // refreshControl é uma função de refresh da lista (precisa passar o refreshing)

    return (
        <Screen style={$screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                ref={flatListRef}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={0.1}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
                refreshing={loading}
                contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
                ListHeaderComponent={<HomeHeader />}
                ListEmptyComponent={
                    <HomeEmpty
                         loading={loading}
                         error={error}
                         refetch={refresh} />
                }
            />
        </Screen>
    );
}
