"use client"
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();
    const back = () =>{
       router.push('/home')
    }
    return (
      <div className="mt-5 text-center">
       <button class="btn btn-primary " type="submit" onClick={back}>Back</button>
      <h3 className="mt-3">About page</h3>
      </div>
    );
  }
