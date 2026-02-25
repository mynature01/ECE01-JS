// console.log("Hello World");
//         let a = 10;
//         console.log(a);
//         console.log(typeof(a));
//         a=false;
//         console.log(a);
//         console.log(typeof(a));
//         a="Hello World";
//         console.log(a);
//         console.log(typeof(a));
//         a=null;
//         console.log(a);
//         console.log(typeof(a));

        const sym1 = Symbol(4);
        console.log(sym1);
        const sym2 = Symbol(4);
        console.log(sym2);
        if(sym1==sym2){
            console.log("true");
        }
        else{
            console.log("false")
        }
        