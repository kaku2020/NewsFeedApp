import React,{useEffect} from 'react'
import Button from '@mui/material/Button';
import  './NewsArticles'
import BootstrapArticle from '../Bootstrap/BootstrapArticle';

function NewsArticles({data,totalResults,currentPage,setCurrentPage,currbookmarkedArticles,setBookmarkedArticles}) {
  
  useEffect(() => {
    //Retrieve bookmarkedArticles from  local storage when the component mounts 
    let storedBookmarks = localStorage.getItem('bookmarkedArticles');
    storedBookmarks = JSON.parse(storedBookmarks);
    if(storedBookmarks.length > 0){
      setBookmarkedArticles(storedBookmarks);
    }
  },[])

   useEffect(() => {
    localStorage.setItem('bookmarkedArticles', JSON.stringify(currbookmarkedArticles));
  }, [currbookmarkedArticles]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const handleBookmark = (article) => {
 
    //check if the article is already book marked
    const isBookmarked = currbookmarkedArticles.find(
      (bookmark) => bookmark.url === article.url
    );

    if(!isBookmarked) {
      //Add the article to the bookmarkedArticles state
      setBookmarkedArticles((prevBookmarks) => [...prevBookmarks,article]);
    }else{
      
      
      //Remove the article from the bookmarked articles state
      setBookmarkedArticles((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.url !== article.url)
      );
    }
  };

  const firstindex = currentPage*10 -10;
  const last_index = currentPage*10
  const currData = data.slice(firstindex,last_index)

  return (
    
    <div className='news_container'>
      <h1>News App</h1>
      <div className='news_container_feed'>
        <div className='news_container_components_1'>
          {currData.length > 0 ? (
        <div className='news_container_components_part'>
        <ul>
          {currData.map((article) => {
            return (
          
              <div className='news_container_components_part_items'>
              <li key= {article.url}>
                <BootstrapArticle article = {article} currbookmarkedArticles = {currbookmarkedArticles} handleBookmark = {handleBookmark} />
                </li>
           
            </div>)})}
        </ul>
        {'  '}
        <div className='news_container_components_part_items'>
        {currentPage > 1 && (
           <Button variant="contained"  size = "small" onClick= {handlePrevPage}>Previous Page</Button>
         )}
        {' '}
        {currentPage*10 < totalResults && (
            <Button  variant="contained" size = "small" onClick={handleNextPage}>Next Page</Button>
        )}
         </div>
          </div>
          ) : (<div className='news_container_components_part_items'>
            <h2>Loading articles...</h2> </div>)
            }
        </div>
          </div>
    </div>
  )
}

export default NewsArticles
