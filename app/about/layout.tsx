import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={inter.className}
      style={{
        display: "inherit",
        height: 300,
        width: 300,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>About us</h1>
      <ul>
        <li>
          <Link href="/about/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link> 
        </li>
      </ul>
      {children}
    </div>
  );
}
