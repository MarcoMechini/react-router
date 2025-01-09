import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card';

export default function PostsPage() {

    const [post, setPost] = useState([])
    const apiUrl = 'http://localhost:3000'

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        axios.get(`${apiUrl}/posts`).then(response => {
            setPost(response.data)
            console.log(response.data);
        })
    }

    const deletePost = (postId) => {
        setPost(post.filter(post => post.id !== postId))
        axios.delete(`${apiUrl}/posts/${postId}`).then(response => {
            console.log(response.data);
        })
    }

    return (
        <>
            {/* Post visualizzati */}
            < div className="mt-4" >
                {
                    post.length !== 0 ? (
                        post.map(curPost => (
                            <Card key={curPost.id} post={curPost} apiUrl={apiUrl} deletePost={deletePost} />
                        ))
                    ) : (
                        <p className="text-muted">Senza nulla</p>
                    )
                }
            </div>
        </>
    )

}