'use client';

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import ProfileModal from "@/components/ProfileModal"; // ⬅️ Add this import

export default function MorePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false); // ⬅️ Add this state
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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

            {/* Thin gray line */}
            <div className="w-full h-px bg-gray-300" />

            {/* Full-width image */}
            <section className="w-screen" onClick={() => setIsProfileOpen(true)}> {/* ⬅️ Click to open modal */}
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

            {/* Navigation Bar */}
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
                ].map((item, index) => {
                    const isCurrent = item.label === 'More';

                    const iconSize = item.label === 'Home' ? 28 : item.label === 'More' ? 38 : 32;

                    return (
                        <div
                            key={index}
                            onClick={() => item.path !== '#' && router.push(item.path)}
                            className="flex flex-col items-center justify-end min-w-[64px] h-[56px] px-1 -translate-y-2 cursor-pointer"
                        >
                            <Image
                                src={item.icon}
                                alt={item.label}
                                width={iconSize}
                                height={iconSize}
                                className="mb-1"
                            />
                            <span
                                className={`text-[11px] leading-none text-gray-700 text-center ${isCurrent ? 'font-bold' : ''
                                    }`}
                            >
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </nav>


            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />

            {/* New ProfileModal */}
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>
    );
}
