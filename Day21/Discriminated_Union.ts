type Circle = {
    kind:"circle";
    radius:number;
};

type Rectangle = {
    kind:"rectangle";
    width:number;
    height:number;
};

type Shape = Circle | Rectangle;

function area(shape:Shape):number{
    if(shape.kind === 'circle'){
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
}