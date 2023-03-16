import { BookIcon, RepoIcon, ProjectIcon } from '@primer/octicons-react';
import { PageLayout } from '@primer/react';
import { UnderlineNav } from '@primer/react/drafts'
import CustomizedHeader from './CustomizedHeader';
import ProfileCard from './ProfileCard';

export default function Homepage() {
  return (
    <PageLayout>
    <PageLayout.Header>
        <CustomizedHeader/>
        <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item icon={BookIcon} >Overview</UnderlineNav.Item>
        <UnderlineNav.Item icon={RepoIcon} aria-current="page">Repositories</UnderlineNav.Item>
        <UnderlineNav.Item icon={ProjectIcon}>Projects</UnderlineNav.Item>
      </UnderlineNav>
    </PageLayout.Header>
    <PageLayout.Pane position="start" hidden={{narrow: true}}>
        <ProfileCard/>
    </PageLayout.Pane>
    <PageLayout.Content>
        A
    </PageLayout.Content>
    </PageLayout>
  );
}