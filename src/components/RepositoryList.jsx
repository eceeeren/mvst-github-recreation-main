import React, { useState, useEffect } from 'react';
import RepositoryItem from '../widgets/RepositoryItem';
import { TextInput, Box, Button, Text, Pagehead } from '@primer/react';
import SpecializedSelectPanel from '../widgets/SpecializedSelectPanel';
import { RepoIcon } from '@primer/octicons-react';
import { typeItems, languageItems } from "../data/dropdownItems";

export default function RepositoryList(props) {

  const [repos, setRepos] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    try {
      const repos = props.repos.sort((a, b) => (b.updated_at > a.updated_at) ? 1 : -1)
      setRepos(repos);
      setFilterList(repos);
    } catch (err) {
      console.log(err);
    }
  }, [props.repos]);

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
    <Pagehead sx={{pt: 0, pb: 3}}>
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
    </Pagehead>
    {filterList.map((repo) => (
      <RepositoryItem key={repo.name} repo={repo} />
    ))}
    </>
  );
}