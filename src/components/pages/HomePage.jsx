import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function HomePage() {
  const setObject = {
    title: '', content: '', image: '',
  }
  const [post, setPost] = useState([])
  const [newPost, setNewPost] = useState(setObject)
  const navigate = useNavigate();
  //per aggiungere più campi inserire un nuovo state
  const apiUrl = 'http://localhost:3000'

  const sendPost = event => {
    event.preventDefault()

    axios.post(`${apiUrl}/posts`, newPost).then(response => {

      //aggiungere il nuovo parametro ad un campo dentro l'oggetto sottostante
      setPost([...post, response.data])

      setNewPost(setObject)

      navigate(`/posts/${response.data.slug}`)

    })
  }

  const handleInputData = e => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    })

  }

  return (
    <>
      <div className="container my-4">
        <form onSubmit={sendPost}>
          {/* Input per il titolo */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={newPost.title}
              onChange={handleInputData}
            />
          </div>

          {/* Input per il contenuto */}
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Post Content</label>
            <textarea
              name="content"
              id="content"
              className="form-control"
              rows="4"
              value={newPost.content}
              onChange={handleInputData}
            ></textarea>
          </div>

          {/* Input per immagine */}
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Post Image URL</label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              value={newPost.image}
              onChange={handleInputData}
            />
          </div>

          {/* Pulsante di invio */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>


      </div>

    </>
  )
}

export default HomePage
