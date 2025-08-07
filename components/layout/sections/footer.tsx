import { Separator } from "@/components/ui/separator";
import { Logo } from '@/components/logo'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const links = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '#about-us',
    },
    {
        title: 'Services',
        href: '/services',
    },
    {
        title: 'Treatments',
        href: '#orthodontics',
    },
]

export default function FooterSection() {
    return (
                <footer className="py-14 md:py-20 bg-[#f1f5f8]">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Image
                        src="/2.png"
                        alt="Zan Orthodontist Logo"
                        width={128}
                        height={128}
                        className="h-32 w-auto"
                    />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-[#1d5aa7] hover:text-[#1453a4] block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                
                {/* Contact Information Section */}
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                        <Phone className="h-6 w-6 text-[#1d5aa7]" />
                        <div>
                            <p className="font-semibold text-[#1d5aa7]">Phone</p>
                            <p className="text-sm text-[#1d5aa7]/80">+27 (0) 11 234 5678</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Mail className="h-6 w-6 text-[#1d5aa7]" />
                        <div>
                            <p className="font-semibold text-[#1d5aa7]">Email</p>
                            <p className="text-sm text-[#1d5aa7]/80">info@zanorthodontist.co.za</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <MapPin className="h-6 w-6 text-[#1d5aa7]" />
                        <div>
                            <p className="font-semibold text-[#1d5aa7]">Address</p>
                            <p className="text-sm text-[#1d5aa7]/80">123 Dental Street<br />Johannesburg, 2000</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Clock className="h-6 w-6 text-[#1d5aa7]" />
                        <div>
                            <p className="font-semibold text-[#1d5aa7]">Hours</p>
                            <p className="text-sm text-[#1d5aa7]/80">Mon-Fri: 8AM-5PM<br />Sat: 9AM-2PM</p>
                        </div>
                    </div>
                </div>
                
                <Separator className="my-8" />
                
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-[#1d5aa7] hover:text-[#1453a4] block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-[#1d5aa7] hover:text-[#1453a4] block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </Link>
                </div>
                <span className="text-[#1d5aa7]/80 block text-center text-sm"> {new Date().getFullYear()} Zan Orthodontist, All rights reserved</span>
            </div>
        </footer>
    )
};
