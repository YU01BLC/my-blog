import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box sx={{ position: 'absolute', bottom: 0, width: '100%', borderTop: 'solid', padding: '1em' }}>
      <Typography>@2023 shincode</Typography>
    </Box>
  );
}
