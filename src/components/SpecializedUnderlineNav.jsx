import { UnderlineNav } from '@primer/react/drafts';
import { BookIcon, RepoIcon, ProjectIcon } from '@primer/octicons-react';
import { CounterLabel } from '@primer/react';



export default function SpecializedUnderlineNav(props) {
  return (
     <UnderlineNav aria-label="Repository" sx={{ mb:3 }}>
        <UnderlineNav.Item icon={BookIcon}>Overview</UnderlineNav.Item>
        <UnderlineNav.Item icon={RepoIcon}>Repositories <CounterLabel scheme="primary">{props.size}</CounterLabel></UnderlineNav.Item>
        <UnderlineNav.Item icon={ProjectIcon}>Projects</UnderlineNav.Item>
      </UnderlineNav>

  );
}