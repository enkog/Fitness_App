import React from 'react';
import { Box, Button, Stack, Typography, TextField } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="2px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField sx={{
          input: {
            border: 'none',
            borderRadius: '4px', 
            fontWeight: '700'
          },
          width: {lg: '800px', xs: '350px'},
          backgroundColor: '#fff',
          borderRadius: '40px'
          }} 
          height='76px' value='' placeholder='Search Exercises' type='text' onChange={(e) => {}} />
          <Button className='search-btn' sx={{
            backgroundColor: '#ff2625', 
            color: '#fff', 
            textTransform: 'none', 
            width: {lg: '175px', xs: '80px'}, fontSize: {lg: '20px', xs: '14px'}, height: '56px',
            position: 'absolute',
            right: '0'
          }}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises