const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// 111.5

alert(
    integers.sort((a, b) => a-b).filter(c => c<20).map(d => (d*1.5)-1).reduce((e,f) => e+f)
)