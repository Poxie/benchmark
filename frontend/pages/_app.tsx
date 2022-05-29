import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, useQuery, useLazyQuery } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { Provider, useDispatch } from 'react-redux';
import { AppDispatch, store } from '../redux/store';
import { useEffect } from 'react';
import { setUser } from '../redux/user/actions';
import { GET_ME } from '../graphql/queries';

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link)
})

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AuthLayer>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AuthLayer>
      </ApolloProvider>
    </Provider>
  )
}
export default MyApp;

const AuthLayer: React.FC<{children: any}> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [getMe] = useLazyQuery(GET_ME);

  // Fetching and storing logged in user
  useEffect(() => {
    getMe().then(({ data }) => {
      const user = data.getMe;

      // If logged in user found, set user in redux store
      if(user) {
        dispatch(setUser(user));
      }
    })
  }, []);

  return children
}