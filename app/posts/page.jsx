import PostCard from "@/components/PostCard";

async function loadPosts() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    return data;
}

async function PostPage() {

    const posts = await loadPosts();

    return (
        <>
            {posts.map((post) => (
               <PostCard post={post} key={post.id}/> 
            ))}
        </>
    )
}

export default PostPage
