import { motion } from "framer-motion";
import { Monitor, Smartphone, Database, Calendar } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      icon: Monitor,
      title: "Web Development",
      number: "+10",
      label: "Projects",
      color: "from-blue-500 to-purple-600",
      delay: 0,
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      number: "+4",
      label: "Apps",
      color: "from-purple-500 to-pink-600",
      delay: 0.2,
    },
    {
      icon: Database,
      title: "Fast Delivery",
      number: "On Time",
      label: "",
      color: "from-orange-500 to-red-600",
      delay: 0.4,
    },
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Web Development Card - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.6 }}
        className="absolute top-0 left-[5%] md:left-[15%] w-[280px] md:w-[320px]"
      >
        <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-3">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Web Development
              </h3>
            </div>
          </div>
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            +10 Projects
          </div>
        </div>
      </motion.div>

      {/* Mobile Apps Card - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-[120px] md:top-[140px] right-[5%] md:right-[10%] w-[280px] md:w-[320px]"
      >
        <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-3">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Mobile Apps
              </h3>
            </div>
          </div>
          <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            +4 Apps
          </div>
        </div>
      </motion.div>

      {/* Fast Delivery Card - Bottom Center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-0 left-[10%] md:left-[25%] w-[260px] md:w-[300px]"
      >
        <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-3">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Fast Delivery
              </h3>
            </div>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            On Time
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsCards;
