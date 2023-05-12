import React,{useState,useEffect} from 'react'
import  './NewsArticles'
import BookmarkedArticles from '../BookmarkedArticles/BookmarkedArticles';

function NewsArticles({data,totalResults}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currbookmarkedArticles, setBookmarkedArticles] = useState([])

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const handleBookmark = (article) => {
   debugger
    //check if the article is already book marked
    const isBookmarked = currbookmarkedArticles.find(
      (bookmark) => bookmark.url === article.url
    );

    if(!isBookmarked) {
      //Add the article to the bookmarkedArticles state
      setBookmarkedArticles((prevBookmarks) => [...prevBookmarks,article]);
    }else{
      //Remove the article from the bookmarked articles state
      setBookmarkedArticles((prevBookmarks) => {
        prevBookmarks.filter((bookmark) => bookmark.url !== article.url);
      });
    }
  };

  useEffect(() => {
    localStorage.setItem('bookmarkedArticles', JSON.stringify(currbookmarkedArticles));
  }, [currbookmarkedArticles]);

  useEffect(() => {
    //Retrieve bookmarkedArticles from  local storage when the component mounts 
    const storedBookmarks = localStorage.getItem('bookmarkedArticles');
    if(storedBookmarks){
      setBookmarkedArticles(JSON.parse(storedBookmarks));
    }
  },[])

  const firstindex = currentPage*10 -10;
  const last_index = currentPage*10
  const currData = data.slice(firstindex,last_index)

  return (
    <div>
      <h1>News App</h1>
      {currData.length > 0 ? (
        <div>
        <ul>
          {currData.map((article) => {
            return (
              <>
           <li key= {article.url}>
              <a href={article.url}>{article.title}</a>
            </li>
            <button onClick={() => handleBookmark(article)}>
              {currbookmarkedArticles.find(item => item.url === article.url) ? 'Remove Bookmark' : 'Bookmark'}
            </button>
            </>)})}
        </ul>
        <div>
          {currentPage > 1 && (
            <button onClick= {handlePrevPage}>Previous Page</button>
          )}
          {currentPage*10 < totalResults && (
            <button onClick={handleNextPage}>Next Page</button>
          )}
          </div>
          </div>) : (<p>Loading articles...</p>)}
          <>
          <BookmarkedArticles bookmarks = {currbookmarkedArticles} setBookmarks = {setBookmarkedArticles}/>
          </>
    </div>
  )
}

export default NewsArticles
