import React from 'react';
import Carousel from 'react-multi-carousel';
import { Image, Header, Paragraph } from 'flotiq-components-react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const CarouselNavigation = ({ goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="md:w-3/4 m-auto flex items-center justify-between font-sora underline font-light text-sm mt-5">
            <div className="cursor-pointer flex items-center" onClick={() => goToSlide(currentSlide - 1)}>
                <ArrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
                Previous work
            </div>
            <div className="cursor-pointer flex items-center" onClick={() => goToSlide(currentSlide + 1)}>
                Next work
                <ArrowRightIcon className="ml-3 h-5 w-5 text-primary" />
            </div>
        </div>
    );
};

const ProjectGallery = ({ gallery, galleryName, galleryDescription }) => (
    <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="pr-5 mb-6 md:mb-0">
            <Header text={galleryName} additionalClasses={['!text-2xl mb-5']} />
            <Paragraph text={galleryDescription} additionalClasses={['!font-lg font-sora']} />
        </div>
        <div className="col-span-3">
            <Carousel
                infinite
                autoplay={false}
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside
                customButtonGroup={<CarouselNavigation />}
            >
                {gallery.map((image) => (
                    <Image url={image.localFile.publicURL} additionalClasses={['px-2']} />
                ))}
            </Carousel>
        </div>
    </div>
);

export default ProjectGallery;
