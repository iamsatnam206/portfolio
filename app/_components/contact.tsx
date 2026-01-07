"use client"
import type React from "react"
import ContactCard from "./ContactCard"


export default function Contact() {

    return (
        <>
            <div className="space-y-6 mt-5 max-w-5xl gap-10 mx-auto grid grid-cols-1 md:grid-cols-[0.75fr_1fr]">
                    <div className="text-left">
                        <h2 className="text-3xl font-medium  mb-2">Get In Touch</h2>
                        <p className="text-muted-foreground">I'm always interested in new opportunities and collaborations</p>
                        <p className="text-muted-foreground">Reach out to me on any platform.</p>
                    </div>
                <div className="flex flex-col gap-10">
                    {/* left side */}
                    <ContactCard />
                </div>
            </div>
        </>
    )
}
