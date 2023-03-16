import { BookIcon, RepoIcon, ProjectIcon } from '@primer/octicons-react';
import { PageLayout, CounterLabel } from '@primer/react';
import { UnderlineNav } from '@primer/react/drafts'
import ProfileCard from './ProfileCard';
import RepositoryList from './RepositoryList'

export default function Homepage() {
  return (
    <PageLayout padding="none" rowGap="none" columnGap="none">
    <PageLayout.Pane position="start" hidden={{narrow: true}}>
        <ProfileCard/>
    </PageLayout.Pane>
    <PageLayout.Content>
    <UnderlineNav aria-label="Repository" sx={{ mb:3 }}>
        <UnderlineNav.Item icon={BookIcon}>Overview</UnderlineNav.Item>
        <UnderlineNav.Item icon={RepoIcon}>Repositories <CounterLabel scheme="primary">13</CounterLabel></UnderlineNav.Item>
        <UnderlineNav.Item icon={ProjectIcon}>Projects</UnderlineNav.Item>
      </UnderlineNav>
        <RepositoryList />
    </PageLayout.Content>
    </PageLayout>
  );
}