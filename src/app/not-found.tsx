import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>Pagina não encontrada </h1>
      <Link href='/'>voltar a pagina Home</Link>
    </>
  )
}