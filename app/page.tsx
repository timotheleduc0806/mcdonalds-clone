'use client';

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen justify-between pb-20 bg-[#f7f7f7]">
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
        <div className="text-black font-semibold" style={{ fontFamily: 'Speedee' }}>
          0 pts
        </div>
      </header>

      {/* Banner */}
      <section className="w-screen">
        <Image
          src="/banners/MouthFul.PNG"
          alt="Promo Banner"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
        />
        <p className="text-xs text-gray-500 mt-1 px-4">
          For a limited time only. At participating McDonald’s restaurants in Canada.
        </p>
      </section>

      {/* Main */}
      <main className="flex flex-col gap-6 px-4 mt-4">
        {/* Menu */}
        <section>
          <div className="flex justify-between items-center mb-2 px-1">
            <h3 className="text-xl font-bold">Menu</h3>
            <a href="#" className="text-blue-500 text-sm font-bold">Full menu ➔</a>
          </div>
          <div className="flex overflow-x-auto gap-1 pb-2">
            {[
              { src: "Burgers.PNG", title: "Burgers" },
              { src: "Chicken & Filet-O-Fish.PNG", title: "Chicken & Filet-O-Fish" },
              { src: "Cold Drinks.PNG", title: "Cold Drinks" },
              { src: "Hot Drinks.PNG", title: "Hot Drinks" },
              { src: "Wraps.PNG", title: "Wraps" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start min-w-[192px] pl-1">
                <Image
                  src={`/menu/${item.src}`}
                  alt={item.title}
                  width={192}
                  height={192}
                  className="rounded-md w-48 h-48 object-cover"
                />
                <span className="text-sm mt-2">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Offers */}
        <section>
          <h3 className="text-lg font-bold mb-2">My Offers</h3>
          <div className="flex overflow-x-auto">
            {[
              {
                src: "/offers/Offer3.PNG",
                alt: "Platinum Card 50% Discount",
                title: "Platinum Card 50% Discount",
                expires: "Expires tomorrow",
              },
              {
                src: "/offers/Offer1.PNG",
                alt: "McWrap Offer",
                title: "25% off a McWrap",
                expires: "Expires in 6 days",
              },
              {
                src: "/offers/Offer2.PNG",
                alt: "McMuffin Offer",
                title: "$5.25 + tax McMuffin Extr...",
                expires: "Expires in 6 days",
              },
            ].map((offer, index) => (
              <div
                key={index}
                onClick={offer.src === "/offers/Offer3.PNG" ? openModal : undefined}
                className="p-1 flex flex-col items-start justify-start cursor-pointer"
                style={{ minWidth: 100, maxWidth: 120 }}
              >
                <Image
                  src={offer.src}
                  alt={offer.alt}
                  width={100}
                  height={80}
                  className="object-contain rounded-xl shadow-[0_6px_10px_-4px_rgba(0,0,0,0.35)]"
                />
                <span className="text-sm mt-2 font-medium leading-snug break-words whitespace-normal">
                  {offer.title}
                </span>
                <p className="text-xs text-gray-500">{offer.expires}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's New */}
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">What&apos;s new</h3>
          {[
            {
              img: "/banners/Creme Egg.PNG",
              alt: "Creme Egg Banner",
              disclaimer:
                "For a limited time only. At participating McDonald’s restaurants in Canada. CADBURY CREME EGG is a trademark of Mondelēz International group, used under license."
            },
            {
              img: "/banners/MouthFul.PNG",
              alt: "Mouthful Burger Banner",
              disclaimer:
                "For a limited time only. At participating McDonald’s restaurants in Canada."
            },
            {
              img: "/banners/Cinnamon.PNG",
              alt: "Cinnamon Swirl Banner",
              disclaimer:
                "At participating McDonald’s restaurants in Canada."
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <Image
                src={item.img}
                alt={item.alt}
                width={600}
                height={300}
                className="rounded-xl w-full h-auto object-cover"
              />
              <p className="text-xs text-gray-500 mt-1">{item.disclaimer}</p>
            </div>
          ))}
        </section>
      </main>

      <nav
        className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center py-1"
        style={{ fontFamily: 'var(--font-nunito)' }}
      >
        {[
          { label: 'Home', icon: '/icons/Icon1.PNG' },
          { label: 'Order', icon: '/icons/Icon1.PNG' },
          { label: 'Rewards&Offers', icon: '/icons/Icon2.PNG' },
          { label: 'Code', icon: '/icons/Icon3.PNG' },
          { label: 'More', icon: '/icons/Icon4.PNG' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-[11px] text-gray-700">
            <Image
              src={item.icon}
              alt={item.label}
              width={32}
              height={32}
              className="mb-0.5"
            />
            {item.label}
          </div>
        ))}
      </nav>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
