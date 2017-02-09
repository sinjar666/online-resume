/**
 * interface defines the model class for each
 * Carousel Slide
 */
export interface CarouselSlideData {

    title: string;
    href: string;
    imageSet: ImageSetDescriptor[];
    description: string;

}

interface ImageSetDescriptor    {
    src: string;
    descriptor: string;
}