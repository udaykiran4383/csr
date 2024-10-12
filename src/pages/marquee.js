import React from 'react';

export default function Marquee() {
    const images = [
        '/images/images.jpeg',
        '/images/Organization Logo (1)_1.png',
        '/images/images.png',
        '/images/images (1).png',
        '/images/images.jpeg',
        '/images/Organization Logo (1)_1.png',
        '/images/images.png',
        '/images/images (1).png',
    ];

    return (
        <div className="w-full overflow-hidden p-4">
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    display: flex;
                    width: 200%; /* Double the width to enable seamless looping */
                    animation: marquee 20s linear infinite;
                }
            `}</style>
            <div className="animate-marquee">
                {images.concat(images).map((src, index) => (
                    <div key={index} className="mx-8 flex-shrink-0">
                        <img
                            src={src}
                            alt={`Marquee image ${index + 1}`}
                            width={220}
                            height={220}
                            className="rounded-full border-4 border-[#090602]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
