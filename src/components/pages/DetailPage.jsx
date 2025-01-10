import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DetailPage() {

    const apiUrl = 'http://localhost:3000'
    const { id } = useParams()
    const [detailPost, setDetailPost] = useState({})

    useEffect(() => {
        axios.get(`${apiUrl}/posts/${id}`).then(response => {
            console.log(response.data);
            setDetailPost(response.data);
        })
    }, [id])

    return (
        <div key={detailPost.id} className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{detailPost.title}</h5>
                {detailPost.image && (
                    <img src={`${apiUrl}/${detailPost.image}`} alt={detailPost.image} className="img-fluid mb-3" />
                )}
                <p className="card-text">{detailPost.content}</p>
            </div>
        </div>
    )
}