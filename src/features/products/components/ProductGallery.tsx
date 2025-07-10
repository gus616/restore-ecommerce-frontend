import { useState } from "react";

type ProductGalleryProps = {
    images: string[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden">
                {images.map((img, i) => (
                    <img
                        src={img}
                        key={i}
                        onMouseEnter={() => setSelectedImage(img)}
                        className={`h-16 w-16 object-contain border rounded p-1 cursor-pointer transition-all duration-200 ${img === selectedImage ? 'ring-2 ring-yellow-500' : ''
                            }`}
                    />

                ))}
            </div>

            {/* Main Image */}
            <div className="w-full h-[400px] flex items-center justify-center bg-white">
                <img
                    src={selectedImage}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        </div>

    );
};

export default ProductGallery;