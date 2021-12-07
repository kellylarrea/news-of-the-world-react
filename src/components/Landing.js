import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
//     // console.log('this is props',props)
const allResults = results.map((article, i) => {
    // console.log('this is all articles', allArticles)
    return(
    <div key={i}>
        <Link
            to={`/Display/${i}`}>
                <p>{article.title}</p>
        </Link>
    </div>
    )
  }, [])
//     // console.log('this is data key', data.article)
    return (
        <div>
            <h1>Landing Page</h1>
               {allResults}
        </div>

    )
}


export default Landing

   // const allNews = props.article.map((article, i) => {
    //     return (
    //         <Link
    //             to={`/article/${i}`}
    //             key={i}
    //             onClick={props.articleClick} >
    //             <li>
    //                 <p id={i}>{article.title}</p>
    //             </li>
    //         </Link>
    //     )
    // })
    // return (
    //     <div>
    //         <h1>LandingPage</h1>
    //             <li>{allNews}</li>
    //     </div>
    // )
