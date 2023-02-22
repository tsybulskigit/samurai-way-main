import {reRenderEntireTree} from "../render";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    name: string
    id: number
}

export type MessagesType = {
    message: string
    id: number
}

export type ProfilePageType = {
    posts: PostType[]
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'It\'s my first post', likesCount: 8},
            {id: 3, message: 'Blabla', likesCount: 8},
            {id: 4, message: 'Dada', likesCount: 8},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    reRenderEntireTree(state)
}

export default state