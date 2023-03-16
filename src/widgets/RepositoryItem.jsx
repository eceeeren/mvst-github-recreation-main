import { Pagehead, Text, Link, Box, Label, Button } from '@primer/react';
import { PageHeader } from '@primer/react/drafts'
import { StarIcon } from '@primer/octicons-react';


export default function RepositoryItem(props) {

  return (
    <PageHeader>
        <Pagehead>
    <PageHeader.TitleArea>
    <Box sx={{display: 'flex'}}>
        <Box sx={{pr: 3}}> 
        <Link href="https://github.com">
        <PageHeader.Title>add-pageheader-docs</PageHeader.Title>
        </Link>
        </Box> 
        <Box sx={{pr: 3, mt: 1 }}>
        <Label variant="secondary">Public</Label>
        </Box>
        <Box sx={{pr: 3, mt: 1 }}>
        <Button>
        <StarIcon size={16}/> 
        <Text sx={{fontSize: 1, fontWeight: 'bold'}}> Star</Text>
        </Button>
        </Box>
    </Box>
    </PageHeader.TitleArea>
    <PageHeader.Description>
        <Text sx={{fontSize: 1, color: 'fg.muted'}}>
        Forked from facebook/react
        </Text>
    </PageHeader.Description>
    <PageHeader.Description>
        <Text sx={{fontSize: 2, color: 'fg.muted'}}>
        Some description 
        </Text>
    </PageHeader.Description>
    <PageHeader.Description>
    <Box
        borderWidth="1px"
        borderStyle="solid"
        bg={"#ffd78e"}
        borderColor={"#ffd78e"}
        width={10}
        height={10}
        borderRadius={10}
        /> 
        <Text as="p" sx={{fontSize: 1, color: 'fg.muted', mr:5 }}>
        Typescript 
        </Text>
        <Text sx={{fontSize: 1, color: 'fg.muted'}}>
        updated 3 days ago
        </Text>
    </PageHeader.Description>
    </Pagehead>
    </PageHeader>
  );
}