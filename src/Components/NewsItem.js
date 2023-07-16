import React from 'react'

const NewsItem=(props)=> {
  
 
    let {title,description,imageUrl,newsUrl,publishedAt,author,source} = props;
    return (
        <div className="className my-3">
          <div className='card' >
          <div style={{display: 'flex',
              justifyContent: 'flex-end',
              right: '0',
              position: 'absolute'}}>
              <span className="badge rounded-pill text-bg-danger">{source}</span>
          </div>
            
                <img src={imageUrl} alt=''/>
                <div className="card-body">
                   <h5 className="card-title ">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">{'By '+(author?author:"Unknown")+" on "+Date(publishedAt)}</small></p>
                    <a href={newsUrl} target='_blank'  rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
     
    )
  }


export default NewsItem