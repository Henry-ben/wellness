import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | false | undefined)[]) {
  return twMerge(clsx(inputs));
}

export const TIFE_DETAILS = {
  phone: {
    number: "2349085552450",
    label: "+234 908 555 2450",
    url: "tel:+2349085552450"
  },
  email: {
    address: "tifewellnessandspa@gmail.com",
    label: "tifewellnessandspa@gmail.com",
    url: "mailto:tifewellnessandspa@gmail.com"
  },
  address: {
    value: "7B Niyi Okunubi St, Lekki Phase 1, Eti Osa 106104, Lagos",
    label1: "7B Niyi Okunubi St, Lekki Phase 1, ",
    label2: "Eti Osa 106104, Lagos",
    url: "https://maps.app.goo.gl/ncGfF47DpUdgDPvH8"
  },
  instagram: {
    url: "https://www.instagram.com/tife_wellnessandspa",
    label: "tife_wellnessandspa"
  },
  facebook: {
    url: "",
    label: ""
  },
  whatsapp: {
    url: "https://wa.me/2349085552450/?text=Hello, I'm interested in booking your service",
    label: "+234 908 555 2450"
  }
}

export const sendWhatsappMessage = (values: { name: string, phonenumber: string }) => {
  // Replace with your phone number including the country code (without + sign)
  const phoneNumber = '2349085552450' ;
  // Customize your message
  const message = encodeURIComponent (`Hello My name is ${values.name}, I'm interested in booking your service`);
  // WhatsApp API URL
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  // Open WhatsApp in a new tab/window
  window.open(url, '_blank');
};