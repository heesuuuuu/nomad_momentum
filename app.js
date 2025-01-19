// const hellos = document.getElementsByClassName('hello');
//const title = document.getElementsByTagName('h1');


// querySelector는 데이터 많을 수 있지만 첫번째 값만 가져온다
//const title = document.querySelector('.hello h1')
// 값 전체를 가져오고 싶다면 selectorAll을 사용한다
const title = document.querySelectorAll('.hello h1')
console.log(title)