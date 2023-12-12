'use client';

import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ArticleList() {
  const array = [1, 2, 3];
  const mediaView: boolean = useMediaQuery('(min-width:1024px)');
  return (
    <Box data-testid='article-list'>
      <Link href='/hoge'>
        {array.map((index) => (
          <Card key={index} sx={{ marginBottom: '2em' }}>
            <CardHeader title={`記事タイトル: ${index}`} subheader='2023/12/1' />

            <CardMedia
              component='img'
              height={mediaView ? '150' : '500'}
              image={`https://source.unsplash.com/collection/1346951/1000x500?sig=${index}`}
              alt={`blog image: ${index}`}
            />
            <CardContent>
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{ paddingTop: '1em' }}
                data-testid={`article-list--text${index}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod maiores totam aperiam
                necessitatibus est, exercitationem architecto quibusdam accusamus maxime asperiores eaque adipisci
                itaque nemo, minus odio, alias dolor possimus!
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Link>
    </Box>
  );
}
