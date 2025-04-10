export function Bubbles() {
   return (
      <>
         <div className="size-32 absolute -left-12 bottom-10 z-20 rounded-full bg-gradient-to-b from-[#055AD7] to-[#3493FE] group-[.collapsed]:left-2 transition-all duration-300"></div>

         <div
            className="size-60 absolute -right-24 -bottom-10 z-0 rounded-full bg-gradient-to-t from-[#055AD7] to-[#3493FE] group-[.collapsed]:right-4 transition-all duration-300"
            style={{ clipPath: "inset(0 40% 0 0)" }}
         ></div>

         <div className="size-60 absolute -left-10 -bottom-28 z-0 border border-white rounded-full bg-gradient-to-b from-[#055AD7] to-[#3493FE] group-[.collapsed]:left-1 transition-all duration-300"></div>
      </>
   )
}
