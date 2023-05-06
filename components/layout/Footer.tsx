import styled from "@emotion/styled";
import Divider from "../common/Divider";
import Text from "../common/Text";

const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  cursor: default;
`;

const Footer = () => {
  return (
    <>
      <Divider />
      <FooterWrapper>
        <Text noPadding>
          Created by Incredible Catfish
        </Text>
      </FooterWrapper>
    </>
  );
}

export default Footer;
