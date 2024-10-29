"use client";
import Motion from "@/components/motion";
export default function BeautifulTitle({
  title,
  textColor = "text-red-600",
  shadow_1 = "#facc15",
  shadow_2 = "#22c55e",
}: {
  title: string;
  textColor?: string;
  shadow_1?: string;
  shadow_2?: string;
}) {
  return (
    <Motion
      variant="verticalSlideIn"
      animationParams={{
        stiffness: 200,
        damping: 8,
        mass: 1,
        offset: 100
      }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="flex w-fit relative">
        <div
          className="absolute top-1/2 z-0 w-[120%] h-[50%]"
          style={{
            backgroundImage: "url('/images/illustrations/manuscrit_3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-[1]">
          <h3
            className={`text-[200px] bigTitle ${textColor}`}
            style={{
              textShadow: `2px 2px 0px ${shadow_1}, 4px 4px 0px ${shadow_2}`,
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Motion>
  );
}
