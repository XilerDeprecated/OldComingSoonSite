import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";

const SEO = {
  title: "Xiler Network | Work in progress",
  description:
    "Xiler is a platform which offers the best services for developers! This is currently under development, you can join our discord for the latest news! ",
};

const UnderConstructionPage = () => {
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
        }}
        twitter={{
          handle: "@XilerNetwork",
          site: "@XilerNetwork",
          cardType: "app",
        }}
      />
      <div className="grid w-full h-screen">
        <div className="grid gap-y-14 place-self-center justify-items-center max-w-80per">
          <div className="grid text-center gap-y-4 justify-items-center">
            <h1 className="text-5xl font-bold">We're working on it!</h1>
            <p className="text-xl font-normal">
              Thank you for being patient. We’ll be there soon!
            </p>
          </div>

          <div className="flex justify-between w-full sm:max-w-80per">
            <a href="https://dc.xiler.net">
              <Image
                src="/assets/discord.icon.svg"
                alt=""
                width={50}
                height={50}
              />{" "}
            </a>
            <a href="https://twitter.com/XilerNetwork">
              <Image
                src="/assets/twitter.icon.svg"
                alt=""
                width={50}
                height={50}
              />{" "}
            </a>
            <a href="https://www.facebook.com/XilerNet">
              <Image
                src="/assets/facebook.icon.svg"
                alt=""
                width={50}
                height={50}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstructionPage;
