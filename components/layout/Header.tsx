import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>DataTome</title>
        <meta name="description" content="Minimalist data management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div style={{ width: '100%', height: '60px', backgroundColor: 'grey' }}>
          DataTome
        </div>
      </header>
    </>
  );
}

export default Header;
