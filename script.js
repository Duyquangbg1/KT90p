let answer1 = document.getElementById('1');
let answer2 = document.getElementById('2');
let answer3 = document.getElementById('3');
let determine = document.getElementById('btn-determine');
let label = document.getElementById('label');
let des = document.getElementById('des');
let feature = document.getElementById('feature');

determine.addEventListener('click', result);

function result() {
    if (answer1.value == 'b' && answer2.value == 'a' && answer3.value == 'b') {
        let name = "human";
        feature.innerHTML = "You are a human living on Earth";
        label.innerHTML = "<h2>Your are a human</h2>";
        des.innerHTML = "<img src='./img/" + name + ".jpg' width='200px'>";
    }
    else if (answer1.value == 'a' && answer2.value == 'b' ) {
        let name = "alien";
        feature.innerHTML = "You are a special creature";
        label.innerHTML = "<h2>Your are an alien</h2>";
        des.innerHTML = "<img src='./img/" + name + ".jpg' width='200px'>";
    }
    else{
        let name = "bizarre";
        feature.innerHTML = "Undefined";
        label.innerHTML = "<h2>we dont know what kind of your species</h2>";
        des.innerHTML = "<img src='./img/" + name + ".jpg' width='200px'>";
    }
}