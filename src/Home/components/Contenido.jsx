import { features } from "../constants";
import styles, { layout } from "../../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ¿Qué aprenderas? 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      En este Blog IoT aprenderás desde los conceptos básicos del Internet de las Cosas (IoT) hasta la implementación de proyectos avanzados y reales. A través de tutoriales detallados y prácticas guiadas, descubrirás cómo conectar y programar dispositivos IoT, y crear aplicaciones web interactivas. Al finalizar, serás capaz de construir soluciones IoT innovadoras como "CroqueFeed", un sistema automatizado de alimentación para mascotas, aplicando tus nuevos conocimientos en proyectos del mundo real. ¡Prepárate para transformar tus ideas en realidad!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
