'use strict';

// const poll = {
//   question: 'What is your favourite programming language?',

//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     // Weird as shit way of doing this
//     // typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//     if (isNaN(answer) || answer < 0 || answer > 3) {
//       console.log('ERR: Please enter a valid number.');
//       return;
//     }
//     this.answers[Number(answer)] += 1;

//     this.displayResults('array');
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type == 'array') {
//       console.log(this.answers);
//     } else {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] });

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
