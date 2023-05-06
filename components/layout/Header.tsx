import styled from "@emotion/styled";
import Head from "next/head";
import Text from "../common/Text";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0px;
  width: calc(100% - 16px * 2);
  padding: 12px 16px;
  background-color: lightgrey;
  cursor: default;
  z-index: 100;
`;

const Header = () => {
  return (
    <>
      <Head>
        <title>Loretool</title>
        <meta name="description" content="Minimalist info management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderWrapper>
        <Text variant='h2' noPadding>
          Loretool
        </Text>
      </HeaderWrapper>
    </>
  );
}

export default Header;
