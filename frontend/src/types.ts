//this file stores the interface types
export interface PostType {
   id: number
    content: string,
    image?:string
    createdAt: string

    Author: {
        name: string,
        username: string
        authorId: number,
        profilePicture: string
        headline: string
    }

    comments: {
      content: string
      createdAt: string
      userId: number
      postId: number
      User: {
        id: number
        name: string 
        profilePicture: string 
      }
    }[]

    likes: {
      userId: number
    }[]
}

export interface User {
  id: number
  name: string
  bannerImg: string
  username: string
  headline: string
  profilePicture: string
  connections: {
    id: number,
    username: string,
    profilePicture: string,
    headline: string
  }[]
}
