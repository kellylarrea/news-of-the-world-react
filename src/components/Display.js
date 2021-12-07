import React from 'react'

function Display() {
    return(
        <div>
            <hi>Display Page</hi>
            <h2>{props.article.title}</h2>
            <h3>{props.article.author}</h3>
            <h4>{props.article.content}</h4>
        </div>
    )
}

export default Display





// import React from 'react'

// function Display() {
// //     return(
// //         <div>
// //             <h1>Display Page</h1>
// //             <h1>{props.article.title}</h1>
// //             <p>{props.article.content}</p>
// //         </div>
// //     )
// // }

// export default Display