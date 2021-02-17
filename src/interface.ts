interface labelValue {
    label :string;
}

function printLabel(labelObj:labelValue) {
    console.log(labelObj.label);
    
}

let myObj = {
    size : 10,
    label : 'Size 10 obj'
}

printLabel(myObj)