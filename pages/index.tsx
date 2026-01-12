import Head from "next/head";
import dynamic from "next/dynamic";

const OperatingSystem = dynamic(
  () => import("@/components/OperatingSystem").then(mod => mod.OperatingSystem),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Hayley Bloch - Desktop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Home_main__VkIEL">
        <OperatingSystem />
      </main>
    </>
  );
}
