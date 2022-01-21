import { useEffect, useState } from "react";

const ScrollComponent=({totalPages,currentPage,appendHandler,loadingEventTrue})=>{
    
    const listenScrollEvent = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-35) {
            console.log("end of page");
            console.log("end of page",window.innerHeight + window.scrollY);
            console.log("end of page",document.body.offsetHeight);
            console.log(totalPages,currentPage)
            if(totalPages>currentPage){
                const currentHeight=document.body.offsetHeight-35;
                loadingEventTrue(document.body.offsetHeight-35);
                
                appendHandler(currentPage+1);
                setTimeout(()=>{
                    window.scrollTo(500, currentHeight)
                    console.log("scrolHeight time",currentHeight)
                },1000);
            }else{
                console.log("all page loaded");
            }
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        }
    }, []);
    return <h1>Scroller</h1>;
}
export default ScrollComponent;