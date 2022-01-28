import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

const ProjectGallery = ({ gallery, galleryName, galleryDescription, name }) => {
    const images = gallery.map((image) => ({
        original: image.localFile.publicURL,
    }));
    const imageGallery = useRef(null);
    const LeftNav = React.memo(({ disabled, onClick }) => (
        <button
            type="button"
            className="flex items-center justify-start !p-0 image-gallery-icon image-gallery-left-nav left-0
            !right-auto -bottom-14 !top-auto underline !text-primary font-sora !drop-shadow-none !transform-none
            text-sm md:text-base"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <ArrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
            Previous work
        </button>
    ));
    const RightNav = React.memo(({ disabled, onClick }) => (
        <button
            type="button"
            className="flex items-center justify-end !p-0 image-gallery-icon image-gallery-left-nav right-0
            !left-auto -bottom-14 !top-auto underline !text-primary font-sora !drop-shadow-none !transform-none
            text-sm md:text-base"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
        >
            Next work
            <ArrowRightIcon className="ml-3 h-5 w-5 text-primary" />
        </button>
    ));

    return (
        <div className="flex flex-wrap items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10 pb-24">
            <div className="basis-full md:basis-1/4 pr-5 mb-6 md:mb-0">
                <h2 className="font-semibold text-2xl mb-5" dangerouslySetInnerHTML={{ __html: galleryName }} />
                <p className="font-sora font-lg" dangerouslySetInnerHTML={{ __html: galleryDescription }} />
            </div>
            <div className="flex basis-full md:basis-3/4">
                <ImageGallery
                    items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    ref={imageGallery}
                    renderLeftNav={() => (
                        <LeftNav
                            disabled={imageGallery.current?.getCurrentIndex() === 1}
                            onClick={() => imageGallery.current?.slideToIndex(
                                imageGallery.current.getCurrentIndex() - 1,
                            )}
                        />
                    )}
                    renderRightNav={() => (
                        <RightNav
                            disabled={imageGallery.current?.getCurrentIndex() === -1}
                            onClick={() => imageGallery.current?.slideToIndex(
                                imageGallery.current.getCurrentIndex() + 1,
                            )}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default ProjectGallery;
