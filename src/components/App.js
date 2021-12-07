import {Routes, Route, Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import '../App.css';
import Landing from './pages/Landing';
import Display from './pages/Display';



function App() {

let [results, setResults] = useState({articles: []})
// let [search, setSearch] = useState ('')


useEffect (() =>{
  fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=94945d5954de4b33a667b3c046ccf32a')
  .then(response => response.json())
  .then(responseData => {
    // responseData = responseData.articles
    setResults(responseData.articles)
    console.log('article data', results)
  })
}, [])




  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing allResults={results} />}/>
          <Route path="/display/" element={<Display  />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;


//   const [data, setData] = useState({articles: []})
//   // const [selectedId, setSelectedId] = useState('')
//   // const [search, setSearch] = useState['articles']


//   useEffect(() => {
//     fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=94945d5954de4b33a667b3c046ccf32a`)
//     .then(response => response.json())
//     .then(resData => {
//       setData({articles:resData.articles})
//       console.log('this is resData', resData)
//     })
//   }, [])

//   const articleClick = (e) => {
//     setSelectedId(e.target.id)
//   }
