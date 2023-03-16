import { Avatar, Heading, Text, Button } from '@primer/react';
import { PeopleIcon, StarIcon } from '@primer/octicons-react';

export default function ProfileCard() {
  return (
    <>
    <Avatar src="https://avatars.githubusercontent.com/primer" size={260} />

    <Heading sx={{fontSize: 5, mt: 4}}>Ece Eren</Heading>
    <Text as="p">eceeeren</Text>
    <Button size="large" sx={{ mb: 4}}>Follow</Button>
    <PeopleIcon size={16} /> 17 following ∙ 67 following ∙ <StarIcon size={16} /> 24
    </>
  );
}