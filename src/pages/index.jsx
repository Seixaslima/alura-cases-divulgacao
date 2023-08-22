import Link from "next/link";
import { ReactNode } from "react";

function Title({ children, as = "h1" }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <div className="banana">
      <Title>Alura Cases - Home</Title>
      <Link href="/faq">Ir para o FAQ</Link>
    </div>
  );
}
