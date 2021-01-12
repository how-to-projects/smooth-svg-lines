
const points = [];
const length = 10;

animate = () => {

const repeat = (fn, n) => Array(n).fill(0).map(fn);
const rand = () => Math.floor((Math.random() * 200) + 1);
const puzzle = n => repeat(() => repeat(rand, n), n);

console.log(puzzle);

    // for (let i = 0; i < length; i++) {
    //     const nums = [random, random];
    //     points.push(nums);
    // }

    // console.log(points);
    // document.querySelectorAll('svg circle')
    // .forEach((c,i) => c.setAttribute('cy', 50 + Math.sin(performance.now() / 1000 + i) * 25))
}
// setInterval(animate,1);

animate();

// random =  Math.floor(Math.random() * 200);
