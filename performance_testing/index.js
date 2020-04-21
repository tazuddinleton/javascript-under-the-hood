let dict = {};
for (var i = 1001; i < 19991; i++) {
    dict[i] = true;
}

function run() {

    let start = new Date().getTime();
    // for (i in dict) {
    //     console.log(dict[i]);
    // }
    Object.keys(dict).forEach(x => console.log(dict[x]));
    let end = new Date().getTime();
    console.log(end - start);
}

run(10)

//Object.keys(dict).forEach(x => console.log(dict[x]));
