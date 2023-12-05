import Box from '@mui/material/Box';
import React from 'react';
import ArticleList from '../../app/components/ArticleList';
import DummyArticle from '../../app/components/DummyArticle';

export default function Page() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '2em' }} data-testid='article'>
      <Box sx={{ width: '70%' }}>
        <ArticleList />
      </Box>
      <Box>
        <DummyArticle />
      </Box>
    </Box>
  );
}
