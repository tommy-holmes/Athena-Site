import { PortableTextBlock } from "sanity";
import { Author } from "./Author";

export type Post = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    author: Author;
    image: string;
    categories: string[];
    body: PortableTextBlock[];
}
