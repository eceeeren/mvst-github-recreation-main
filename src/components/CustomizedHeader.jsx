import { Header } from '@primer/react';


export default function CustomizedHeader() {
  return (
    <Header sx={{mb: 3}}>
  <Header.Item>
    <Header.Link href="#" fontSize={2}>
      <span>GitHub</span>
    </Header.Link>
  </Header.Item>
  <Header.Item full>Menu</Header.Item>
  <Header.Item mr={0}>
  </Header.Item>
</Header>
  );
}