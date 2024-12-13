import { cn } from "@/lib/utils";
import { IconType } from 'react-icons';

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
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
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
                "relative rounded-xl group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 text-white",
                className
            )}
        >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon className="w-6 h-6 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />}
                    <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">{title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/90 mb-6">{description}</p>

                {/* Topics */}
                <div className="space-y-4 flex-grow">
                    {topics.map((topic, idx) => (
                        <div key={idx} className="space-y-2">
                            <h4 className="text-sm font-bold text-yellow-300 mb-2">{topic.title}</h4>
                            <ul className="flex flex-wrap gap-2">
                                {topic.details.map((detail, detailIdx) => (
                                    <li
                                        key={`${detail}-${detailIdx}`}
                                        className="inline-block bg-blue-500 bg-opacity-30 text-white text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 hover:bg-opacity-50"
                                    >
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Levels */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {levels.map((level, idx) => (
                        <span
                            key={level + idx}
                            className="bg-green-500 bg-opacity-30 text-white text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 hover:bg-opacity-50"
                        >
                            {level}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
