import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";
import nextAuth from "next-auth";


// export function GET(){
// return NextResponse.json({message:"Hi There"})
// }
const handler=nextAuth({

    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
      ]  
})

export {handler as GET , handler as POST}