const color = ["green", "red", "yellow", "blue", "orange",];
function colorpick(string, array){
     for(let i = 0; i < array.length; i++){
        if(string == array[i]){
            return console.log(array[i], 'найден');
        }
     }
}
let str = "orange"
colorpick(str, color)

