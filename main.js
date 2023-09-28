let tom = new Cat("tom", 15, 20);
let jerry1 = new Mouse("jerry1", 3, 3);
let jerry2 = new Mouse("jerry2", 5, 3);
let jerry3 = new Mouse("jerry3", 3, 30);

jerry1.mouseAction("chít chít");
tom.catAction("meo meo");

let mouseArray = [jerry1, jerry2, jerry3];

for (let i = 0; i < mouseArray.length ; i++) {
    tom.catEatMouse(mouseArray[i])
}