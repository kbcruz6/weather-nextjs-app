import Head from "next/head";
import Image from "next/image";
import Search from "../components/Search";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather - by KBcruz</title>
        <meta name="Weather app" content="Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*//! Overlay  */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/25 -z-10" />

      {/*//! Background Image  */}
      <Image
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=903&q=80"
        fill
        className="object-cover -z-20 h-screen w-full"
        alt="bg"
      />

      {/*//! Search & Weather  */}
      <Search />
    </div>
  );
}

//? https://weather-agustincruz.vercel.app/
//? weather app website
