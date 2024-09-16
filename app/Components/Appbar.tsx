"use client"
import { signIn } from "next-auth/react"
const Appbar=({})=>{

return <div>
    <div className="flex justify-between">
        Muzi
    </div>
    <div>
  <button className="m-2 p-2 bg-blue-400" onClick={()=>signIn()} >sign in</button>

    </div>
</div>

}
export default Appbar