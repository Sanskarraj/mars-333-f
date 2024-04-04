import { Inter } from "next/font/google";
import PrivacyPage from "../components/Privacysection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Privacy-policy - Mars Youtube Downloader",
        template: "Mars Youtube Downloader - Download Youtube Video & Shorts Free"
    },
    description: "This Privacy Policy explains how we collect, use and share your personal information while you use the Service. By using the Service you agree to the collection and use of your personal information in accordance with the Privacy Policy. This Privacy Policy forms part of our Terms of Service. We will review and may update this Privacy Policy from time to time. Any changes to this Privacy Policy will become effective when we post the revised Privacy Policy on this page."

}
export default function RootLayout({ children }) {
    return (
        <PrivacyPage />
    );
}
