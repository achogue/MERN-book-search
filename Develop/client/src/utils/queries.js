import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        _id
      }
    }
  }
`;


export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      authors
      title
      description
      image
    }
  }
`;

export const QUERY_SINGLE_BOOK = gql`
  query getSingleBook($bookId: ID!) {
    book(bookId: $bookId) {
      _id
      authors
      title
      description
      image
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        _id
      }
    }
  }
`;
