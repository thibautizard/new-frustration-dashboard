import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./Header";
import { Sidenav } from "./Sidenav";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frustration Dahsboard",
  description: "Tableau de bord pour Frustration"
};

export default async function RootLayout({ children }: { readonly children: React.ReactNode }) {
  const session = await getServerSession(options);

  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex grow main-background">
          {session ? (
            <>
              <Sidenav />
              {children}
            </>
          ) : (
            <Link href="/api/auth/signin">Se connecter</Link>
          )}
        </main>
      </body>
    </html>
  );
}
