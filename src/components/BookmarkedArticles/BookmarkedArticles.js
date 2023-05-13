import React from 'react'
import  './BookmarkedArticles';
import BootstrapBookmark from '../Bootstrap/BootstrapBookmark';
function BookmarkedArticles({bookmarks, setBookmarks}) {

  const handleBookmark = (article) => {
      setBookmarks((prevBookmark) => 
        prevBookmark.filter((bookmark) => bookmark.url !== article.url)
      )}

  return (
    <div className='bookmark'>
      <h1>Bookmarked</h1>
      <div className='bookmark_container'>
     {bookmarks.length > 0 ? (
          <ul>
             <div className='bookmark_container_component'>
            {bookmarks.map((article) => (
              <div className='bookmark_container_component_part'>
            
              <li key={article.url}>
              <BootstrapBookmark article = {article} handleBookmark ={handleBookmark}/>
              </li>
             
              </div>
            ))}
            </div>
          </ul>
        ) : ( <div className='bookmark_container_component'><p>No bookmark</p></div>)}
        </div>
    </div>
  )
}

export default BookmarkedArticles
