import React,{ useState } from 'react';
import APIService from '../Components/APIService'


const Form = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const insertArticle = () =>{
      APIService.InsertArticle({title,body})
      .then((response) => props.insertedArticle(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setTitle('')
      setBody('')
    }

  return (
    <div className="shadow p-4">

        <form onSubmit = {handleSubmit} >

          <label htmlFor="title" className="form-label">Title</label>
          <input 
          type="text"
          className="form-control" 
          placeholder ="Enter title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
          />

          <label htmlFor="body" className="form-label">Body</label>
          <textarea 
          className="form-control" 
          placeholder ="Enter body" 
          rows='6'
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          required
          >
          </textarea>

          <button 
          className="btn btn-primary mt-2"
          >
          Publish article</button>
          
        </form>
              

    </div>
  )}

export default Form;