import { allPosts } from "@/.contentlayer/generated"
import { compareDesc, format, parseISO } from 'date-fns'

import Link from "next/link"

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="prose dark:prose-invert">
      {posts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
          <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </article>
      ))}
    </div>
  )
}
