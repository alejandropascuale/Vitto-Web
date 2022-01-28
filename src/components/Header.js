import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <>
        <AppBar position="fixed" sx={{bgcolor: '#FF4C4C'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography>Vitto Web</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    </>
  )
}
