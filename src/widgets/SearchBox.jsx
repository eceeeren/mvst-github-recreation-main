import { TextInput, Box } from '@primer/react';
import React from 'react';
import SpecializedSelectPanel from './SpecializedSelectPanel';

const typeItems = [
    {text: 'All', id: 1},
    {text: 'Public', id: 2},
    {text: 'Private', id: 3},
    {text: 'Sources', id: 4},
    {text: 'Forks', id: 5},
    {text: 'Archived', id: 6},
    {text: 'Mirrors', id: 7},
    {text: 'Templates', id: 7},
  ]  

  const languageItems = [
    {text: 'All', id: 1},
    {text: 'JavaScript', id: 2},
    {text: 'Python', id: 3},
    {text: 'HTML', id: 4},
  ]  


export default function SearchBox() {

  return (
    <Box sx={{display: 'flex'}}>
    <Box sx={{pr: 3, flexGrow: 1 }}>
    <TextInput block aria-label="Repository" name="repository" placeholder="Find a repository..." />
    </Box>
    <Box sx={{pl: 1}}>
    <SpecializedSelectPanel items={typeItems} />
    </Box>
    <Box sx={{pl: 1}}>
    <SpecializedSelectPanel items={languageItems} />
    </Box>
    </Box>
  );
}