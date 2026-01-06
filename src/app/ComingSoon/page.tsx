"use client"

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {  
    return (
        <>
            <section className="section coming-soon">
                <div className="container">
                    <div className="coming-soon-wrapper">
                        <Image src="/images/general/coming-soon.png" alt="coming-soon" width={937} height={387} priority={false}></Image>

                        <Link href="/Contact#academy-form" className="link-padding link-blue site-radius-10 text-18 text-md" title="Get Early Access">Get Early Access</Link>
                    </div>
                </div>
            </section>
        </>
    );
}