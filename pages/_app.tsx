import Head from "next/head";
import "antd/dist/antd.css";

const metaList = ["description", "keywords", "title", "name"];

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <Head>
        <title>Hsieh Min Chien personal demo projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {metaList.map(meta => (
          <meta
            key={meta}
            name={meta}
            property={`og:${meta}`}
            content={`Hsieh Min Chien personal demo projects with Typescript, react.js, stylus, Next.js ... ect`}
          />
        ))}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
