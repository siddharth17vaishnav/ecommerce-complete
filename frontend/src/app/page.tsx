"use client"
import CustomSnackbar from "@/src/components/shared/CustomSnackBar/CustomSnackBar"
import useStore from "../zustand"

export default function Home() {
  const user = useStore((state)=>state.login)
  const handleOnClick=()=>{
    user({email:'sid@gmail.com',password:'password1'})
  }
  return (
    <main >
      <button onClick={()=> handleOnClick()}>login</button>
      <CustomSnackbar/>
    </main>
  )
  }
