import React from 'react';
import ImageGallery from 'react-image-gallery';

const ProjectGallery = ({ gallery, galleryName, galleryDescription, name }) => {
    const images = gallery.map((image) => ({
        original: image.localFile.publicURL,
    }));
    const LeftNav = React.memo(({
        disabled,
        onClick,
    }) => (
        <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            left
        </button>
    ));

    return (
        <div className="flex flex-wrap items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
            <div className="basis-full md:basis-1/4 pr-5 mb-6 md:mb-0">
                <h2 className="font-semibold text-2xl mb-5" dangerouslySetInnerHTML={{ __html: galleryName }} />
                <p className="font-sora font-lg" dangerouslySetInnerHTML={{ __html: galleryDescription }} />
            </div>
            <div className="flex basis-full md:basis-3/4">
                <ImageGallery
                    items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                />
                <LeftNav onClick={onClick} disabled={disabled} />
            </div>
        </div>
    );
};

export default ProjectGallery;
