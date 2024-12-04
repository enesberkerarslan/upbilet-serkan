"use client";

import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// Stil için Styled Components
const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  padding: '4px 8px',
  maxWidth: '300px',
  width: '100%',
});

const IconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  
});

const SearchField = styled(InputBase)({
  marginLeft: '8px',
  width: '100%',
  
});

const MySearchComponent = () => {
  return (
    <Container>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchField
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Container>
  );
};

export default MySearchComponent;
