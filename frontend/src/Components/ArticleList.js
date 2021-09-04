import Moment from 'react-moment';

const ArticleList = (props) => {


    return (
        <div className="row">
        {/* Display the article details if article is not None */} 
   	    {props.articles && props.articles.map(article =>{
            return (

              <div key= {article.id} className="col-md-6 ">
                <h2 className="text-primary"> { article.title} </h2>
                <p> { article.body } </p>
                <p> <i className="bi bi-clock m-1"></i><Moment fromNow date={ article.date } /> </p>
              </div>
            )
            
            })}
        </div>
        )
}

export default ArticleList;