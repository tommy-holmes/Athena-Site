import { createClient, groq } from "next-sanity";
import { Post } from "@/types/Post";

export async function getPosts(): Promise<Post[]> {
    const client = createClient({
        projectId: 'kkdxagg1',
        dataset: 'production',
        apiVersion: '2023-04-27',
        useCdn: true,
    });

    return client.fetch(
        groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            publishedAt,
            categories,
            "slug": slug.current,
            "image": mainImage.asset->url,
            body
        }`
    )
}
