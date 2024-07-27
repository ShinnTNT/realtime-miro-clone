import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import ModalProvider from "@/providers/modal-provider";
import { Suspense } from "react";
import Loading from "@/components/auth/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miro",
  description: "Miro Clone",
  applicationName: "Live Block Web Application",
  openGraph: {
    type: "website",
    url: "realtime-miro-clone.vercel.app",
    title: "Miro",
    description:
      "This is miro clone developed by NextJS, Convex, Clerk, Liveblocks & ShadcnUI.",
    siteName: "Miro Clone",
    images: [
      {
        url: "https://i.ibb.co/qrCgtDz/Screenshot-2024-07-27-at-10-31-49-AM.png",
      },
    ],
  },
  keywords: ["NextJS", "ShadnUI", "Convex", "Clerk", "Liveblocks"],
  generator: "NextJs",
  creator: "Shinn Thant",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            {children}
            <Toaster />

            <ModalProvider />
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
