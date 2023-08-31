
async function loadPost(id) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await resp.json();
  return data;
}



async function Page({params}) {

  const post = await loadPost(params.id);
  
  return (
    <>
      <div>Posts Page</div>
      <h3>{"Post N°: " + post.id}</h3>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
    
  )
}

export default Page