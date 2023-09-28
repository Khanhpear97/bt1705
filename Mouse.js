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
    getStatus () {
        if (this.status) {
            alert("Chuột sống");
        } else {
            alert("Chuột chết");
        }
    }
    die () {
        this.status = false;
    }
    noDie () {
        this.status = true;
    }
    mouseAction (sound) {
        this.sound = sound;
        document.write(this.sound + "<br>");
    }

    isLive() {
        return this.status;
    }
}