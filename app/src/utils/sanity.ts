import { createClient } from "@sanity/client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

if (
  !import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  !import.meta.env.PUBLIC_SANITY_DATASET
) {
  throw new Error("Did you forget to run sanity init --env?");
}

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-04-28", // date of setup
});

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getAuthor(ref: string): Promise<Author> {
  return await client.fetch(
    groq`*[_type == "author" && _id == $ref][0]`,
    {
      ref,
    }
  );
}

export interface Post {
  _type: "post";
  _id: string;
  _createdAt: string;
  title: string;
  keywords: string,
  slug: Slug;
  readTime: number;
  publishedAt: string;
  author: Author;
  excerpt: string;
  mainImage: ImageAsset;
  categories: Category[];
  body: PortableTextBlock[];
}

export interface Author {
  _type: "author";
  name: string;
  title: string;
  url: URL;
  slug: Slug;
  image: ImageAsset;
}

export interface Category {
  _type: "category";
  name: string;
  description: string;
}
