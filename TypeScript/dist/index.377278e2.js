//Union types
const dog = {
    //should have at least all fields of one object for union types
    //intersection types should have all unique plus common properties
    name: "Trevor",
    barks: true,
    likes: "bones"
};
function sum2(a, b) {
    if (typeof a === "number" && typeof b === "number") return a + b;
    return a.toString() + b.toString();
}
// console.log(sum2('Mark', null)) // throws error
let sum3 = (a, b)=>{
    return a + b;
};
let Types;
(function(Types) {
    Types["national"] = "national";
    Types["academic"] = "academic";
    Types["public"] = "public";
})(Types || (Types = {}));

//# sourceMappingURL=index.377278e2.js.map
