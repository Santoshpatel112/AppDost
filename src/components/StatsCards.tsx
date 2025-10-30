import { motion } from "framer-motion";
import { Monitor, Smartphone, Calendar } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="relative w-full h-[550px] md:h-[600px] lg:h-[650px]">
      {/* Web Development Card - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.6 }}
        className="absolute top-0 left-0 w-[300px] sm:w-[340px] md:w-[380px] z-10"
      >
        <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-3 flex-shrink-0">
              <Monitor className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
              Web Development
            </h3>
          </div>
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            +10
          </div>
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-1">
            Projects
          </div>
        </div>
      </motion.div>

      {/* Mobile Apps Card - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-[180px] sm:top-[200px] md:top-[220px] right-0 w-[300px] sm:w-[340px] md:w-[380px] z-20"
      >
        <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-3 flex-shrink-0">
              <Smartphone className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
              Mobile Apps
            </h3>
          </div>
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            +4 Apps
          </div>
        </div>
      </motion.div>

      {/* Fast Delivery Card - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-0 left-[50px] sm:left-[80px] md:left-[100px] w-[280px] sm:w-[320px] md:w-[360px] z-30"
      >
        <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-3 flex-shrink-0">
              <Calendar className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
              Fast Delivery
            </h3>
          </div>
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            On Time
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsCards;
