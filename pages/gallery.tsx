import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { GALLERY_IMAGE_ROWS, GALLERY_IMAGES } from '../constants/gallery';
import { TbArrowLeft, TbArrowRight, TbX } from 'react-icons/tb';
import classNames from 'classnames';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; width: number; height: number, index: number } | null>(null);

  const openModal = (image: { src: string; width: number; height: number }) => {
    const index = GALLERY_IMAGE_ROWS.indexOf(image);
    if (index !== -1) {
      setSelectedImage({ ...image, index });
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleNext = useCallback(() => {
    if (selectedImage) {
      const nextImage = GALLERY_IMAGE_ROWS[selectedImage.index + 1];
      if (nextImage) {
        setSelectedImage({ ...nextImage, index: selectedImage.index + 1 });
      }
    }
  }, [selectedImage]);
  
  const handlePrevious = useCallback(() => {
    if (selectedImage) {
      const previousImage = GALLERY_IMAGE_ROWS[selectedImage.index - 1];
      if (previousImage) {
        setSelectedImage({ ...previousImage, index: selectedImage.index - 1 });
      }
    }
  }, [selectedImage]);

  // Add keyboard event listeners for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, handleNext, handlePrevious]);
  

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Gallery
        </h1>
        
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((column, columnIndex) => (
            <div key={columnIndex} className={classNames("flex flex-col gap-4", {'pt-10' : columnIndex === 1} )}>
              {column.map((image, index) => {
                const aspectRatio = image.width / image.height;
                const width = 450;
                const height = width / aspectRatio;
                return (
                <div key={index} className="rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => openModal(image)}>
                  <Image src={image.src} alt={`Gallery image ${index + 1}`} width={width} height={height} className="w-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              )})}
            </div>
          ))}
        </div>

        {/* Modal for full-size image view */}
        <Dialog open={!!selectedImage} onClose={closeModal} className="relative z-50">
          <DialogBackdrop className="fixed inset-0 bg-black/80" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="relative flex items-center justify-center max-w-[95vw] max-h-[95vh]">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 text-white text-2xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                <TbX className="shrink-0" size={24} />
              </button>
              {selectedImage && selectedImage.index > 0 && <button onClick={handlePrevious} className="absolute top-1/2 -translate-y-1/2 left-0 text-white text-2xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <TbArrowLeft className="shrink-0" size={24} />
              </button>}
              {selectedImage && selectedImage.index < GALLERY_IMAGE_ROWS.length - 1 && <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 right-0 text-white text-2xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <TbArrowRight className="shrink-0" size={24} />
              </button>}
              {selectedImage && (
                <Image
                  src={selectedImage.src}
                  alt="Full size gallery image"
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    maxWidth: '95vw',
                    maxHeight: '95vh',
                  }}
                />
              )}
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;
