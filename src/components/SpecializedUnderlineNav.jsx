import { UnderlineNav } from '@primer/react/drafts';
import { BookIcon, RepoIcon, ProjectIcon } from '@primer/octicons-react';

  /**
   * SpecializedUnderlineNav component to render primer-react's UnderlineNav component in Github style.
   * @returns 
   */

export default function SpecializedUnderlineNav(props) {
  return (
     <UnderlineNav aria-label="Repository" sx={{ mb:3 }}>
        <UnderlineNav.Item icon={BookIcon}>Overview</UnderlineNav.Item>
        <UnderlineNav.Item icon={RepoIcon} counter={props.size} aria-current="page">Repositories</UnderlineNav.Item>
        <UnderlineNav.Item icon={ProjectIcon}>Projects</UnderlineNav.Item>
      </UnderlineNav>

  );
}