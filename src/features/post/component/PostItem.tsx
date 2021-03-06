import React from "react";
import Post from "../model/Post";

type PostItemProp = {
    post: Post;
};

type PostItemType = (props: PostItemProp) => React.ReactElement<PostItemProp>;

const PostItem: PostItemType = (props) => (
    <div>{props.post.content}</div>
);

export default PostItem;