
# Exercise #5: More closures

Create a folder in class-7 called exercise-5. Create the necessary files in this folder to solve the exercise.

Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

    function parent(x) {
    return function closure() {
        // Closure is declared here.
        return x;
    };
    }

    const remember = parent("remembers me");
    // Seems like the variable x would be gone after
    // parent is executed, but it's not.

    closure(); // WRONG, the global scope doesn't have access to its inner scopes and the closure method
    // Returns "remembers me" because the inner
    // function remembers x.

**Aim:** Fix this code so it ultimately prints 'remembers me'.