import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://askmescript.com/upload/photos/2020/04/pNFDnM5HcX9sozLiqIN4_24_62b73862def5530a11afeb3a88f402de_image.png"
                alt="avatar"/>
            {props.message}
            <div>
                <span>Likes count: {props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;