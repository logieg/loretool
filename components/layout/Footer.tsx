import styled from "@emotion/styled";
import Divider from "../common/Divider";

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
        Created by Incredible Catfish
      </FooterWrapper>
    </>
  );
}

export default Footer;
