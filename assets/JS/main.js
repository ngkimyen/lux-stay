

(function handleHeader () {
    const quantity=$('.quantity');
    const searchQuantity = $('.search__quantity');
    const increments = $$('.quantity__incr');
    const decrements = $$('.quantity__decr');
    const quantityInput = $$('.quantity__input');
    const dateControl = $('.search__date');
    const calendar = $('.calendar');

    
    const presentItems = $$('#month__present .day__item')
    const nextItems = $$('#month__next .day__item')

    // display date control
    dateControl.onclick = function(e) {
        e.stopPropagation();
        if (e.target === this) {
            handleDisplay(calendar,'fadeIn','block',dateControl)
            // in case quantity is opened, hide it
            handleHide(e.target, quantity, "fadeOut", "block",searchQuantity);
            let date = new Date();
            handleCalendarChange(date);
            handleNextPrevBtn(date);
            handlePicker();
        }   
    }
    // display quantity control
    searchQuantity.onclick = (e) => {
        e.stopPropagation();
        handleDisplay(quantity,'fadeIn','block',searchQuantity)
        handleQuantityChange(increments,decrements,quantityInput)
        // in case calender is opened, hide it
        handleHide(e.target, calendar, "fadeOut", "block", dateControl);
    }

    function handleQuantityChange(increments,decrements,quantityInput) {
        const deleteBtn = $('.quantity__delete');
        let counter;

        increments.forEach( (increment,index) => {
            increment.onclick = () => {
                if (quantityInput[index].value === '0') {
                    counter = 1
                } else counter = parseInt(quantityInput[index].value)+1;
                decrements[index].classList.add('active');
                quantityInput[index].value = counter ;
            }
        })

        decrements.forEach ((decrement,index) => {
            decrement.onclick = () => {
                if (decrement.classList.contains('active')) {
                    counter = parseInt(quantityInput[index].value)-1;
                    if (counter === 0 ) {
                        decrement.classList.remove('active');
                        quantityInput[index].value = counter
                    } else quantityInput[index].value = counter;
                }
            }
        })

        deleteBtn.onclick = () => {
            quantityInput.forEach ( (input,index) => {
                input.value = 0
                decrements[index].classList.remove('active');
            })
        }


    }

    function handleCalendarChange (date) {
        const presentMonthElement = $('#month__present');
        const nextMonthElement = $('#month__next');

        const presentMonthText = $('#month__present .head__month');
        const presentYearText = $('#month__present .head__year');
        const nextMonthText = $('#month__next .head__month');
        const nextYearText = $('#month__next .head__year');

        const calendarDayPresent = $$('#month__present .day__item');
        const calendarDayNext = $$('#month__next .day__item');

        // -------PRESENT MONTH
        let presentMonth = date.toLocaleString('en-us', { month: 'long' });
        let presentYear = date.getFullYear();
            // render heading present month
        presentMonthText.innerHTML = presentMonth;
        presentYearText.innerHTML = presentYear;
            // render days in present month
        let presentDate = new Date(`${presentYear} ${presentMonth}`);
        let quantityDayInPresentMonth = daysInMonth(presentYear, date.getMonth()+1)
        renderDaysInMonth(calendarDayPresent, presentDate.getDay()-1, quantityDayInPresentMonth,presentDate.getDay()-1 + date.getDate());
        
        // ------NEXT MONTH
        let nextYear;
        let nextMonthNumber;
        let nextMonthNumberFromPresent = date.getMonth()+1;
        console.log('next month :', nextMonthNumberFromPresent)

        if (nextMonthNumberFromPresent <= 11) {    
            nextMonthNumber = nextMonthNumberFromPresent +1 ;
            nextYear = presentYear;
        } else {
            nextMonthNumber = 1;
            nextYear = parseInt(presentYear);
            nextYear +=1;
        }
            // render heading next month
        let nextDate = new Date (`${nextYear} ${nextMonthNumber}`);
        let quantityDayInNextMonth = daysInMonth(nextYear, nextMonthNumber)
        let nextMonth = nextDate.toLocaleString('en-us', { month: 'long' });

        nextYearText.innerHTML = nextYear;
        nextMonthText.innerHTML = nextMonth ;
            // render days in next month
        renderDaysInMonth(calendarDayNext,nextDate.getDay()-1,quantityDayInNextMonth,nextDate.getDay()-1 + nextDate.getDate() )
        
        function renderDaysInMonth (elements, startDate, quantityDayInMonth, presentDate ) {
            let counter =0;
            resetCalender(elements);
            hideLastRow();
            
            for (i = startDate ; i < elements.length ; i++) {
                if (counter < quantityDayInMonth)   
                    if (elements[i].classList.contains('hide')) {
                        displayLastRow()
                        counter++;
                        elements[i].innerHTML = counter;
                    } else {
                        counter++;
                        elements[i].innerHTML = counter;
                    }
            }
            handleDateColor(elements, startDate, presentDate);
        }
        
        function handleDateColor (elements, startDate, presentDate) {
            for (let i = startDate ; i < elements.length ; i++) 
                if (elements[i].innerHTML) 
                    if (i >= presentDate -1) {
                        elements[i].classList.add('active'); 
                    } else elements[i].classList.add('expired')
        }
        
        function resetCalender (elements) {
            for (let i = 0 ; i < elements.length ; i++) {
                elements[i].innerHTML = ""
                elements[i].classList.remove('active');
                elements[i].classList.remove('expired');
            }
        }
        function hideLastRow () {
            for (let i=35; i <= 41 ; i++) {
                presentItems[i].classList.add('hide');
                nextItems[i].classList.add('hide');
            }
        }
        function displayLastRow () {
            for (let i=35; i <= 41 ; i++) {
                presentItems[i].classList.remove('hide');
                nextItems[i].classList.remove('hide');
            }
        }
    }

    function handleNextPrevBtn(date) {
        const next = $('.month__next-btn ');
        const prev = $('.month__prev-btn ');
        let counterNext = 0;
        let counterPrev = 0;
        let yearCounterNext = 1;
        let yearCounterPrev = 1;

        next.onclick = (e) => {
            e.stopPropagation();
            console.log(date)
            function handleNextBtn() {
                let nextMonth;
            let year;
            let month;
            removeClassList($$('.day__item.active'),0,'isPicked');

            if (counterNext === 0) {
                month = date.getMonth();
            } else month = date.getMonth() + counterNext;

            if (month >= 11) {
                let divisionBy12 = yearCounterNext % 12;
                if (divisionBy12 <= 0) {
                    nextMonth = yearCounterNext;
                    year = date.getFullYear() +1 ;
                } else {
                    year =(date.getFullYear()+1 ) + Math.floor(yearCounterNext/12) 
                    nextMonth = divisionBy12;
                }
                yearCounterNext++
            } else {
                nextMonth = month + 2;
                year = date.getFullYear();
            }
            // console.log(year)
            // console.log(nextMonth)
            // console.log(new Date(`${year} ${nextMonth}`));
            handleCalendarChange(new Date(`${year} ${nextMonth}`));
            counterPrev =0;
            counterNext++;
            } 
        }
        prev.onclick = (e) => {
            e.stopPropagation();
            let prevMonth;
            let year;
            let month;
            removeClassList($$('.day__item.active'),0,'isPicked');

            if (counterPrev === 0) {
                month = date.getMonth();
            } else month = date.getMonth() - counterPrev;

            if (month <= 0) {
                let divisionBy12 = yearCounterPrev % 12;
                if (divisionBy12 <= 0) {
                    prevMonth = yearCounterPrev;
                    year = date.getFullYear() +1;
                } else {
                    year =(date.getFullYear() + 1) - Math.floor(yearCounterPrev/12) 
                    prevMonth = divisionBy12;
                }
                yearCounterPrev++
            } else {
                prevMonth = month ;
                year = date.getFullYear();
            }
            // console.log(year)
            console.log(prevMonth)
            handleCalendarChange(new Date(`${year} ${prevMonth}`));
            counterNext=0;
            counterPrev++;
        }

    }

    function handlePicker() {
        const calendarDelete = $('.calendar__delete');
        const dayItems = $$('.day__item.active');

        let counter = 0;
        let current=0;
        dayItems.forEach((item, index) => {
            item.onclick = (e) => {
                e.stopPropagation();
                counter++;
                if (counter > 1) 
                   { if (current > index) {
                        removeClassList(dayItems,0,'isPicked')
                        item.classList.add('isPicked')
                    } else if (current < index) {
                    addClassList(dayItems,current,index,'isPicked')
                    } 
                } else if (counter === 1)  item.classList.add('isPicked')
               return current = index;
            }
        })

        calendarDelete.onclick = (e) => {
            removeClassList(dayItems,0,'isPicked')
        }
    
    }
    
    // money change section
    const navMoney = $('.nav__money');
    const moneyOption = $('.money__option');
    navMoney.onclick = (e) => {
        e.stopPropagation();
        handleDisplay(moneyOption,'floatIn','flex')
    }

    window.onclick = (e) => {
        handleHide(e.target, calendar, "fadeOut", "block", dateControl);
        handleHide(e.target, quantity, "fadeOut", "block",searchQuantity );
        handleHide(e.target, moneyOption, "floatOut", "flex");
    }
    
})();

(function handleShowBanner () {
    const banners = $$('.banner');
    const dots = $$('.banner__dot');

    dots.forEach((dot,index) => {
        dot.onclick = (e) => {
            console.log(index)
            for (let i = 0; i < banners.length ; i++) hide(banners[i]);
            display(banners[index])
            for (let i = 0; i < dots.length ; i++) hide(dots[i]);
            display(dot)
            return counter = index +1 ;
        }
    })

    let counter=0;
    setInterval( () => {
        for (let i = 0; i < banners.length ; i++) hide(banners[i]);
        display(banners[counter])
        for (let i = 0; i < dots.length ; i++) hide(dots[i]);
        display(dots[counter])
        if (counter<1) {
            counter++
        } else counter=0;
    },4000)

  
})();

function handleShowSlides (slider, numberDisplay) {
    // click next / prev
    const next = slider.querySelector('.slides__next.active');
    const prev = slider.querySelector('.slides__prev');
    const slides = slider.querySelectorAll(`.slide`);
    let counter =0;
    let max = slides.length - numberDisplay ;
    let permove = 100 / numberDisplay;

    next.onclick = () => {
        counter++;
        if (counter > 0) prev.classList.add('active') 
        if (counter === max)  next.classList.remove('active')
        slides.forEach(( slide ) => {
            if (counter===0) {slide.style.left='0px'}
            if (counter<= max) {slide.style.left=`-${counter * permove}%`}
            if (counter > max) counter = max;
        })
    }

    prev.onclick = () => {
        counter--;
        if (counter < max) next.classList.add('active')
        if (counter === 0) prev.classList.remove('active')
        slides.forEach(( slide ) => {
            if (counter===0) {slide.style.left='0px'}
            if (counter<= max) {slide.style.left=`-${counter * permove}%`}
            if (counter < 0) counter = 0;
        })
    }
}

(function handleModal () {
    const modal = $('modal')
    const bar = $('.mb-tb__nav')
    const nav = $('.modal__nav')
    const close = $('.nav__close')
    const overlay = $('.overlay')
    // DISPLAY & HIDE MODAL
    bar.onclick = () => {
        handleDisplay(modal,'fadeIn','block')
    }
    close.onclick = () => {
        modal.style.animation= `fadeOut .3s linear`;
        setTimeout(() => {
            hide(modal,'block')
        }, 280);
    }
    overlay.onclick = () => {
        modal.style.animation= `fadeOut .3s linear`;
        setTimeout(() => {
            hide(modal,'block')
        }, 280);
    }

    // DISPLAY & HIDE MONEY UNIT
    const navMoney = $('modal .nav__money')
    const moneyOption = $('modal .money__option')

    navMoney.onclick = (e) => {
        e.stopPropagation();
        moneyOption.classList.toggle('active-block')
        
    }

})()


// responsive   
const tablet = window.matchMedia("(min-width:740px) and (max-width: 1366px)");
const mobile = window.matchMedia("(max-width: 739px)");

if (tablet.matches)   {
    handleShowSlides(outstandingPlaces,3)
    handleShowSlides(eventsWrap,2)
    handleShowSlides(suggestPlaces,2)
    handleShowSlides(explorePlace,2)
    handleShowSlides(usageSection,3)
    
} else {
    handleShowSlides(outstandingPlaces,5)
    handleShowSlides(suggestPlaces,4)
    handleShowSlides(explorePlace,3)
    handleShowSlides(usageSection,5)
}

