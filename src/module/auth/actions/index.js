"use server"

import { currentUser } from "@clerk/nextjs/server"
import { email, success } from "zod"



 export const onBoardUser = async() => {
    try {
        const user = await currentUser()
        if (!user) {
            return {
                successs: false,
                error: "No authenticated user found"
            }
        }
        const {id, firstName, lastName, imageUrl, emailAddresses} = user

        const newUser = await db.user.upsert({
            where:{
                clerkId:id
            },
            update:{
                create:{
                    clerkId: id,
                    name: firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName || null,
                    image: imageUrl || null,
                    email: emailAddresses[0]?.emailAddress || "",
                }
            },
            create:{
                clerkId: id,
                    name: firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName || null,
                    image: imageUrl || null,
                    email: emailAddresses[0]?.emailAddress || "",
            }
        })

        return {
            success: true,
            user: newUser,
            message: "User onBoarded successfully"
        }
    } catch (error) {
        console.error("❌ Error onboarding user:", error);
        return {
            success: false,
            error: "failed to onboard user"
        }
        
    }
 }

 export const getCurrentUser = async() => {
    try {
        const user = await currentUser()
        if (!user) {
            return null
        }
        const dbUser = await db.user.findUnique({
            where:{
                clerkId: user.id
            },
            select:{
                id: true,
                email: true,
                name: true,
                image: true,
                clerkId: true
            }
        })

        return dbUser
    } catch (error) {
        console.error("❌ Error Fetching user:", error);
        return null
    }
 }