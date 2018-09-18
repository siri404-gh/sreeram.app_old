# Closures in Javascript

#### Sep 18, 2018 by Sreeram Padmanabhan

## Case study

I got this example from W3 Schools. Lets implement a counter.

## Case 1

Lets create a global variable called counter and a function which will increment it and return it.


![closures-case-1-before](/images/closures-case-1-before.png "closures-case-1-before")

    let counter = 0;

    const add = () => {
      counter++;
      return counter;
    }

    add();
    add();
    add();

At this point, the value of the counter is 3 and it does serve our purpose. But, the problem here is that the variable is in the global lexical scope. It can be accessed by any function in the application. That can be a problem.

Lets say somone came up with a subtracting counter in a similar way. It will obviously interfere with our adder counter variable. So, we need to make it lexically scoped. This ensures that both the adder and subtractor functions use their own counter variables independent of each other.

![closures-case-1-after](/images/closures-case-1-after.png "closures-case-1-after")

## Case 2

Lets change the lexical scope to move the counter variable inside the add function.

![closures-case-2](/images/closures-case-2.png "closures-case-2")

    const add = () => {
      let counter = 0;
      counter++;
      return counter;
    }

    add();
    add();
    add();

In this case, after the 3rd call of add(), the value of the counter is 1, because its initiated on every call. So, this doesnt serve our purpose completely.

So, if there is a way to keep the variable lexically scoped, and at the same time, initiate the counter to 0 only once, it will solve our problem. So how would we do that? The way to do it is by creating closures. How do we do that?

## Case 3

Write a function which will initiate a counter and return a function to increment the counter and return its value.

![closures-case-3-before](/images/closures-case-1-before.png "closures-case-3-before")

    const add = () => {
      let counter = 0;
      return () => {
        counter++;
        return counter;
      }
    };

Change it to a self invoking function so that the counter is initiated and add becomes a function the purpose of which is to increment the counter.

    const add = (() => {
      let counter = 0;
      return () => {
        counter++;
        return counter;
      }
    })();

By this point, after invoking itself, add becomes a function which will increment a counter which had been initiated previously by the function enclosing it. The interesting thing here is that add still has access to the variable counter. This is because of closures. By enclosing it inside a self invoking function, we created a closure which you can imagine to be something like an enclosure within which there is a counter variable and an add function which keeps incrementing the counter and returning it.

![closures-case-3-after](/images/closures-case-3-after.png "closures-case-3-after")

Call add() 3 times.

    add();
    add();
    add();

And the value is 3.