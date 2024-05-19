import { motion } from "framer-motion";

type LearnMoreCardProps = {
  img: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export const LearnMoreCard = ({
  img,
  title,
  description,
  children,
}: LearnMoreCardProps) => {
  return (
    <div className="flex flex-col md:flex-row rounded-[28px] w-full p-2 bg-secondary pb-4 md:pb-2 gap-4 md:gap-7 overflow-clip ">
      <motion.img
        className="rounded-3xl object-cover md:w-[50%] w-full"
        src={img}
      />
      <motion.div className="flex flex-col md:pt-8 gap-2 md:gap-4 px-2 md:px-0 md:pr-4 md:pb-4">
        <h2 className="text-2xl md:text-4xl font-semibold line-clamp-3 text-clip">
          {title}
        </h2>
        <p className="text-xl">{description}</p>
        {children}
      </motion.div>
    </div>
  );
};
