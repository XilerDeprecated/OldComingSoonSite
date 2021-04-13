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
      <div
        className={
          "fixed grid justify-center w-screen h-screen overflow-hidden transition-colors duration-500 bg-dark-500" +
          (!showFirstScreen ? " md:bg-secondary-500" : "")
        }
      >
        <svg
          className="self-center mt-24 fill-current text-dark-500"
          width="790"
          height="598"
          viewBox="0 0 790 598"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M710.694 86.9057C723.694 -58.5942 300.669 15.0992 119.169 48.5991C16.1695 74.7658 -33 126.5 25.6939 188.5C84.3877 250.5 25.6939 293.5 25.6939 410.406C25.6939 527.312 65.6694 700.099 335.669 519.599C518.453 397.405 646.083 592.923 746.169 467.099C868.669 313.099 692.812 287.049 710.694 86.9057Z" />
        </svg>
      </div>
      <WorkingOnItPage show={showFirstScreen} setShow={setShowFirstScreen} />
      <WhatWillWeBePage show={!showFirstScreen} setShow={setShowFirstScreen} />
    </>
  );
};

export default UnderConstructionPage;
