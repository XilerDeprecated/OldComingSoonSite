import { Props } from "./types";
import React from "react";

export const WhatWillWeBePage: React.FC<Props> = ({ show, setShow }) => {
  return (
    <div
      className={
        "absolute grid w-full h-screen grid-rows-about-layout transition-top duration-500 ease-out " +
        (show ? "top-0" : "top-full")
      }
    >
      <div
        className={
          "m-auto my-3 transform rotate-180 cursor-pointer fill-current text-primary-500 transition " +
          (show ? "opacity-100" : "opacity-0")
        }
        onClick={() => setShow(true)}
      >
        <svg
          className="transition fill-current hover:text-accent-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.43902 10.248C5.34302 10.1399 5.28032 10.0064 5.25845 9.86345C5.23658 9.72054 5.25648 9.57436 5.31575 9.4425C5.37503 9.31064 5.47115 9.19872 5.59255 9.12021C5.71395 9.04171 5.85545 8.99996 6.00002 9H18C18.1446 8.99996 18.2861 9.04171 18.4075 9.12021C18.5289 9.19872 18.625 9.31064 18.6843 9.4425C18.7436 9.57436 18.7635 9.72054 18.7416 9.86345C18.7197 10.0064 18.657 10.1399 18.561 10.248L12.561 16.998C12.4906 17.0773 12.4043 17.1408 12.3076 17.1843C12.2109 17.2277 12.106 17.2502 12 17.2502C11.894 17.2502 11.7892 17.2277 11.6925 17.1843C11.5958 17.1408 11.5094 17.0773 11.439 16.998L5.43902 10.248Z" />
          <path d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V3ZM22.5 3C22.5 2.60218 22.342 2.22064 22.0607 1.93934C21.7794 1.65804 21.3978 1.5 21 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V3Z" />
        </svg>
      </div>
      <div className="grid text-center gap-y-14 place-self-center justify-items-center max-w-4/5 md:max-w-3/5">
        <h1 className="text-5xl font-bold">What will Xiler be?</h1>
        <div className="grid gap-y-7 place-self-center justify-items-center">
          <p className="text-xl font-normal lg:max-w-3/5 md:max-w-4/5">
            We are currently planning to make a platform which offers{" "}
            <span className="text-accent-500">
              the best services for developers
            </span>{" "}
            ! But to do that and make it all extremely scalable, we need to set
            up our infrastructure first!
          </p>
          <p className="text-xl font-normal lg:max-w-3/5 md:max-w-4/5">
            If you want to get updated with the latest news we recommend{" "}
            <a
              href="https://dc.xiler.net"
              className="underline text-accent-500"
              target="_blanc"
            >
              joining our discord
            </a>{" "}
            server!
          </p>
        </div>
      </div>
    </div>
  );
};
