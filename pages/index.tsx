import React, { useState } from "react";

import Head from "next/head";
import { NextSeo } from "next-seo";
import { WhatWillWeBePage } from "../components/WhatWillWeBePage";
import { WorkingOnItPage } from "../components/WorkingOnItPage";

const SEO = {
  title: "Xiler Network | Work in progress",
  description:
    "Xiler is a platform which offers the best services for developers! This is currently under development, you can join our discord for the latest news! ",
};

const UnderConstructionPage: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={{
          url: "https://www.xiler.net",
          title: SEO.title,
          description: SEO.description,
          site_name: "Xiler Network",
          images: [
            {
              url: "http://xiler.net/favicon.ico",
            },
          ],
        }}
        twitter={{
          handle: "@XilerNetwork",
          site: "@XilerNetwork",
          cardType: "app",
        }}
      />
      <PageContent />
    </>
  );
};

const PageContent: React.FC = () => {
  const [showFirstScreen, setShowFirstScreen] = useState(true);

  return (
    <>
      <WorkingOnItPage show={showFirstScreen} setShow={setShowFirstScreen} />
      <WhatWillWeBePage show={!showFirstScreen} setShow={setShowFirstScreen} />
    </>
  );
};

export default UnderConstructionPage;
