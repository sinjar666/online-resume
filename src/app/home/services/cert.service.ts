import { Injectable } from "@angular/core";

@Injectable()
export class CertificationDataService   {
    //Hardocoded the slides data for now
    //TODO: Get this from static resource data file
    private SLIDES = [
        {
            title: "Hadoop Programming Level 2",
            href: "https://www.youracclaim.com/badges/b9df53f0-a223-4c19-bbfc-9410c08e8135/public_url",
            imageUrl: require("assets/img/cert/hadoop-programming-level-2.png"),
            description: "some abcnkdjgvbdkjlvblkjb"
        }
    ];

    /**
     * The Slides information for the carousel
     * slideshow
     */
    public get carouselSlides() {
        return this.SLIDES;
    }
}