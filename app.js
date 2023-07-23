import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImage = document.querySelector(".image-rotate-in");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(20), CSS.percent(80)],
});

const animatedImageTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: animatedImage, edge: "end", threshold: "1"},
        { target: animatedImage, edge: "start", threshold: "1"}
    ],
});

scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

animatedImage.animate(
    {
        transform: [ 
        "perspective(1000px) rotateX(45deg)",
        "perspective(1000px) rotate(0)"
    ],
    opacity: ["0", "1"],
    },
    {
        duration: 1,
        timeline: animatedImageTimeline,
    }
);