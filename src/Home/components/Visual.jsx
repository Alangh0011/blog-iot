import { iconreact , presentacion, icontailwind, express, arduino, vite, vs, firebase, nodejs } from "../../assets";
import styles, { layout } from "../../style";

const Visual = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={presentacion} alt="billing" className="w-[100%] h-[80%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        CroqueFeed <br className="sm:block hidden" /> 
        alimentador de mascotas
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      CroqueFeed es una solución tecnológica que combina hardware y software para automatizar el proceso de alimentación de mascotas.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 px-3 py-3">
        <img src={vs} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer mt-4 mb-4" />
        <img src={nodejs} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-4 mb-4" />
        <img src={express} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-4 mb-4" />
        <img src={arduino} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-4 mb-4" />
        <img src={firebase} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-4 mb-4" />
        <img src={iconreact} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-4 mb-4" />
        <img src={icontailwind} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-4 mb-4" />
        <img src={vite} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-4 mb-4" />
        
      </div>
    </div>
  </section>
);

export default Visual;
