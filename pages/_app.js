// import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <a className="nav-item" href="/">
          Home
        </a>
        <a className="nav-item" href="/poems/1">
          Contact
        </a>
        <a className="nav-item" href="/poems/2">
          About
        </a>{" "}
        {/** Testing 404 page*/}
      </nav>
      <Component {...pageProps} />

      <style jsx>
        {`
          .nav-item {
            color: blue;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;

// commented code
