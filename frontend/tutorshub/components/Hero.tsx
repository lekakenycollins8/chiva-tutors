import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 transform will-change-transform">
        <div className="relative">
            <Spotlight 
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" 
                fill="hsl(var(--primary))" 
            />
            <Spotlight 
                className="-top-10 -left-full h-[80vh] w-[50vw]" 
                fill="hsl(var(--secondary))" 
            />
            <Spotlight 
                className="top-28 left-80 h-[80vh] w-[50vw]" 
                fill="hsl(var(--accent))" 
            />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        <div className="flex justify-center relative my-20 z-20">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Best Tutoring at Chiva TutorHub
                </h2>
                <TextGenerateEffect
                    className="text-center text-40px md:text-5xl lg:text-6xl font-bold"
                    words="Unlock Your Potential with Expert Tutoring in Chemistry, Math, Business & Accounting.
                            At CHIVA Tutorhub, we provide personalized, results-driven tutoring to help you succeed in school and beyond. Let’s make learning your strength!"
                />
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    Hi, I&apos; m Charles, a professional tutor at Chiva TutorHub with 10 years of experience.
                </p>
                <a href="/about">
                    <MagicButton
                        title="About me"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero;