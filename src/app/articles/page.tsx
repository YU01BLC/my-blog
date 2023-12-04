import React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <Box>
      <Card>
        <CardHeader title='記事タイトル(dummy)' subheader='2023/12/1' />
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
          <Typography variant='body1' color='text.secondary' sx={{ paddingTop: '1em' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod maiores totam aperiam necessitatibus
            est, exercitationem architecto quibusdam accusamus maxime asperiores eaque adipisci itaque nemo, minus odio,
            alias dolor possimus!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
