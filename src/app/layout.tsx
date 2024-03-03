import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/";
import { Toaster } from "sonner";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Thareq Muhammad Azani - Web Developer",
  description:
    "Elevate your online presence with Thareq Muhammad Azani, a seasoned web developer known for innovative solutions. Specializing in creating user-friendly websites that captivate and convert. Explore our portfolio for cutting-edge designs and flawless functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="nMmumpLhU6oMBkvrqzGJEWcvC_btwJ4okjgahmTxBxk"
        />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-b -z-10 from-blue-50 via-[#e3d8fc] to-red-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <Toaster richColors={true} />
        <div className="bg-[#fbe2e3] absolute top-[6rem] -z-10 right-[11rem] h-[31.25rem] rounded-full blur-[10rem] sm:w[68.75]" />
        <div className="bg-[#dbd7fb] absolute top-[1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

export { metadata };
