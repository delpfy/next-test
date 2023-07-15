import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { 
        revalidate: 60,
    },
  });

  if(!response.ok) throw new Error('Unable to load posts')

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next-Test",
};

export default async function Blog() {
  const data = await getData();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ paddingBottom: 30 }}>
        <h1>Blog</h1>
      </div>

      <ul>
        {data.map((post: any) => (
          <li key={post.id} style={{ paddingBottom: 5 }}>
            <Link href={`/blog/${post.id}`}>
              {post.id}: {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
