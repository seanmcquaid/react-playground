import styled from 'styled-components';
import H1 from './components/H1';
import Virtualized from './containers/Virtualized';

const App = () => (
  <PageContainer>
    <Header>
      <H1>Joke Categories</H1>
    </Header>
    <Main>
      <Virtualized />
    </Main>
  </PageContainer>
);

export default App;

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main`
  height: 300px;
`;
