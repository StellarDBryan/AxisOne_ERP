"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/pages/hooks/useOutsideClick";
import { ActiveCard } from "./cards";

const contentText = {
  sku: "Código SKU", 
  stock: "Stock disponible", 
  categories: "Categorías", 
  provider: "Proveedor"
};


export function ExpandableActiveCard({ content }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const MotionImage = motion.create(Image);

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0 grid place-items-center z-[100] overflow-auto will-change-scroll">
          <motion.button
            key={`button-${active.name}-${id}-${active.sku}`}
            layout
            initial={{
              opacity: 0,
              y: 2000
            }}
            animate={{
              opacity: 1,
              translateY: -2000,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            transition= {{ 
              duration: 0.2, 
              delay: 0.1, 
              type: "spring",
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-900 rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.active}-${id}-${active.sku}`}
            ref={ref}
            className="w-full max-w-[80vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[65vw] h-auto flex flex-col md:flex-row gap-3 bg-neutral-700 sm:rounded-xl overflow-hidden">
            <MotionImage
                priority
                width={100}
                height={100}
                src={active.img ?? "/images/products/product_icon.png"}
                alt={active.active}
                className="w-[250px] h-[300px] object-contain rounded-s-md bg-gray-50" />
            <div className="p-5 text-gray-50 text-h6">
              <div className="flex items-start ">
                  <motion.h3
                    layoutId={`title-${active.active}-${id}-${active.sku}`}
                    className="font-extrabold text-h3 text-cyan-300 text-base">
                    {active.active}
                  </motion.h3>
              </div>
              <div className="flex flex-col gap-3">
                  <motion.div layoutId={`sku-${active.active}-${id}-${active.sku}`} className="flex flex-row items-center flex-nowrap gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" className="md:w-[30px] md:h-[30px]">
                          <path fill="currentColor" fillRule="evenodd" d="M1 13V3h2v10zm3 0V3h1v10zm2.5 0V3h1v10zm2 0V3H11v10zm3.5 0V3h1v10zm2 0V3h1v10z" clipRule="evenodd"/>
                      </svg>
                      {contentText.sku}: 
                      <span className="font-medium whitespace-pre-line">{active.sku}</span>
                  </motion.div>
                  <motion.div layoutId={`quantity-${active.active}-${id}-${active.sku}`} className="flex flex-row items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="md:w-[27px] md:h-[27px]">
                          <path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/>
                      </svg>
                      {contentText.stock}: 
                        {(active.quantity > active.low_stock_alert) 
                            ?   ''
                            :   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" className="text-yellow-400 md:w-[27px] md:h-[27px]">
                                    <path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"/>
                                </svg>} 
                        <span className="text-gray-50 font-bold md:font-extrabold">{active.quantity}</span>
                  </motion.div>
                  <motion.div layoutId={`category-${active.active}-${id}-${active.sku}`} className="flex flex-row text-gray-50/90 items-center flex-nowrap gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" className="md:w-[30px] md:h-[30px]">
                            <path fill="currentColor" d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.16 2.16 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133m-4.371 9.358a1.61 1.61 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.61 1.61 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153q.13 0 .257-.059q.292-.137.619-.33a1.62 1.62 0 0 1-.664 1.586"/>
                        </svg>
                        {contentText.categories}: 
                        <span className="truncate font-medium max-w-[80%]">{active.category}</span>
                  </motion.div>
                  <motion.div layoutId={`provider-${active.active}-${id}-${active.sku}`} className="flex flex-row text-gray-50/90 items-center flex-nowrap gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="md:w-[30px] md:h-[30px]">
                          <path fill="currentColor" d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324"/>
                          <path fill="currentColor" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"/>
                      </svg>
                      {contentText.provider}: 
                      <span className=" truncate font-medium max-w-[80%]">{active.provider}</span>
                  </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="mx-auto p-2 w-[80vw] lg:w-[87vw] border-2 border-solid  flex flex-row flex-wrap items-center justify-start gap-3">
      {content.map((product, index) => (
        <ActiveCard
            id={id}
            key={product.sku}
            active={product}
            seeCard={setActive}
        /> 
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};