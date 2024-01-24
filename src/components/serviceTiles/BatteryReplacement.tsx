import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
import trackpad from "./../../assets/images/trackpad.png";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  //   const xValue = useTransform(scrollYProgress, [0, 1], [0 - 1000, 1]);
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12 flex justify-between "
    >
      <div className="text-center m-[44px]">
        <p className="font-semibold">Battery Replacement</p>
        <h3>
          Get back to 100% battery health. With 6 month replacement warranty.{" "}
        </h3>
      </div>
      <div>
        <img className="h-[100%] object-contain " src={trackpad} alt="" />
      </div>
    </motion.div>
  );
};

export default BatteryReplacement;
