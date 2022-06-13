import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, useQuery, useLazyQuery } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { Provider, useDispatch, useStore } from 'react-redux';
import { AppDispatch, wrapper } from '../redux/store';
import { ReactElement, ReactNode, useEffect } from 'react';
import { setUser, setUserLoading } from '../redux/user/actions';
import { GET_ME } from '../graphql/queries';
import { PopupProvider } from '../contexts/PopupProvider';
import { NextPage } from 'next';

const errorLink = onError(({ graphQLErrors }) => {
  if(graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(`GraphQL error: ${message}`)
    })
  }
})
const authLink = setContext((_, { headers }) => {
  if(typeof window === 'undefined') return { headers };
  const token = window.localStorage.token;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const link = from([
  errorLink,
  new HttpLink({ uri: process.env.NEXT_PUBLIC_API_ENDPOINT }),
])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link)
})

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const store = useStore();
  const getLayout = Component.getLayout ?? ((page) => page);

  // Setting user theme
  useEffect(() => {
    document.body.classList.add(localStorage.getItem('theme') || 'light');
  }, []);
  
  return(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PopupProvider>
          <AuthLayer>
            <Navbar />
            {getLayout(<Component {...pageProps} />)}
            <Footer />
          </AuthLayer>
        </PopupProvider>
      </ApolloProvider>
    </Provider>
  )
}
export default wrapper.withRedux(MyApp);

const AuthLayer: React.FC<{children: any}> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [getMe] = useLazyQuery(GET_ME);

  // Fetching and storing logged in user
  useEffect(() => {
    getMe().then(({ data, error }) => {
      const user = data?.getMe;

      // If logged in user found, set user in redux store
      if(user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUserLoading(false));
      }
    })
  }, []);

  return children
}