import { usePaginatedList } from '@infra';

import { postCommentService } from '../postCommentService';

export function usePostCommentList(postId: number){
    function getList(page: number){
        //mascarando o parametro do post id
        return postCommentService.getList(postId, page);
    }

    return usePaginatedList(getList);
}
