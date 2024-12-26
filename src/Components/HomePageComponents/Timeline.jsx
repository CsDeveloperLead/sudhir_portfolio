import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Timeline = () => {
    return (
        <div className="w-full h-auto flex flex-col px-5 my-5 lg:my-10 md:px-10 xl:px-20">
            <HorizontalScrollCarousel />
            <div className="w-full h-auto">
                <p className="w-full h-auto text-lg font-satoshi">
                    Today when I look back, it filled me with pride in mentoring teams, fostering collaboration, and creating strategies that aligned with organizational goals. My commitment to continuous improvement and adaptability prepared me to embrace my current role as Country Collections Manager. Here, I oversee strategic collections initiatives, stakeholder engagement, fostering inclusive environment and team development, ensuring that we maintain financial stability and deliver outstanding service. <br /> <br />
                    I am a dedicated professional with a passion for excellence in my field and a deep commitment to making a positive impact beyond the workplace. Over the last 24 years, I have honed my skills and expertise, not only to advance in my career but also to create opportunities for many others. <br /> <br />
                    Driven by the belief that success is most meaningful when shared, I aspire to give back to society through mentoring, knowledge sharing, and contributing to initiatives that uplift communities. My aim to leverage my experiences to inspire and create value for others. <br /> <br />
                    For me, giving back is not just an act of generosity—it's a responsibility and a source of immense fulfilment. <br /> <br />
                </p>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const timelineData = [
        {
            id: 1,
            year: "2001",
            message: "Started journey in hospitality with Park Royal Intercontinental, EROS Group. My career began as a Credit Assistant, where I developed foundational skills in credit analysis, customer communication, and account reconciliation. This role provided me with a deep understanding of financial operations and the importance of maintaining healthy cash flows."
        },
        {
            id: 2,
            year: "2004 to 2007",
            message: "Got opportunity to contribute in ISP, Travel trade and manufacturing industry (Hathway, ITH and NCR Corporation), here I progressed through various roles that broadened my expertise and strengthened my learning capabilities. From managing complex credit portfolios to streamlining collection processes, I focused on driving efficiency, reducing risks, and building strong relationships with internal and external stakeholders."
        },
        {
            id: 3,
            year: "2007 to 2010",
            message: `One of the turning points in my career was, joining Hewlett Packard India on an assignment (Collections analyst) for cash acceleration from key clients. Here, implementing a structured mechanism to have engagement with BFSI, Defence, Large commercials, etc. significantly reduced overdue receivables, establishing me as a "go-getter". This accomplishment not only showcased my analytical skills but also deepened my resolve to tackle challenges with a disciplined approach.`
        },
        {
            id: 4,
            year: "2010 to 2011",
            message: "Thought to challenge myself in different areas of business, hence decided to move on and embark on a journey to contribute in consumer durables (Panasonic India as Regional credit controller). Gained insights on route-to-market business models and how to test the mood of the market, which can help encourage channel business partners to flourish their businesses with new innovative products and schemes."
        },
        {
            id: 5,
            year: "2011",
            message: "This career journey is the longest and filled with many milestones/ turning points towards transitioning into leadership roles."
        },
        {
            id: 6,
            year: "2013",
            message: "Got into a relationship with one of the senior leaders as a mentee. This relationship helped me realize the importance of having a mentor in life/career, and helped sharpen my acquired skills. Since then, I’ve been with many mentors, who were instrumental in shaping who I am today."
        },
        {
            id: 7,
            year: "2016",
            message: "Blown up my comfort zone and embarked on a journey to change the way “India Geo” has been looked upon from a cash acceleration perspective."
        }
    ]
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-24 flex flex-col items-start overflow-hidden">
                <h1 className='text-4xl font-bold font-satoshi lg:text-5xl'>
                    <span className='bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent'>Career </span>
                    Timeline!
                </h1>
                <motion.div style={{ x }} className="flex gap-4">
                    <div className='w-full h-auto flex gap-5 mt-10 overflow-x-hidden relative px-8 pb-8' >
                        {/* <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-14 min-w-36 absolute top-28 left-10"></div> */}
                        {
                            timelineData.map((item, index) => (
                                <div key={index} className='h-auto gap-4 md:gap-8 md:h-[350px] border-2 shadow-xl rounded-xl min-w-[300px] md:min-w-[800px] p-10 font-satoshi flex flex-col'>
                                    <span className='text-3xl font-bold'>{item.year}</span>
                                    <p className='text-sm md:text-lg'>{item.message}</p>
                                </div>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
