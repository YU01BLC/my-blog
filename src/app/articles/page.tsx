'use client';

import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import ArticleList from '../../app/components/ArticleList';
import ArticlePreview from '../components/ArticlePreview';

export default function Page() {
  const testData = { id: 'testId' };
  const mediaView: boolean = useMediaQuery('(min-width:1024px)');

  return (
    <Box display={mediaView ? 'flex' : 'block'} justifyContent='space-between' margin='2em' data-testid='article'>
      <Box width={mediaView ? '60%' : '100%'} marginBottom={mediaView ? '' : '2em'}>
        <ArticlePreview params={testData} />
      </Box>
      <Box width={mediaView ? '30%' : '100%'}>
        <ArticleList />
      </Box>
    </Box>
  );
}
