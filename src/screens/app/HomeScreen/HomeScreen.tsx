import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { Post, usePostList } from '@domain';

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
    const {error, loading, postList, refetch} = usePostList();

    //nesse ListRenderItemInfo eu posso passar a interface do item q quero renderizar
    function renderItem({item}: ListRenderItemInfo<Post>){
        return <PostItem post={item} />;
    }

    return (
        <Screen style={$screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
                ListHeaderComponent={<HomeHeader />}
                ListEmptyComponent={
                    <HomeEmpty
                         loading={loading}
                         error={error}
                         refetch={refetch} />
                }
            />
        </Screen>
    );
}
