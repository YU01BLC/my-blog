import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{ position: 'absolute', bottom: 0, width: '100%', borderTop: 'solid', padding: '1em' }}>
      <Typography>@2023 shincode</Typography>
    </Box>
  );
}
