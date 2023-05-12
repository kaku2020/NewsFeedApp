import React from 'react'
import  './BookmarkedArticles';

function BookmarkedArticles({bookmarks, setBookmarks}) {

  const handleBookmark = (article) => {
      setBookmarks((prevBookmark) => 
        prevBookmark.filter((bookmark) => bookmark.url !== article.url)
      )}

  return (
    <div>
      <h1>bookmarked</h1>
     {bookmarks.length > 0 ? (
          <ul>
            {bookmarks.map((article) => (
              <>
              <li key={article.url}>
                <a href={article.url}>{article.title}</a>
              </li>
              <button onClick = {() => handleBookmark(article)}>Remove Bookmark</button>
              </>
            ))}
          </ul>
        ) : (<p>No bookmark</p>)}
    </div>
  )
}

export default BookmarkedArticles
