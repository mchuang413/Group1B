import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hi</h1>
      <Link href ="/survey">
        <button className="btn btn-active btn-primary">This is my home</button>
      </Link>
      <div className="center">
        <Image width={800} height={747} src="/medvice.png" />
      </div>
    </>
  );
}
