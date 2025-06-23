//this file stores the interface types
export interface PostType {
   id: number
    content: string,
    image?:string
    createdAt: string

    Author: {
        id: number,
        name: string,
        username: string
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
  location: string
  about: string
  skills: string[],
  
  connections: {
    id: number,
    username: string,
    profilePicture: string,
    headline: string
  }[]

  experience: {
    id: number
    title: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string,
    // userId: number
  }[]

  education: {
    id: number,
    school: string,
    fieldOfStudy: string,
    startYear: number,
    endYear: number,
  }[]
}
