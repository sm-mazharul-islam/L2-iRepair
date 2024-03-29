import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
const ChipsetReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"
    >
      <h3>Chip Replacement</h3>
      <p>
        There is no need to replace the motherboard for a tiny little dead
        chipset.
      </p>
    </motion.div>
  );
};

export default ChipsetReplacement;
