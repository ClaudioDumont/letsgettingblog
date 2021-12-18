export interface LetsGetCheckedBlogPostComments {
    content: string,
    date: string | null,
    parent_id: number | null,
    postId: number,
    user: string
}