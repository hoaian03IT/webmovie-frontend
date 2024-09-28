import "./globals.css";
import { inter } from "./fonts";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased dark text-foreground bg-background`}>
                <NextUIProvider>{children}</NextUIProvider>
            </body>
        </html>
    );
}
