import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import './BootstrapArticle'

function BootstrapBookmark({article, handleBookmark}) {
  return (
    <Card className="mb-2">
      <Card.Header><a href={article.url}>{article.title}</a></Card.Header>
      <Card.Body>
        {/* <Button variant="primary"><a href={article.url}>{article.title}</a></Button> */}
        
            <Button variant="contained" size="small" onClick = {() => handleBookmark(article)}>Remove Bookmark</Button>
      </Card.Body>
    </Card>
  );
}

export default BootstrapBookmark;