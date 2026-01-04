'use client';

import { useState } from 'react';
import { User } from 'lucide-react';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function ProfileImage({ src, alt = "Shweta Sahu", className = "" }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse rounded-full flex items-center justify-center">
          <User className="w-12 h-12 text-muted-foreground opacity-50" />
        </div>
      )}

      {imageError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
          <User className="w-24 h-24 text-muted-foreground" />
        </div>
      ) : (
        <div className="relative w-full h-full p-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-primary/30">
          <div className="w-full h-full rounded-full overflow-hidden bg-background">
            <img
              src={src || "/profile.jpg"}
              alt={alt}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
