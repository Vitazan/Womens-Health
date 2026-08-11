import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

const SITE_TITLE = "Advances in Women's Health Symposium 2026";
const SITE_DESCRIPTION =
  "Now in its 13th year, the Advances in Women's Health Symposium is a one-day virtual continuing education event on October 23, 2026, featuring leading naturopathic doctors and integrative medicine experts. Sponsored by NFH and Vitazan Professional.";

export const metadata: Metadata = {
  metadataBase: new URL("https://advancesinwomenshealth.ca"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: "Vitazan Professional and NFH",
  keywords: [
    "Women's Health",
    "Advances in Women's Health Symposium",
    "Naturopathic Doctors",
    "Continuing Education",
    "CE Credits",
    "Perimenopause",
    "Eating Disorders",
    "Naturopathic Gastroenterology",
    "Vitazan Professional",
    "NFH",
  ],
  authors: [{ name: "Vitazan Professional" }, { name: "NFH" }],
  creator: "Vitazan Professional and NFH",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://advancesinwomenshealth.ca/",
    siteName: SITE_TITLE,
    images: [
      {
        url: "/herobanner4.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/herobanner4.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}



// import './globals.css'
// import { Inter } from 'next/font/google'
// import { ThemeProvider } from 'next-themes'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'My Site',
//   description: 'My description',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
//           <div className="flex flex-col min-h-screen">
//             {children}
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }
