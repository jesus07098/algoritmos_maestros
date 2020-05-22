let matriz= [], dim=3;

for(let i=0;i<dim;i++){
    for(let j=0;j<dim;j++){
      j===0 ? matriz[[i][0]]=i+1 : matriz[[i][j]]= matriz[[i][j-1]]+3;
      document.write( matriz[[i][j]]+"  ");
    }
  document.write("<br>");
}
