import { ReactElement } from "react";
import Head from "next/head";

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Hayley Bloch - Desktop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
        <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
          <h1>{"Hayley Bloch's Portfolio"}</h1>
          <p>Desktop application loading...</p>
        </div>
      </main>
    </>
  );
}
