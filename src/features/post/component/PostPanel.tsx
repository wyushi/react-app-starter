import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent, selectPost, loadPosts, submitPost } from "../postSlice";
import TextInput from "../../common/TextInput";
import List from "../../common/List";
import PostItem from "./PostItem";
import Post from "../model/Post";

const PostPanel = () => {
    const data = useSelector(selectPost);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.status === 'idle') {
            dispatch(loadPosts());
        }
    }, [data.status, dispatch])

    return (
        <div>
            <List isBusy={data.status == "loading"}>
                {data.posts.map((post: Post) => <PostItem post={post} />)}
            </List>
            <TextInput 
                text={data.current}
                onInputTextChange={value => dispatch(setCurrent(value))}
                submitButtonClick={() => dispatch(submitPost(data.current))} />
        </div>
    );
};
export default PostPanel;