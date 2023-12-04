import Box from '@mui/material/Box';
import Article from '../app/articles/page';
import DummyArticle from '../app/components/DummyArticle';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '2em' }}>
      <Box sx={{ width: '70%' }}>
        <Article />
      </Box>
      <Box>
        <DummyArticle />
      </Box>
    </Box>
  );
}
