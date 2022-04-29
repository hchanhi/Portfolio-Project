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
  scrollIntoView(link);
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
  projects.forEach((project) => {
    if (filter == '*' || filter == project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
