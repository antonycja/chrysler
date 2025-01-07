import { Manrope, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const rexton = localFont({
  display: 'swap',
  variable: '--font-rexton',
  src: [
    {
      path: './fonts/Rexton Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Rexton Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Rexton Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Rexton Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Rexton Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Rexton Extra Bold.otf',
      weight: '900',  // Changed from 800 to 900
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: "E-Ovation",
  description: "E-Ovation is a dynamic IT and software solutions provider specializing in digital transformation for businesses. We deliver customized enterprise software, cloud solutions, and IT infrastructure services that drive operational efficiency and growth. Our team combines technical expertise with industry best practices to help organizations navigate the evolving digital landscape through innovative, scalable, and secure solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rexton.variable} ${manrope.variable} ${poppins.variable}`}>
        {/* <body> */}
        <Navbar />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
