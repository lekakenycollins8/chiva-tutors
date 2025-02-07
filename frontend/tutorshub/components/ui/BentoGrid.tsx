import { cn } from "@/lib/utils";
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface Topic {
    title: string;
    details: string[];
}

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    topics = [],
    levels = [],
    icon: Icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    topics?: Topic[];
    levels?: string[];
    icon?: IconType;
}) => {
    return (
        <div
            className={cn(
                "group relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 transition-all duration-300",
                className
            )}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-4 mb-6">
                    {Icon && (
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                    )}
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>

                {/* Topics */}
                <div className="space-y-6 flex-grow">
                    {topics.map((topic, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-3"
                        >
                            <h4 className="text-lg font-semibold text-blue-300 mb-3">{topic.title}</h4>
                            <ul className="flex flex-wrap gap-2">
                                {topic.details.map((detail, detailIdx) => (
                                    <li
                                        key={`${detail}-${detailIdx}`}
                                        className="inline-block px-3 py-1.5 text-sm text-gray-200 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                                    >
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Levels */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-800">
                    {levels.map((level, idx) => (
                        <span
                            key={level + idx}
                            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-emerald-300 bg-emerald-900/20 rounded-full border border-emerald-800/30"
                        >
                            {level}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};