let n = 20;
outer: for(let i=2; i<n; i++) {
    inner: for (let j = 1; j < n; j++) {
        while (j>1 && j<i) {
            if (i%j == 0 ) {
                continue outer;
            } else {
              continue inner;
            }
        }
    }
    console.log(i);
}

