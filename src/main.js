import react from 'react';
import reactDOM from 'react-dom';
import * as R from 'ramda';

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 11, 12, 13, 14, 15, 16];

const arr3 = R.union(arr1, arr2);

console.log(arr3);
