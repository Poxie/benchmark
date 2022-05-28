import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

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
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}
export default MyApp
