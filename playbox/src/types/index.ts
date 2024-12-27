export interface Content {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    links: {
      title: string;
      url: string;
    }[];
    comments: Comment[];
    createdAt: Date;
  }
  
  export interface Comment {
    id: string;
    content: string;
    userName: string;
    createdAt: Date;
  }