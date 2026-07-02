// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { ThemeProvider } from "next-themes"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Integrative Oncology Webinar Series | New Roots Herbal",
//   description:
//     "Join our expert-led webinar series on integrative approaches to oncology, featuring leading naturopathic doctors and researchers.",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light">
//           <div className="flex flex-col min-h-screen">
//             <Header />
//             <div className="flex-grow">{children}</div>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }




//new


import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Women's Health",
  description:
    "Join our expert-led webinar series on integrative approaches to oncology, featuring leading naturopathic doctors and researchers.",
  generator: "Vitazan Professional and NFH",
  keywords: [
    "Women's Health",
    "Integrative Oncology",
    "Naturopathic Doctors",
    "Webinar Series",
    "Vitazan Professional",
    "NFH",
  ],
  authors: [{ name: "Vitazan Professional" }, { name: "NFH" }],
  creator: "Vitazan Professional and NFH",
  openGraph: {
    title: "Women's Health",
    description:
      "Join our expert-led webinar series on integrative approaches to oncology, featuring leading naturopathic doctors and researchers.",
    url: "https://womans-health-dr-brown.vercel.app/",
    siteName: "Women's Health",
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
    title: "Women's Health",
    description:
      "Join our expert-led webinar series on integrative approaches to oncology, featuring leading naturopathic doctors and researchers.",
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
