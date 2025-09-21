import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react";

const GoToTopButton = () => {
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
    <>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
 className={`fixed z-[400] rounded-full bg-[#646B5D] p-2 bottom-10 right-20 shadow-lg text-white cursor-pointer
            ${
                scrolled ? "flex" : "hidden" 

            }  `}>
            <ChevronUp size={60} />
        </button>
    </>
  )
}

export default GoToTopButton