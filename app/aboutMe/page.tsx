"use client";
import Link from "next/link";

const aboutMe = () => {
  return (
    <>
      <div className="pages">
        <Link href={"/"}>Go to home | </Link>
        <h1>Abou Me</h1>
      </div>
    </>
  );
};

export default aboutMe;
