import { Inter } from "next/font/google";
import TermsPage from "../components/Termssection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Terms of Service - Mars Youtube Downloader",
        template: "Mars Youtube Downloader - Download Youtube Video & Shorts Free"
    },
    description: "This document states the terms and conditions (“Terms”) upon which marsyoutube.com (“we” or “us”) will provide service to you on its website, applications and related services (collectively, the “Service”). As used in this document, the terms “you” or “your” refers to you, any entity you represent, your or its representatives, successors, assigns and affiliates, and any of your or their devices."

}
export default function RootLayout({ children }) {
    return (
        <TermsPage />
    );
}
