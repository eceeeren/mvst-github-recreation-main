import React from 'react';
import RepositoryItem from '../widgets/RepositoryItem';
import SearchBox from '../widgets/SearchBox';

export default function RepositoryList(props) {


  return (
    <>
    <SearchBox/>
    {props.repos.map((repo) => (
      <RepositoryItem repo={repo} />
    ))}
    </>
  );
}