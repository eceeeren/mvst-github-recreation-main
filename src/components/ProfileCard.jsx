import { Avatar, Heading, Text, Button, Box, Pagehead } from '@primer/react';
import { PeopleIcon, StarIcon, MailIcon } from '@primer/octicons-react';

export default function ProfileCard() {
  return (
    <>
    <Pagehead sx={{pb: 0, mb: 2}}>
    <Avatar src="https://avatars.githubusercontent.com/primer" size={260} />

    <Heading sx={{fontSize: 5, mt: 4}}>Ece Eren</Heading>
    <Text sx={{fontSize: 2, color: 'fg.muted'}}>eceeeren</Text>
    <Box sx={{pr: 3, display: 'flex', flexGrow: 1 }}>
    <Button block size="large" sx={{ mb: 4, mt: 2 }}>Follow</Button>
    </Box>
    <PeopleIcon size={16} /> 17 following ∙ 67 following ∙ <StarIcon size={16} /> 24
    <Text as="p"><MailIcon size={16} /> ece.eren@tum.de</Text>
    </Pagehead>
    <Heading sx={{fontSize: 3, mb: 2}}>Organizations</Heading>
    <Box sx={{pr: 3, display: 'flex' }}>
    <Avatar sx={{mr: 1}} square src="https://avatars.githubusercontent.com/primer" />
    <Avatar square src="https://avatars.githubusercontent.com/primer" />
    </Box>
    </>
  );
}