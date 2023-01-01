import { useQuery, gql } from '@apollo/client';

import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
type book = {
  title: string;
  author: string;
};

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

export default function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error || !data) return <ErrorPage />;
  if (loading) return <LoadingPage />;

  const books = data.books;
  return (
    <ul>
      {books &&
        books.map((book: book) => <li key={book.title}>{book.title}</li>)}
    </ul>
  );
}
