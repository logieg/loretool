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
        <title>DataTome</title>
        <meta name="description" content="Minimalist data management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderWrapper>
        <Text variant='h2' noPadding>
          DataTome
        </Text>
      </HeaderWrapper>
    </>
  );
}

export default Header;
