import Head from "next/head";
import GlobalStyles from "styles/GlobalStyles";
import siteMetadata from "shares/siteMetadata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

const Home = ({ Component, pageProps }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Inter",
            fontFamilyCode: "Inter",
          },
        }}
      >
        <MyApp Component={Component} pageProps={pageProps} />
      </ConfigProvider>
    </BrowserRouter>
  );
};

const Apps = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
        />
        <link rel="icon" href={siteMetadata.siteFavicon} />
        <link rel="apple-touch-icon" href={siteMetadata.siteFavicon} />

        <title>{siteMetadata.siteName}</title>
        <meta name="title" content={siteMetadata.siteName} />
        <meta name="description" content={siteMetadata.siteDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:title" content={siteMetadata.siteName} />
        <meta
          property="og:description"
          content={siteMetadata.siteDescription}
        />
        <meta property="og:image" content={siteMetadata.siteThumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteMetadata.siteUrl} />
        <meta property="twitter:title" content={siteMetadata.siteName} />
        <meta
          property="twitter:description"
          content={siteMetadata.siteDescription}
        />
        <meta property="twitter:image" content={siteMetadata.siteThumbnail} />
      </Head>
      <Home Component={Component} pageProps={pageProps} />
    </>
  );
};
export default Apps;
