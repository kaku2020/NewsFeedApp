import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import './BootstrapArticle'

function BootstrapArticle({article,currbookmarkedArticles, handleBookmark}) {
  return (
    <Card
          className="mb-2">
      <Card.Header><a href={article.url}  target="_blank" rel="noopener noreferrer">{article.title}</a></Card.Header>
      <Card.Body>
        <Card.Title>Author : {article.author}</Card.Title>
        <Card.Text>
          {article.content}
        </Card.Text>
        {' '}
        <Button  variant="contained" onClick={() => handleBookmark(article)}>
              {currbookmarkedArticles.find(item => item.url === article.url) ? 'Remove Bookmark' : 'Bookmark'}
            </Button>
            
      </Card.Body>
    </Card>
  );
}

export default BootstrapArticle;