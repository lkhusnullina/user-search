import { GlobalStyles } from './App.styles';
import { AppRoutes } from './routes';
import * as S from './App.styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Container>
        <AppRoutes />
      </S.Container>
    </>
  );
}

export default App;
