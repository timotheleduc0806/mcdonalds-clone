'use client';

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileModal from "@/components/ProfileModal";

export default function MorePage() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen justify-between pb-20 bg-white">
            {/* Header */}
            <header className="w-full px-4 py-2 flex justify-between items-center relative">
                <div className="w-[100px]" />
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Image
                        src="/logos/MyMcdoLogo.png"
                        alt="MyMcdo Logo"
                        width={64}
                        height={24}
                        className="h-auto"
                    />
                </div>
                <div className="text-transparent font-semibold" style={{ fontFamily: 'Speedee' }}>
                    0 pts
                </div>
            </header>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300" />

            {/* Main Image – click to open profile modal */}
            <section
                className="w-screen cursor-pointer"
                onClick={() => setIsProfileOpen(true)}
            >
                <Image
                    src="/monCompte/More.PNG"
                    alt="More Options"
                    width={1200}
                    height={400}
                    priority
                    unoptimized
                    className="w-full h-auto object-cover"
                />
            </section>

            {/* Bottom Nav */}
            <nav
                className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-end"
                style={{ fontFamily: 'var(--font-nunito)' }}
            >
                {[
                    { label: 'Home', icon: '/icons/McdoOff.png', path: '/' },
                    { label: 'Order', icon: '/icons/Icon1.PNG', path: '#' },
                    { label: 'Rewards&Offers', icon: '/icons/Icon2.PNG', path: '#' },
                    { label: 'Code', icon: '/icons/Icon3.PNG', path: '#' },
                    { label: 'More', icon: '/icons/IconMoreOn.PNG', path: '/more' }
                ].map((item) => (
                    <div
                        key={item.label}
                        onClick={() => item.path !== '#' && router.push(item.path)}
                        className="flex flex-col items-center justify-end min-w-[64px] h-[56px] px-1 -translate-y-2 cursor-pointer"
                    >
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={item.label === 'Home' ? 28 : item.label === 'More' ? 38 : 32}
                            height={item.label === 'Home' ? 28 : item.label === 'More' ? 38 : 32}
                            className="mb-1"
                        />
                        <span className={`text-[11px] leading-none text-gray-700 text-center ${item.label === 'More' ? 'font-bold' : ''}`}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </nav>

            {/* Profile Modal */}
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>
    );
}
