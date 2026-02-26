import React from  "react"
import {SignIn} from "@clerk/nextjs"
const SignInPage = () => {
  return (
    <div classname="flex flex-col max-w-3xl mx-auto w-full">
        <section classname="space-y-6 pt-[16vh] 2x1:pt-48">
            <SignIn/>
        </section>
    </div>
  )
}

export default SignInPage