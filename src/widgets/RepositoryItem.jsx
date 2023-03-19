import { Pagehead, Text, Link, Box, Label, Button } from '@primer/react';
import { PageHeader } from '@primer/react/drafts'
import { StarIcon } from '@primer/octicons-react';
import colors from '../data/githubLangColors';
import moment from "moment";


export default function RepositoryItem(props) {

  const updated_at = moment(props.repo.updated_at).format("MMM Do, YYYY");

  return (
    <PageHeader>
        <Pagehead sx={{pt: 1, pb: 2}}>
    <Box sx={{display: 'flex'}}>
        <Box sx={{pr: 3}}> 
        <Link href="https://github.com">
        <PageHeader.Title>{props.repo.name}</PageHeader.Title>
        </Link>
        </Box> 
        <Box sx={{pr: 3, mt: 1, mr: "auto" }} >
            {props.private ? 
            (<Label variant="secondary">Private</Label>) : 
            (<Label variant="secondary">Public</Label>)
            }
        </Box>
        <Box sx={{ mt: 1}}>
        <Button>
        <StarIcon size={16}/> 
        <Text sx={{fontSize: 1, fontWeight: 'bold'}}> Star</Text>
        </Button>
        </Box>
    </Box>
    <PageHeader.Description>
        <Text sx={{fontSize: 1, color: 'fg.muted'}}>
            {props.repo.fork === true ? "Forked from " + props.repo.name : null }
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
        bg={colors[props.repo.language]}
        borderColor={colors[props.repo.language]}
        width={10}
        height={10}
        borderRadius={10}
        /> 
        <Text as="p" sx={{fontSize: 1, color: 'fg.muted', mr:5 }}>
        {props.repo.language} 
        </Text>
        <Text sx={{fontSize: 1, color: 'fg.muted'}}>
        updated on {updated_at} 
        </Text>
    </PageHeader.Description>
    </Pagehead>
    </PageHeader>
  );
}