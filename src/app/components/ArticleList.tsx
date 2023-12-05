import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';

export default function ArticleList() {
  return (
    <Box data-testid='article-list'>
      <Card>
        <CardHeader title='記事タイトル' subheader='2023/12/1' />
        <CardContent>
          <Link href='/hoge'>
            <CardMedia
              component='img'
              width='100%'
              height='100%'
              image='https://source.unsplash.com/collection/1346951/1000x500?sig=2'
              alt='Paella dish'
            />
          </Link>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ paddingTop: '1em' }}
            data-testid='article-list--text'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod maiores totam aperiam necessitatibus
            est, exercitationem architecto quibusdam accusamus maxime asperiores eaque adipisci itaque nemo, minus odio,
            alias dolor possimus!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
