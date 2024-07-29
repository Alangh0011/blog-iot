import styles from "../../style";
import { Hero_Robot } from "../../assets";
import GetStarted from "./GetStarted";
import MaquinaEscribir from "./Maquina_escribir";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-2`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100.8px] leading-[65px]">
          Transforma con la magia<br className="sm:block hidden" />
              <MaquinaEscribir/>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[62px] text-[45px] text-white ss:leading-[100.8px] leading-[65px] w-full">
        ¡Conecta, crea y controla!
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Bienvenido a tu portal para aprender y dominar la tecnología del Internet de las Cosas. Desde conceptos básicos hasta proyectos avanzados, este curso te guiará paso a paso para crear soluciones innovadoras que mejoren la vida cotidiana.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Hero_Robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
