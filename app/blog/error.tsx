"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>{error.message}  O_o</h1>
}
