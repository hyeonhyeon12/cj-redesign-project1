const swiper = new Swiper('.swiper', {
  loop: true, 
  slidesPerView: 1, 
  spaceBetween: 10, // 슬라이드 간격
  centeredSlides : true, //가운데 정렬

  // 자동 재생
  autoplay: {
    delay: 5000, // 5초
    disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
  },

  // 페이지 사용할 경우 설정
  pagination: {
    el: '.swiper-pagination',
   // type: 'fraction', // 지우면 `bullet` 기본값, 'fraction', 'progressbar' 선택 가능
    // clickable: true // 지우면 `false` 기본값, 불릿 클릭해서 이동 가능
  },

  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

AOS.init();