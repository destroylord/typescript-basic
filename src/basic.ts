let isDone :boolean = false;

// number
let deciman :number = 6;
let big :bigint = 100n;

// string
let fullName :string = "Dafrin Maulana"
let sentence :string = `Hello my name is ${fullName}`

// array
let list :number[] = [1, 2, 3];
let listNumber :Array<number> = [4,5,6];

// tuple
let x :[string, number]
x = ["Dafrin", 10]

// enum
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}
let colorName :Color = Color[2]
console.log(
    colorName
); //output Green

// unknow
let notSure :unknown = 4
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;

// any
let looselyTyped :any = {};
// let d  = looselyTyped.a.b.c.d;


// void
function warnUser() :void {
    console.log("this is my warning message");
}
warnUser();

// null and undifined
let u :undefined = undefined;
let n :null = null;

// never
function error(message: string): never {
    throw new Error(message);
}

// object
function create(o:object | null | undefined) :void{
    create({
        prop :0
    }),
    create(null),
    create(undefined)
}