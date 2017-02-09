import { Injectable } from "@angular/core";
import { CarouselSlideData } from "./carouselslidedata.interface";

@Injectable()
export class CertificationDataService {
    //Hardocoded the slides data for now
    //TODO: Get this from static resource data file
    private SLIDES: CarouselSlideData[] = [
        {
            title: "Hadoop Programming - Level 2",
            href: "https://www.youracclaim.com/badges/b9df53f0-a223-4c19-bbfc-9410c08e8135/public_url",
            imageSet: [require("assets/img/cert/hadoop-programming-level-2.png")],
            description: `This badge earner demonstrates the ability to use  
                    programming concepts provided by Apache MapReduce, Apache Pig and Apache Kafka.`
        },
        {
            title: "Hadoop Foundations - Level 2",
            href: "https://www.youracclaim.com/badges/0a0833a4-432d-475b-a246-db2e6920cc4c/public_url",
            imageSet: [require("assets/img/cert/hadoop-foundations-level-2.png")],
            description: `Basic Understanding of Hadoop. 
                        Implement MapReduce jobs within a Yarn enabled cluster. This individual is able to use a number of tools
                        to move data within the Hadoop cluster and can use Hive to store and query data.`
        },
        {
            title: "Big Data Foundations - Level 2",
            href: "https://www.youracclaim.com/badges/83da64a5-56ef-48ff-b6ff-6cf1ebfe2a26/public_url",
            imageSet: [require("assets/img/cert/big-data-foundations-level-2.png")],
            description: `Understands the big data ecosystem and hadoop commands 
                            and operations to work with big data. 
                            Foundational knowledge around Spark, RDDs, DataFrames, and the various 
                            libraries associated with the Spark Core (MLlib, Spark SQL, Spark Streaming, GraphX).`
        },
        {
            title: "Skills",
            href: "#",
            imageSet: [{
                src: require("assets/img/cert/skills-wordcloud-1024x768.png"),
                descriptor: "1024w"
            },
            {
                src: require("assets/img/cert/skills-wordcloud-768x1024.png"),
                descriptor: "768w"
            }],
            description: `Here are some other skills I have developed throughout my career.`
        }
    ];

    /**
     * The Slides information for the carousel
     * slideshow
     */
    public get carouselSlides(): CarouselSlideData[] {
        return this.SLIDES;
    }
}