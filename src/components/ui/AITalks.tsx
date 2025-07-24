import React from 'react';
import { LottieAnimation } from '..';

interface AITalksProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    className?: string;
}

const AITalks: React.FC<AITalksProps> = ({ title, subtitle, icon, className = '' }) => (
    <div className={`aitalks-container ${className}`}>
        <div className="aitalks-icon-container">
            <LottieAnimation
                path="/JB2G_Lottie.json"
                loop={true}
                autoplay={true}
                className="aitalks-lottie"
                onLoad={() => console.log('Lottie animation loaded')}
            />
        </div>
        <div className="aitalks-content">
            <h2 className="aitalks-title">{title}</h2>
            {subtitle && (
                <p className="aitalks-subtitle">{subtitle}</p>
            )}
        </div>
    </div>
);

export default AITalks; 