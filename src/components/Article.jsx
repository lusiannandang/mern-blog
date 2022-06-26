import React from 'react'
import {Link} from "react-router-dom"

const Article = ({articles}) => {
  return (
    <>
    {articles.map((article,index) =>(
          <div key={index} className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Link to={`/article/${article.name}`}>
                <img src={article.thumbnail} 
                  className="lg:h-38 md:h-36 w-full object-cover object-center" 
                  alt="blog-images"/>
              </Link>
              <div className="p-6">
                <Link key={index} to={`/article/${article.name}`}>
                  <h3>{article.title}</h3>
                </Link>
                <p className="leading-relaxed mb-3">
                  {article.content[0].substring(0,125)}...
                </p>
                <Link className="text-indigo-500 hover:text-indigo-800 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn more...
                </Link>
              </div>
              
            </div>
          </div>
        ))}
    </>
  )
}

export default Article