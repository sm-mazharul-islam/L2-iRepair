import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
const DataRecovery = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-7"
    >
      <div className="mx-auto items-center mt-8 space-x-6 space-y-28">
        <h3 className="font-semibold ml-4">Data Recovery</h3>
        <p>
          Lost your old memories ? Lost your project? Don’t worry, We will
          recover it for you
        </p>
      </div>
    </motion.div>
  );
};

export default DataRecovery;
