import Header from "@/components/Header"
import Image from "next/image"
import Ads from "@/components/ads"
import Blogs from "@/components/Blogs"

export default function Home() {
  return (
    <main className="">
      <Header />
      <Ads />
      <Blogs />
    </main>
  )
}