import { getPosts } from "@/sanity/sanity-utils"

export default async function Blog() {
  const posts = await getPosts();

  return <div>
    {posts.map((post) => (
      <div key={post._id}>
        <h1 className="font-bold text-2xl">{post.title}</h1>
      </div>
    ))}
  </div>
}
