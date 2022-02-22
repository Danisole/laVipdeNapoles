//cuando haga click en el indicador se movera el slider

dotsNav.addEventListener("click", e => {
    //que hace cuando clickeo

    const targetDot = e.target.closest("button");
    
    
    if(!targetDot) return;
    
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, targetIndex);
})