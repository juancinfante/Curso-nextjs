import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        <>
            <div className="bg-gray-950 p-10 text-slate-100">
                <Link href={`/posts/${post.id}`}>
                    <h3 className="text-xl font-bold mb-4">{post.id}. {post.title}</h3>
                </Link>
                <p>{post.body}</p>
            </div>
        </>
    )
}

export default PostCard