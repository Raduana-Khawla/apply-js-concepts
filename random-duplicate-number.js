const selected = []
for (let i = 0; i<20; i++){
    const random = Math.random()*100;
    const picked = Math.round(random);
    if(selected.indexOf(picked) ==-1){
        selected.push(picked);
    }
        else{
            console.log('find duplicate',selected,picked)
    }
}
console.log(selected);