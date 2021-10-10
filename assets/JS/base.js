const render = {
    outstanding : [
        {
            id: 1,
            img: './assets/img/outstanding-1.png',
            name: 'TP. Hồ Chí Minh',
            quantity : 1878 ,
        }, 
        {
            id: 2,
            img: './assets/img/outstanding-8.png',
            name: 'Hà Nội',
            quantity : 2543 ,
        }, 
        {
            id: 3,
            img: './assets/img/outstanding-3.png',
            name: 'Đà Lạt',
            quantity : 1478 ,
        }, 
        {
            id: 4,
            img: './assets/img/outstanding-4.png',
            name: 'Đà Nẵng',
            quantity : 478 ,
        }, 
        {
            id: 5,
            img: './assets/img/outstanding-5.png',
            name: 'Nha Trang',
            quantity : 629 ,
        }, 
        {
            id: 6,
            img: './assets/img/outstanding-6.png',
            name: 'Quảng Ninh',
            quantity : 478 ,
        }, 
        {
            id: 7,
            img: './assets/img/outstanding-7.png',
            name: 'Hội An',
            quantity : 178 ,
        }, 
        {
            id: 8,
            img: './assets/img/outstanding-2.png',
            name: 'Vũng Tàu',
            quantity : 778 ,
        }, 
    
    ],
    suggestions : [
        {
            id: 1,
            img : './assets/img/suggest-1.jpeg',
            heading: ' VI VU NGOẠI THÀNH HÀ NỘI',
            description: 'Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội'
        },
        {
            id: 2,
            img : './assets/img/suggest-2.jpeg',
            heading: ' VŨNG TÀU BIỆT THỰ HỒ BƠI',
            description: 'Những căn biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu'
        },
        {
            id: 3,
            img : './assets/img/suggest-3.jpeg',
            heading: ' HÀ NỘI NỘI THÀNH LÃNG MẠNG',
            description: 'Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội'
        },
        {
            id: 4,
            img : './assets/img/suggest-4.jpeg',
            heading: ' SÀI GÒN CẦN LÀ CÓ NGAY',
            description: 'Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng'
        },
        {
            id: 5,
            img : './assets/img/suggest-5.jpeg',
            heading: ' BỂ BƠI & BBQ',
            description: 'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng.'
        },
        {
            id: 6,
            img : './assets/img/suggest-6.jpeg',
            heading: ' SIÊU GIẢM GIÁ ',
            description: 'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.'
        },
        {
            id: 7,
            img : './assets/img/suggest-7.jpeg',
            heading: 'GẦN TRUNG TÂM ',
            description: 'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh'
        }
    ],
    explores: [
        {
            id: 1,
            img: './assets/img/explore-1.jpeg',
            heading: '5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh',
            topic: 'Thông tin homestay'
        },
        {
            id: 2,
            img: './assets/img/explore-2.jpeg',
            heading: 'Du lịch Cần Thơ nhất định phải ghé thăm những địa điểm này',
            topic: 'Thông tin homestay'
        },
        {
            id: 3,
            img: './assets/img/explore-3.jpeg',
            heading: 'Khám phá 5 resort sang chảnh tại khu du lịch Hồ Tràm',
            topic: 'Thông tin khách sạn'
        },
        {
            id: 4,
            img: './assets/img/explore-4.jpeg',
            heading: '3 resort " thiên đường " tại Côn Đảo cho 1 kì nghỉ tuyệt vời',
            topic: 'Thông tin homestay'
        },
        {
            id: 5,
            img: './assets/img/explore-5.jpeg',
            heading: 'Dịch vụ khách sạn kì lạ nhất trên thế giới ',
            topic: 'Thông tin khách sạn'
        },
        {
            id: 6,
            img: './assets/img/explore-6.jpeg',
            heading: 'Khách sạn tại Thổ Nhĩ Kì xứng đáng với danh hiệu khách sạn sang chảnh nhất thế giới',
            topic: ''
        },
    ],
    usage : [
        {
            id: 1,
            img : './assets/img/usage-1.jpeg'
        },
        {
            id: 2,
            img : './assets/img/usage-2.jpeg'
        },
        {
            id: 3,
            img : './assets/img/usage-3.jpeg'
        },
        {
            id: 4,
            img : './assets/img/usage-4.jpeg'
        },
        {
            id: 5,
            img : './assets/img/usage-5.jpeg'
        },
        
    ]
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body');

// ---------------RENDER 
const outstandingPlaces = $('.outstanding__place');
const eventsWrap = $('.events-wrap');
const suggestPlaces = $('.suggestion__place');
const explorePlace = $('.explore__slider');
const usageSection = $('.usage__slider');
render.outstanding.forEach( (place) => {
    outstandingPlaces.innerHTML += `
    <div class="col l-2-4 m-4 c-5 outstanding__place-item slide">
        <div class="outstanding__img-wrap">
            <img src="${place.img}" alt="" class="outstanding_img ">
        </div>
        <div class="outstanding__info">
            <h4 class="outstanding__name">${place.name}</h4>
            <p class="outstanding__quantity">
                <b>${place.quantity}</b>
                Chỗ ở
            </p>
        </div>
    </div>
    `
})

render.suggestions.forEach( (suggestion) => {
    suggestPlaces.innerHTML += `
    <a href="" class="col l-3 m-6 c-11 suggestion__item slide">
        <div class="suggestion__img">
            <img src="${suggestion.img}" alt="">
        </div>
        <div class="suggestion__info">
            <h4 class="suggestion__heading">${suggestion.heading}</h4>
            <p class="suggestion__description">
                ${suggestion.description}
            </p>
        </div>
    </a>
    
    `
})

render.explores.forEach( (explore) => {
    explorePlace.innerHTML += `
    <a href="" class="col l-4 m-6 c-11 explore__item slide">
        <div class="explore__img">
            <img src="${explore.img}" alt="">
        </div>
        <div class="explore__topic">${explore.topic.toUpperCase()} </div>
        <div class="explore__heading">${explore.heading}</div>
    </a> 
    `
})

render.usage.forEach( (usage) => {
    usageSection.innerHTML += `
    <a href="" class="col l-2-4 m-4 c-11 usage__item slide">
        <div class="usage__img">
            <img src="${usage.img}" alt="">
        </div>
    </a> 
    `
})





// ---------------- BASE FUNCTION
function display(element,displayName) {
    if (!displayName) {return element.classList.add('active')}
    else return element.classList.add(`active-${displayName}`)
}

function hide(element,displayName) {
    if (!displayName) {return element.classList.remove('active')}
        else return element.classList.remove(`active-${displayName}`)
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function handleDisplay(element, animationName, displayName, headerBtn) {
    element.style.animation= `${animationName} 0.2s linear`;
    if (headerBtn) headerBtn.classList.add('isClicked');
    display(element,displayName);
}

function handleHide (target, element, animationName, displayName, headerBtn) {
    if (!target.closest(`${element.className}`)) {
        element.style.animation= `${animationName} 0.3s linear`;
        setTimeout(() => {
            hide(element,displayName)
        }, 280);
    }
    if (headerBtn) headerBtn.classList.remove('isClicked')
}

function removeClassList (elements, start, className) {
    for ( let i = start; i < elements.length; i++) 
        elements[i].classList.remove(`${className}`)
}

function addClassList (elements, start, end , className) {
    for ( let i = start; i <= end; i++) 
        elements[i].classList.add(`${className}`)
}   