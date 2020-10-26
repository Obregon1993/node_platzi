const bcrypt =require('bcrypt');

const pass = '1234Segura!';

bcrypt.hash(pass, 5, (err, hash)=>{
    //console.log(hash);

    bcrypt.compare(pass, hash, (err, res)=>{
     //   console.log(err)
        console.log(res);
    })
})