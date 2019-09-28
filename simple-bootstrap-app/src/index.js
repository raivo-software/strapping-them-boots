import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './extensions';

ReactDOM.render(<App />, document.getElementById('root'));


const number = [ 10, 2 , 24, 51, 24, 9];
const sum = number.sum();
console.log('sum', sum);

const average = number.average();
console.log('average', average);

const getMaterialAlpha = (obj) => obj.material.alpha;
const result = getMaterialAlpha.safeCall({});
console.log('result', result);

const match1 = number.find(x => x < 0);
const match2 = number.findOrDefault(x => x < 0, -Infinity);


console.log('matches', match1, match2);