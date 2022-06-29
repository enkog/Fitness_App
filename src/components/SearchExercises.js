import React, { useEffect, useState } from 'react';
import {
  Box, Button, Stack, Typography, TextField,
} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searched = exercisesData.filter((exer) => exer.name.toLowerCase().includes(search)
        || exer.target.toLowerCase().includes(search)
        || exer.equipment.toLowerCase().includes(search)
        || exer.bodyPart.toLowerCase().includes(search));

      setSearch('');
      setExercises(searched);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="2px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You
        {' '}
        <br />
        {' '}
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              border: 'none',
              borderRadius: '4px',
              fontWeight: '700',
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => { setSearch(e.target.value.toLowerCase()); }}
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
