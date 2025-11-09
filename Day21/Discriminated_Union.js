function area(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return shape.width * shape.height;
    }
}
