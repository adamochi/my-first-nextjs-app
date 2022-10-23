import React from "react";
import Head from "next/head";

export default function Seo({ title }) {
  const heaad = `${title} | Next Movies`;

  return (
    <Head>
      <title>{heaad}</title>
    </Head>
  );
}
