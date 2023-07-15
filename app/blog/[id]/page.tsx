import { Metadata } from "next";

type Props = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post_title = await getData(id)
  return {
    title: post_title.title 
  };
}

async function getData(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if(!response.ok) throw new Error('Unable to load post ' + id)

  return response.json();
}

export default async function Post({ params: { id } }: Props) {
  const data = await getData(id);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: 650,
        padding: 50,
        borderColor: "#fff",
        borderRadius: 2,
        borderStyle: "solid",
      }}
    >
      <ul style={{ listStyleType: "none" }}>
        <li style={{ padding: 5 }}>
          <h1>User: {data.userId}</h1>
        </li>

        <li style={{ padding: 5 }}>
          <h2>{data.title}</h2>
        </li>
        <li style={{ padding: 5 }}>
          <p> {data.body}</p>
        </li>
      </ul>
    </section>
  );
}
