import { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { Post, postService } from '@domain';

import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

import { HomeHeader } from './components/HomeHeader';

const $screen: StyleProp<ViewStyle> = {
    paddingBottom: 0,
    paddingTop: 0,
    paddingHorizontal: 0,
};


export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>){
    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        postService.getList().then(list => setPostList(list));
    }, []);

    //nesse ListRenderItemInfo eu posso passar a interface do item q quero renderizar
    function renderItem({item}: ListRenderItemInfo<Post>){
        return (
            <PostItem post={item} />
        );
    }

    return (
        <Screen style={$screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListHeaderComponent={<HomeHeader />}
            />
        </Screen>
    );
}
