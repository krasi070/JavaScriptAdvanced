function orderRectangles(rectangles) {
    let rectangleObjects = rectangles.map(r => createRectangle(r));
    rectangleObjects = rectangleObjects.sort((a, b) => a.compareTo(b));

    return rectangleObjects;

    function createRectangle(args) {
        let rectangle = {
            width: args[0],
            height: args[1],
            area: () => rectangle.width * rectangle.height,
            compareTo: function (other) {
                return other.area() - rectangle.area() || other.width - rectangle.width;
            }
        };

        return rectangle;
    }
}