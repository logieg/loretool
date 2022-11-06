import styled from "@emotion/styled";

const StyledDivider = styled.div`
  width: 85%;
  height: 1px;
  margin: auto;
  background-color: rgba(127,127,127,0.3);
`;

/** Simple horizontal divider line */
const Divider = () => <StyledDivider />;

export default Divider;
