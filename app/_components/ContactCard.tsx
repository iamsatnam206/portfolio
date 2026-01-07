import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Mail, Linkedin, Github, PhoneCall } from "lucide-react";
import Link from "next/link";

const contactItems = [
    {
        icon: <Mail className="size-7 text-muted-foreground" />,
        title: "Email",
        value: "iamsatnam206@gmail.com",
        link: "mailto:iamsatnam206@gmail.com",
    },
    {
        icon: <Linkedin className="size-7 text-muted-foreground" />,
        title: "LinkedIn",
        value: "@satnam-singh-dev",
        link: "https://linkedin.com/in/satnam-singh-dev",
    },
    {
        icon: <PhoneCall className="size-7 text-muted-foreground" />,
        title: "Phone",
        value: "+91 8295458574",
        link: "tel: +91 8295458574",
    },
];

export default function ContactCard() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 mb-8">

                {
                    contactItems.map((item, index) => (
                        <Link href={item.link} key={index} aria-label={`${item.title} links`} >
                            <Card className="w-full md:max-w-xs hover:bg-muted/60 transition-all duration-300">
                                <CardContent className="flex items-center gap-3 p-2">
                                    <div className="h-16 w-16 rounded-md border border-border bg-background flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.value}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))

                }
            </div>
        </>
    );
}
