// import using require

const Shape = require("./shape");

// declare class


// export class using module.exports
const Shape=require('./shape');
class Circle extends Shape
{
    constructor()
    {
        super();
    }
    calculateArea()
    {
        console.log("area with color:"+this.color);
        return 3.14*5*5;
    }
}
module.extends=Circle;