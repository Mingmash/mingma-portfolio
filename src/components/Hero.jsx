import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* TEXT */}
      <div
        className={`${styles.paddingX} relative pt-[80px] max-w-7xl mx-auto z-10`}
      >
        <div className="absolute left-0 top-[90px] flex flex-col items-center">
  {/* Sphere */}
  <div className="w-5 h-5 rounded-full bg-[#915eff]" />

  {/* Responsive Line */}
  <div
    className="
      w-1
      h-[250px]
      sm:h-[250px]
      md:h-[300px]
      lg:h-[350px]
      bg-gradient-to-b
      from-[#915eff]
      to-transparent
    "
  />
</div>

        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915eff]">Mingma</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am passionate about building modern, responsive websites
          <br />
          and learning full-stack development.
        </p>
      </div>

      {/* CANVAS */}
      <div className="relative w-full h-[350px] mt-20">
        <ComputersCanvas />
<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
 <a href="#about">
  <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
<motion.div
animate={{
y: [0 ,24, 0]

}}
transition={{
  duration: 1.5 ,
  repeat: Infinity,
  repeatType: 'loop'
}}
className="w-3 h-3 rounded-full bg-secondary mb-1"
/>
  </div>
 </a>
</div>


      </div>
    </section>
  );
};

export default Hero;
