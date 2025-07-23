import React from 'react';
import { LottieAnimation } from '..';

interface AITalksProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    className?: string;
}

const AITalks: React.FC<AITalksProps> = ({ title, subtitle, icon, className = '' }) => (
    <div
        className={`flex flex-col justify-between items-center py-6 px-5 gap-8 w-[390px] h-[186.79px] flex-none ${className}`}
        style={{
            paddingTop: '24px',
            boxSizing: 'border-box',
        }}
    >
        <div className="flex justify-center items-center h-[30px] w-[30px] mb-2">
            <LottieAnimation
                path="/JB2G_Lottie.json"
                loop={true}
                autoplay={true}
                className="w-full h-full"
                onLoad={() => console.log('Lottie animation loaded')}
            />
        </div>
        <div className="text-center space-y-2">
            <h2
                className="text-center tracking-[0.01em] max-w-sm mx-auto"
                style={{
                    fontFamily: 'Bagoss TRIAL',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '19px',
                    lineHeight: '120%',
                    textAlign: 'center',
                    letterSpacing: '0.01em',
                    color: '#FAFAFA',
                }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className="leading-relaxed text-center"
                    style={{
                        fontFamily: 'Bagoss TRIAL',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '19px',
                        lineHeight: '120%',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        color: '#FAFAFA',
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    </div>
);

export default AITalks; 