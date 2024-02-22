import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/_components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Stufftodo - The stuff you gotta do",
  description: "Made by Adam",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} mx-auto my-0 flex max-w-7xl flex-col md:pt-16`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
