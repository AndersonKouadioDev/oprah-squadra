"use client";

import Motion from "@/components/motion";
import { GalleryContent } from "./gallery-content";

export default function BioContent() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="relative isolate grid lg:grid-cols-2 items-center gap-y-24 lg:gap-y-6 gap-x-12 lg:gap-x-12 px-8">
          <div className="relative self-stretch w-full max-w-full lg:max-w-[598px] order-2 lg:order-1">
            <div className="relative h-full col-span-1 row-span-1">
              <Motion variant="fadeIn">
                <div className="absolute bottom-8 md:bottom-16 top-0 left-0 right-0 bg-color-two rounded-3xl shadow-2xl" />
              </Motion>
              <div className="relative flex justify-center items-center h-full z-[1] pt-8 md:pt-16 px-8 md:px-16">
                <div className="relative self-end -left-2 max-w-[100%] md:max-w-[80%] mr-auto">
                  <Motion
                    variant="verticalSlideIn"
                    animationParams={{
                      stiffness: 200,
                      damping: 8,
                      mass: 1,
                      offset: 100,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      alt="App screenshot"
                      src="/images/image_26.jpg"
                      className="w-full h-full grayscale"
                    />
                  </Motion>
                </div>
                <div
                  className="max-w-[60%] md:max-w-[50%] absolute top-auto bottom-auto left-auto -right-2 md:right-16
                flex justify-center flex-col"
                >
                  <Motion
                    variant="horizontalSlideIn"
                    animationParams={{
                      stiffness: 200,
                      damping: 8,
                      mass: 1,
                      offset: 100,
                      delay: 0.7,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      alt="App screenshot"
                      src="/images/image_26.jpg"
                      className="w-full h-full rounded-xl md:rounded-3xl shadow-2xl"
                    />
                  </Motion>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-left">
              <Motion
                variant="verticalSlideIn"
                animationParams={{
                  stiffness: 200,
                  damping: 8,
                  mass: 1,
                  offset: 100,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="uppercase text-sm mb-4 md:text-lg font-bold tracking-tight text-color-one">
                  Ce qu&apos;il faut savoir de moi
                </p>
              </Motion>
              <Motion
                variant="fadeIn"
                animationParams={{
                  stiffness: 200,
                  damping: 8,
                  mass: 1,
                  offset: 100,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="title-3">L&apos;artiste</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  <strong>Oprah</strong> a commencé sa carrière musicale dans
                  les années 2017, se distinguant par son style unique qui
                  mélange rap et influences locales. Elle aborde souvent des
                  thèmes tels que les inégalités sociales, l&apos;émancipation
                  des femmes, et la culture ivoirienne. Elle est également
                  impliquée dans diverses initiatives visant à soutenir les
                  jeunes artistes et à promouvoir la culture ivoirienne.
                </p>
              </Motion>
            </div>
            <GalleryContent />
          </div>
        </div>
      </div>
      <div className="w-[95%] h-[1px] bg-black/30 mx-auto mt-24 md:mt-32 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"></div>
    </div>
  );
}
