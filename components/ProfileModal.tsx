'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ProfileModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
    const router = useRouter();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-white flex flex-col"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    <div className="pl-2 pt-4">
                        <button onClick={onClose} className="text-black ml-[-0px]">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                    </div>


                    {/* Profile image content */}
                    <div className="flex-1">
                        <Image
                            src="/monCompte/ProfileModal.PNG"
                            alt="My Profile"
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                            unoptimized
                        />
                    </div>

                    {/* Navigation Bar */}
                    <nav
                        className="w-full bg-white flex justify-around items-end"
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

                </motion.div>
            )}
        </AnimatePresence>
    );
}
