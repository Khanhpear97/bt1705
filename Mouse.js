class Mouse {
    status;
    name;
    weight;
    speed;
    sound;
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }
    die () {
        this.status = false;
    }
    mouseAction (sound) {
        this.sound = sound;
        document.write(this.sound + "<br>");
    }

    isLive() {
        return this.status;
    }
}