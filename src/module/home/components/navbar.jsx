import Image from "next/image"
import Link from "next/link"
import React from "react"
import { SignIn, SignedIn, SignedOut, SignUpButton, SignInButton, UserButton } from "@clerk/nextjs"

import { Button } from "@/src/components/ui/button"

const Navbar = () => {
    return (
        <nav className="p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-transparent">
            <div className="max-w-5xl mx-auto w-full justify-between items-center">
                <Link href={"/"} className="flex items-center gap-2">
                    <Image src={"/logo.svg"} alt="Vibe" width={32} height={32} className="shrink-0 invert dark:invert-0" />
                </Link>

                <SignedOut>
                    <div className="flex gap-2">
                        <SignInButton>
                            <Button variant={"outline"} size={"sm"}>
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button size={"sm"}>
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar