class Cat {
    name;
    weight;
    speed;
    sound;
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    catAction (sound) {
        this.sound = sound;
        document.write(this.sound + "<br>");
    }
    catEatMouse (mouse) {
        if (this.speed >= mouse.speed) {
            if (mouse.isLive()) {
                this.weight += mouse.weight;
                document.write(`Mèo bắt được chuột ${mouse.name} <br>`);
                document.write(`Cân nặng của mèo: ${this.weight} <br>`);
                mouse.die();
            }
        } else {
            document.write(`Mèo không bắt được chuột ${mouse.name}<br>`);
        }
    }

}