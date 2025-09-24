import type { Metadata } from "next";
import "./globals.css";
import myDetail from "./myDetail";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: myDetail.name,
  description: myDetail.desc
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
