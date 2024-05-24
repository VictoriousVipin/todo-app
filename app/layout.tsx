import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import TodoContextProvider from "./context/TodoContext";
import "./styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VictoriousVipin - Todo App",
  description: "Todo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <TodoContextProvider>{children}</TodoContextProvider>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
