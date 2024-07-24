import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <button className="btn btn-active btn-primary">This is my home</button>
      <div className="center">
        <Image width={800} height={747} src="/medvice.png" />
      </div>
    </>
  );
}
