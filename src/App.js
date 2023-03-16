import {ThemeProvider, BaseStyles} from '@primer/react'
import Homepage from './components/Homepage';


function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Homepage/>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
