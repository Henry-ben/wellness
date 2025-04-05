"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import Modal from "../modal/modal";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  modalContent?: ReactNode; // Allows different content inside the modal
}

export default function Button({
  children,
  className,
  modalContent,
  ...props
}: ButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(className)}
        {...props}
        onClick={handleOpenModal} // Open modal when button is clicked
      >
        {children}
      </motion.button>

      {/* Modal renders outside the button */}
      <Modal open={isModalOpen} closeModal={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
}
