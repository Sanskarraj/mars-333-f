import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mars Youtube Downloader - Download Youtube Video & Shorts Free",
    template: "%s Mars Youtube Downloader - Download Youtube Video & Shorts Free"
  },
  description: "Mars Youtube Downloader is a Free and Intuitive Tool that allows you to Quickly Download Videos and Shorts from Youtube . Download Videos in various Resolutions. Our downloader supports a wide range of video qualities including MP4, WEBM, SDR, HDR, XDR, QuadHD, 4K also!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
