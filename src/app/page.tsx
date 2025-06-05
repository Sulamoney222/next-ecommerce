"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  return (
    <div className="">
      Hello World!
      <button
       onClick={()=>router.push('/auth')}
      >To SignUP </button>
    </div>
  );
}
