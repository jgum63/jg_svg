

class Shape{

    constructor(fill = "green"){
        this.fill = fill;
    }

}

class Circle extends Shape{

    constructor(fill, radius){

        super(fill)
        this.radius = radius
    }

    render(){

        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`

    }

}

class Triangle extends Shape{



}

class Square extends Shape{



}