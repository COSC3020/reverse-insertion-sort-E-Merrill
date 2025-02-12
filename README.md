# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

##Complexity of the Reverse Insertion Sort

The complexity of the Reverse Insertion Sort ends up being $T(n) \in \theta(n^2)$  
This is because the best case complexity of insertion sort (reversed or not) is linear, or n.  
In the worst case, the complexity is n^2 due to having to go over every element as many times as there are elements.  
In the average case, roughly half of a given array is sorted, which is linear (n). Then the sort will have to look over every element half as many times as there are elements in the array.  
Mathematically, this ends up becoming $n * \frac{n}{2}$  which becomes $\frac{n^2}{2}$  
$\frac{1}{2}$ is just a constant and has no bearing on the asymptotic complexity, so the final average-case complexity of the reverse insertion sort ends up being:  
$T(n) \in \theta(n^2)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

