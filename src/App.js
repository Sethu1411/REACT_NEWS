import React,{usestate, useeffect} from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrind'

function App() {
    const [items, setItem] = useState([])
    const [active, setActive] = useState(1)
    const [category, setCategory] = useState("general")

useeffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch=${category}&
    apiKey=a5fbaae6e9854faea20f45f48c98697a`)
    .then(res => res.json())
    .then(data => setItem(data.articles))
},[category])


    return(
        <div className="App">
            <h1 className="title">See the Latest News</h1>
            <Menu/>
            <NewsGrid items={items}/>
        </div>
    )
}

export default App
