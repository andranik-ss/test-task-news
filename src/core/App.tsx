import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@mui/material'
import { News, Bookmarks } from '../features/news';
import { NotFound, Layout } from 'components';
import { theme } from './theme';

const ROUTES = {
  HOME: '/',
  NEWS: '/news',
  BOOKMARKS: '/bookmarks',
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Redirect to={ROUTES.NEWS} />
            </Route>
            <Route exact path={ROUTES.NEWS} component={News} />
            <Route exact path={ROUTES.BOOKMARKS} component={Bookmarks} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
