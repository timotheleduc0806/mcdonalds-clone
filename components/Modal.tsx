'use client';

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white flex flex-col"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Close button with inline SVG, moved further to the top-left */}
          <div className="flex justify-start p-4 ml-[-20px] -mt-5">
            <button onClick={onClose} className="p-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black hover:text-black"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Image container */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/offers/DiscountBetter.png"
              alt="Discount Offer"
              width={1600}
              height={900}
              className="w-full h-auto object-contain transform"
              style={{ transform: "scaleY(1.05)" }}
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
