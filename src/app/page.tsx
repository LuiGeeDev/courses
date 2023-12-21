import CodeSandbox from "@/components/CodeSandbox";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Hello world</h1>
      <Link href="/vue-essentials/00-intro/01-welcome">Vue essentials</Link>
    </main>
  );
}
