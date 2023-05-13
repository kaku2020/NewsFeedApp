import React,{useState,useEffect} from 'react'
import  './NewsApp.css'
import axios from 'axios'
import NewsArticles from '../NewsArticles/NewsArticles';
import BookmarkedArticles from '../BookmarkedArticles/BookmarkedArticles';

const API_KEY = '2f987c859254473781ba98e7afcd3297';
// const API_KEY = process.env.REACT_APP_API_KEY;// coreectly api ke should be hidden 
function NewsApp() {
  const [data,setData] = useState('');
  const [search,setSearch] = useState('bitcoin');
  const [currentPage, setCurrentPage] = useState(1);
  const [currbookmarkedArticles, setBookmarkedArticles] = useState([])
  
  useEffect(() => {handleInput()},[])

  const handleInput = async () => {
    try {
      const optimised_search = search.split(' ').join('%20');
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q='+optimised_search +'&apiKey=' + API_KEY
      );
      setData(response.data.articles);
      
      console.log(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className='app_container'>
      
      <div className='navbar'>  
     
        <input
          type='text'
          value={search}
          onChange={handleSearch}
          data-testid="orders__search"
      />
      <button onClick = {handleInput}>Search Articles</button></div>
      <div className='newsFeed'>
      <NewsArticles data = {data} totalResults = {100} 
      currentPage = {currentPage} setCurrentPage ={setCurrentPage} 
      currbookmarkedArticles = {currbookmarkedArticles} setBookmarkedArticles = {setBookmarkedArticles}/>
       <BookmarkedArticles bookmarks = {currbookmarkedArticles} setBookmarks = {setBookmarkedArticles}/>
      </div>
    </div>
  )
}

export default NewsApp



