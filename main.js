'use strict';
// 스크롤시 네비바 내리기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbarHeight : ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar_dark');
  } else {
    navbar.classList.remove('navbar_dark');
  }
});

// 네비바 메뉴 클릭시 섹션으로 이동
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// 토글 버튼
const navbarToggleBtn = document.querySelector('.navbar_toggle_btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// contactme 버튼 활성화
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// 홈 섹션 투명하게
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow_up btn
const arrowUp = document.querySelector('.arrow_up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// arrow up 버튼 클릭시 맨 위로 이동
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// 프로젝트 버튼
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.works_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // 이전 버튼 선택 제거후 새로 선택
  const active = document.querySelector('.category_btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter == '*' || filter == project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim_out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// const sectionID = ['#home', '#about', '#skills', '#work', '#contact'];

// const sections = sectionID.map((id) => document.querySelector(id));
// const navItems = sectionID.map((id) =>
//   document.querySelector(`[data-link="${id}"]`)
// );

// let selectedNavItem = navItems[0];
// const observerOptions = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.3,
// };

// const observerCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     console.log(entry.target);
//     const index = sectionID.indexOf(`#${entry.target.id}`);
//     let selectedIndex;
//     if (entry.boundingClientRect.y < 0) {
//       selectedIndex = index + 1;
//     } else {
//       selectedIndex = index - 1;
//     }
//     selectedNavItem.classList.remove('active');
//     selectedNavItem = navItems[selectedIndex];
//     selectedNavItem.classList.add('active');
//   });
// };
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// sections.forEach((section) => observer.observe(section));
