"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

// import { usePathname } from "next/navigation";
import img1 from "@/public/images/image_1.jpg";
import img2 from "@/public/images/image_2.jpg";
import img3 from "@/public/images/image_3.jpg";
import img4 from "@/public/images/image_4.jpg";
import img5 from "@/public/images/image_6.jpg";
import img6 from "@/public/images/image_7.jpg";
import img7 from "@/public/images/image_8.jpg";
import img9 from "@/public/images/image_9.jpg";

interface MenuItem {
  title: string;
  href: string;
  image: string;
  content: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    title: "ACCUEIL",
    href: "/",
    image: img1,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">Bienvenue dans la Squadra</h3>
        <p>
          Découvrez l&apos;univers musical d&apos;Oprah et rejoignez notre
          communauté passionnée.
        </p>
      </>
    ),
  },
  {
    title: "BIOGRAPHIE",
    href: "/biographie",
    image: img2,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">
          L&apos;histoire d&apos;Oprah
        </h3>
        <p>
          Plongez dans le parcours inspirant d&apos;Oprah, de ses débuts à son
          succès actuel.
        </p>
      </>
    ),
  },
  {
    title: "DATES / CONCERTS",
    href: "/concerts",
    image: img3,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">Prochains concerts</h3>
        <ul className="list-disc list-inside mt-2">
          <li>15 Juin 2024 - Paris, France</li>
          <li>22 Juin 2024 - Lyon, France</li>
          <li>29 Juin 2024 - Marseille, France</li>
        </ul>
      </>
    ),
  },
  {
    title: "CLIP VIDÉOS",
    href: "/videos",
    image: img4,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">Derniers clips</h3>
        <ul className="list-disc list-inside mt-2">
          <li>&quot;Squadra Life&quot; - Sorti le 1er Mai 2024</li>
          <li>&quot;Rêves en Or&quot; - Sorti le 15 Avril 2024</li>
          <li>&quot;Nuit Étoilée&quot; - Sorti le 1er Avril 2024</li>
        </ul>
      </>
    ),
  },
  {
    title: "ALBUMS",
    href: "/albums",
    image: img5,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">Discographie</h3>
        <ul className="list-disc list-inside mt-2">
          <li>&quot;Squadra Dreams&quot; (2024)</li>
          <li>&quot;Oprah&apos;s World&quot; (2022)</li>
          <li>&quot;First Steps&quot; (2020)</li>
        </ul>
      </>
    ),
  },
  {
    title: "SHOP DE LA SQUADRA",
    href: "/shop",
    image: img6,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">Boutique officielle</h3>
        <p>Découvrez notre collection exclusive de merchandising :</p>
        <ul className="list-disc list-inside mt-2">
          <li>T-shirts</li>
          <li>Hoodies</li>
          <li>Accessoires</li>
          <li>Éditions limitées</li>
        </ul>
      </>
    ),
  },
  {
    title: "REJOINDRE LA TEAM",
    href: "/join",
    image: img7,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">Devenez membre</h3>
        <p>Rejoignez la Squadra et bénéficiez d&apos;avantages exclusifs :</p>
        <ul className="list-disc list-inside mt-2">
          <li>Accès prioritaire aux billets de concert</li>
          <li>Contenu exclusif</li>
          <li>Rencontres avec Oprah</li>
          <li>Réductions sur le merchandising</li>
        </ul>
      </>
    ),
  },
  {
    title: "CONTACTEZ-NOUS",
    href: "/contact",
    image: img9,
    content: (
      <>
        <h3 className="text-2xl font-bold mb-2">Restons en contact</h3>
        <p>Nous sommes là pour répondre à toutes vos questions.</p>
        <div className="mt-2">
          <p>Email: contact@oprahsquadra.com</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
          <p>Adresse: 123 Rue de la Musique, 75000 Paris</p>
        </div>
      </>
    ),
  },
];
export default function FullPageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
//   const pathname = usePathname();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveItem(null);
  };

  const handleItemClick = (title: string) => {
    setActiveItem(title === activeItem ? null : title);
  };

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -50 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mediaVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 bg-black text-white rounded-full"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black text-white z-40 flex flex-col"
          >
            <div className="container mx-auto flex flex-col h-full">
              {/* Title "OPRAH SQUADRA" */}
              <div className="absolute top-56 right-12 transform -rotate-90 origin-right z-10">
                <p className="tracking-widest title-4 text-green-400 whitespace-nowrap">
                  oprah squadra
                </p>
              </div>

              <div className="flex-1 flex flex-col lg:flex-row">
                <motion.div
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex-1"
                >
                  <div className="pt-24 px-12">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm tracking-widest font-title text-green-400"
                    >
                      Venez découvrir !
                    </motion.p>

                    <h1 className="title mt-4 mb-4">
                      menu
                    </h1>
                  </div>
                  <ScrollArea className="h-[80vh] px-12 pb-20">
                    <nav className="space-y-6 pr-4">
                      {menuItems.map((item) => (
                        <motion.div
                          key={item.title}
                          variants={itemVariants}
                          className="group relative"
                        >
                          <button
                            onMouseEnter={() => handleItemClick(item.title)}
                            className="text-lg md:text-3xl hover:text-green-400 transition-colors flex items-center space-x-4"
                          >
                            <ArrowRight
                              className={`transition-transform ${
                                activeItem === item.title ? "translate-x-2" : ""
                              }`}
                            />
                            <span>{item.title}</span>
                          </button>
                        </motion.div>
                      ))}
                    </nav>
                  </ScrollArea>
                </motion.div>

                <div className="flex-1 hidden lg:flex flex-col justify-center items-center p-8 relative">
                  <AnimatePresence mode="wait">
                    {activeItem && (
                      <motion.div
                        key={activeItem}
                        variants={mediaVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full relative"
                      >
                        <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden">
                          <Image
                            src={
                              menuItems.find(
                                (item) => item.title === activeItem
                              )?.image || "/placeholder.svg"
                            }
                            alt={`${activeItem} visual`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className="mt-4 title-3 lowercase"
                        >
                          {activeItem}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
