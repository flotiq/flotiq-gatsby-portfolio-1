import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const ProjectGallery = ({ gallery, galleryName, galleryDescription, name }) => {
    const images = gallery.map((image) => ({
        src: image.localFile.publicURL,
    }));
    return (
        <div className="flex flex-wrap items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
            <div className="basis-full md:basis-1/4 pr-5 mb-6 md:mb-0">
                <h2 className="font-semibold text-2xl mb-5" dangerouslySetInnerHTML={{ __html: galleryName }} />
                <p className="font-sora font-lg" dangerouslySetInnerHTML={{ __html: galleryDescription }} />
            </div>
            <div className="flex basis-full md:basis-3/4">
                <Carousel
                    images={images}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}

                />
            </div>
        </div>
    );
};

export default ProjectGallery;
