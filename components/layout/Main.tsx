import styled from "@emotion/styled";

interface MainProps {
  children: React.ReactNode,
}

const MainWrapper = styled.div`
  padding: 16px;
`;

const Main = ({ children }: MainProps) => {
  return (
    <main>
      <MainWrapper>
        {children}
      </MainWrapper>
    </main>
  );
}

export default Main;
