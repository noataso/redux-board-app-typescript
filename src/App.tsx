import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { postType } from './postType';
import { addPost, deletePost } from './redux/postsSlice';

function App() {
  const [name,setName]=useState("");
  const [content,setContent]=useState("");
  const postList=useSelector((state:any)=>state.posts.value)
  const dispatch=useDispatch()
  const handleAddName=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  const handleAddContent=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value)
  }
  const handleAddPost=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(addPost({
      id:postList.length,
      name:name,
      content:content,
    }))
    setName("");
    setContent("");
  }
  const handleDeletePost=(post:postType)=>{
    dispatch(deletePost({
      id:post.id,
    }))
  }
  return (
    <div>
      <form onSubmit={(e)=>handleAddPost(e)}>
        <label htmlFor="name" className='form-label'>お名前</label>
        <input
        type="text"
        id="name"
        className="from-control"
        value={name}
        onChange={(e)=>handleAddName(e)} />
        <label htmlFor="content" className='form-label'>内容</label>
        <textarea
        name="content"
        id="content"
        className="form-control"
        value={content}
        onChange={(e)=>handleAddContent(e)}></textarea>
        <button type="submit">追加</button>
      </form>
      <div>
        {postList.map((post:postType)=>(
          <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.content}</p>
            <button onClick={()=>handleDeletePost(post)}>削除</button>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default App;
