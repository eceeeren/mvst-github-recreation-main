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
        <PageHeader.Title>{props.repo.name}</PageHeader.Title>
        </Link>
        </Box> 
        <Box sx={{pr: 3, mt: 1 }}>
            {props.private ? 
            (<Label variant="secondary">Private</Label>) : 
            (<Label variant="secondary">Public</Label>)
            }
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
        {props.repo.description}
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
        {props.repo.language} 
        </Text>
        <Text sx={{fontSize: 1, color: 'fg.muted'}}>
        updated at {props.repo.updated_at} 
        </Text>
    </PageHeader.Description>
    </Pagehead>
    </PageHeader>
  );
}