import {PageLayout} from '@primer/react';
import CustomizedHeader from './CustomizedHeader';

export default function Homepage() {
  return (
    <PageLayout>
    <PageLayout.Header>
        <CustomizedHeader/>
    </PageLayout.Header>
    <PageLayout.Content>
        Hello
    </PageLayout.Content>
    <PageLayout.Pane position="start" hidden={{narrow: true}}>
        Hello
    </PageLayout.Pane>
    <PageLayout.Footer>
        Hello
    </PageLayout.Footer>
    </PageLayout>
  );
}