import PageTransition from './transition/PageTransition1';

function Contact() {
  return (
<div className="snap-y absolute inset-0 overflow-y-scroll scroll-smooth sepia-20 contrast-[1.15] [font-family:Halisa_VF] tracking-tighter [--parallax:parallax_linear]">
  
  <div className="w-full h-screen relative overflow-hidden [view-timeline-name:--section1] [view-timeline-axis:block] grid place-content-center">
    <img src="https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148930553.jpg?t=st=1754101539~exp=1754105139~hmac=a024c3634aa8ff78ee6050bddbdce5009b6af2f606cd174949a8dec9db2878c7&w=1380" 
         className="w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section1] [animation-range:entry_exit]" />
    <h2 className="text-[10vw] text-white mix-blend-exclusion">
      Parallax 1
    </h2>
  </div>
  
  <div className="w-full h-screen relative overflow-hidden [view-timeline-name:--section2] [view-timeline-axis:block] snap-end grid place-content-center">
    <img src="https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148930553.jpg?t=st=1754101539~exp=1754105139~hmac=a024c3634aa8ff78ee6050bddbdce5009b6af2f606cd174949a8dec9db2878c7&w=1380" 
         className="w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section2] [animation-range:entry_exit]" />
    <h2 className="text-[10vw] text-white mix-blend-exclusion">
      Parallax 2
    </h2>
  </div>
  
  <div className="w-full h-screen relative overflow-hidden [view-timeline-name:--section3] [view-timeline-axis:block] snap-end grid place-content-center">
    <img src="https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148930553.jpg?t=st=1754101539~exp=1754105139~hmac=a024c3634aa8ff78ee6050bddbdce5009b6af2f606cd174949a8dec9db2878c7&w=1380" 
         className="w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section3] [animation-range:entry_exit]" />
    <h2 className="text-[10vw] text-white mix-blend-exclusion">
      Parallax 3
    </h2>
  </div>
  
</div>
  );
}

export default PageTransition(Contact);