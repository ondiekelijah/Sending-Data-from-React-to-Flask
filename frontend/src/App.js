import { useState,useEffect } from 'react'
import './App.css';
import ArticleList from './Components/ArticleList'
import Form from './Components/Form'



function App() {

  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);


  // Modify the current state by setting the new data to
  // the response from the backend

  useEffect(()=>{
    fetch('http://localhost:5000/articles',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setArticles(response))
    .catch(error => console.log(error))


  },[])

  // React Hook "useEffect" cannot be called in a class component. React Hooks must be called 
  // in a React function component or a custom React Hook function react-hooks/rules-of-hooks

  const insertedArticle = (article) =>{
    const new_articles = [...articles,article]
    setArticles(new_articles)
  }

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App">

    <div className="container">
    <div className="row p-3">
      <div className="text-center">
      <h1>Post data from React to Flask.</h1>

      <button 
      onClick={toggleShowForm}
      className="btn btn-primary"
      >
      Write an article
      <i className="bi bi-pencil-square m-2"></i>
      </button>

      </div>

    </div>

      <ArticleList 
      articles={articles} 
      />

      {showForm && (
      <Form 
        insertedArticle={insertedArticle}
        />
      )}
    </div>

    </div>
  );
}

export default App;
