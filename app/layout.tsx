import "./globals.css";
import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import Nav from "./components/global/Nav";
import { AppContextProvider } from "./contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });
const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={josefin.className + " pt-[2.5rem]"}>
                <AppContextProvider>
                    <Nav />
                    {children}
                </AppContextProvider>
            </body>
        </html>
    );
}
