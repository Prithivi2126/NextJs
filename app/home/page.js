"use client"

import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
    const next = ()=>{
        router.push('/about')
    }
  return (
      <div className="mt-5 text-center">
      <button class="btn btn-primary" type="submit" onClick={next}>go to about</button>
      <h3 className="mt-3">Home page</h3>
      </div>
  )
}

export default Home
