import Header from "@/components/ui/header";
import "./globals.css";
import { inter } from "./ui/fonts";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <NextUIProvider>
                    <Header />
                    {children}
                </NextUIProvider>
            </body>
        </html>
    );
}
