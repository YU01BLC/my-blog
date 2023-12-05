import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogImage from '../../public/assets/blogIcon.png';

export default function Header() {
  return (
    <AppBar position='relative'>
      <Toolbar sx={{ bgcolor: '#37474f', borderBottom: 'solid' }}>
        <Image src={blogImage} alt='blog icon' style={{ width: '32px', height: '32px', marginRight: '1em' }} />
        <Box
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant='h6' noWrap>
            <Link href='/'>My Blog</Link>
          </Typography>
          <Typography variant='h6' color='inherit' noWrap>
            <Button variant='contained' color='warning'>
              <Link href='/articles'>記事を書く</Link>
            </Button>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
