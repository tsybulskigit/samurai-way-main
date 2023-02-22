import React, {createRef} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement = createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : '-----'
        props.addPost(text)
        // newPostElement.current.value = ''
    }

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;