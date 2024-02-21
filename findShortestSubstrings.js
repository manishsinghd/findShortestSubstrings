function findShortestSubstrings(s, x) {
    let y=x
    let p=[]
    let c=""
    for(i=0;i<s.length;i++){
        if(s[i] == s[y-1]){
            m=(y-1)-1
            for(j=i;j<=m+1;j++){
                p.push(s[j])
               
            }
            c=p.join(" ")
            console.log(c)
            p.length=0
            
        }           
        else if(c.length==0 && i==s.length-1){
            i=0
            x++
            y=x-1
            if(c.length==0){
                console.log("not-found")
                return
            }
            
           
        }   
       
        y++;

    }

   
   
}
let s = "abccdbacca";
let x = 7;
console.log("x =", x);
findShortestSubstrings(s, x);