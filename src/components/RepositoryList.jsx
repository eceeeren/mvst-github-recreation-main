import React, { useState } from 'react';
import RepositoryItem from '../widgets/RepositoryItem';
import { TextInput, Box, Button, Text } from '@primer/react';
import SpecializedSelectPanel from '../widgets/SpecializedSelectPanel';
import { RepoIcon } from '@primer/octicons-react';
import { typeItems, languageItems } from "../data/dropdownItems";

export default function RepositoryList(props) {

  const repos = props.repos;
  const [filterList, setFilterList] = useState(repos);

    const handleSearch = (event) => {

        if (event.target.value === "") {
          setFilterList(repos);
          return;
        }
        const filteredValues = repos.filter(
          (item) =>
            item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
      };

  return (
    <>
    <Box sx={{display: 'flex'}}>
    <Box sx={{pr: 3, flexGrow: 1 }}>
    <TextInput 
    block aria-label="Repository" 
    name="repository" 
    placeholder="Find a repository..." 
    onChange={handleSearch}  />
    </Box>
    <Box sx={{pl: 1}}>
    <SpecializedSelectPanel items={typeItems} />
    </Box>
    <Box sx={{pl: 1}}>
    <SpecializedSelectPanel items={languageItems} />
    </Box>
    <Box sx={{pl: 1}}>
    <Button sx={{backgroundColor: "rgb(45, 164, 58)"}}>
    <Text sx={{fontSize: 1, fontWeight: 'bold', color: "white"}}> 
    <RepoIcon size={16}  /> Add</Text>
    </Button>
    </Box>
    </Box>
    {filterList.map((repo) => (
      <RepositoryItem repo={repo} />
    ))}
    </>
  );
}