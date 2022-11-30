import Head from 'next/head'
import styledComponent from 'styled-components';
import { styled } from '@linaria/react';

const Header = styledComponent.div`
  height: 100vh;
  width: 100%;
  background-color: tomato;
`;

const Body = styled.div`
  background-color: yellow;
  height: 400px;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>
        <Header>
            То что у нас находится во-вью порте мы будем оборачивать в styled-components
        </Header>
        <Body>
            А это Тело которое не будет находится во вью-порте его оборачивать будет в linaria
        </Body>
    </>
  )
}
