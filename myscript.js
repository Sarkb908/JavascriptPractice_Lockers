var lockers = []; //var for lockers
for (var i =0; i < 100; i++){
    console.log(i)
    lockers[i] = 1;   
}
//for loop for all students
for (var x = 0; x < 100; 1++){
    if lockers[i] == 1){
       lockers[i] = 0;
    }else{
        lockers[i] = 1;
        } 
        i = i+x;
    }
    console.log(x+1);
    console.log(lockers);

}
var openlockers = []; //var for lockers
for (var i; i=0; i<100; i++){
    console.log(i)
    openlockers[i]=1; //openlockers[i]==1 locker is open
}
//open all lockers

for(var i = 0; i<100; i++){
    if (i%2!=0){//
        openlockers[i]=0;}
}
//close all odd lockers

for(var i=2; i<100; i=i+3){//skip first two lockers and go up by 3
    if (openlockers[i]==0){
        openlockers[i]=1;
}else {
    openlockers[i]=0;
}}

var totalclosed;
totalclosed=0;

for(var i = 0; i < 100; i++){
if (openlockers[i]==0){
totalclosed++;}}

function pythagoreanthm(a, b){
var c;
c=a*a;
c=c+(b*b);
c=Math.sqrt(c);
return c;}
