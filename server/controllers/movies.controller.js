const db=require('../models/index');
exports.movie_create=(req,res)=>{
    console.log('we are movie create')
    console.log(req.body)

        let movie=new db.Movies({
            moviename:req.body.moviename,
            movieboughtdate:req.body.movieboughtdate,
            genre:req.body.genre,
            duration:req.body.duration,
            year:req.body.year
    })
    movie.save().then(result=>{
        console.log('Saved>>',result)
        res.status(201).json({message:"Something went wrong"})
    }).catch(err=>{
        console.log(err)
        res.status(500).json({error:"Something went wrong"})
    })
}


exports.movie_delete= (req,res)=>{
    console.log('We are deleting now',req.body)
    var ar=[ "godzilla", "The Quite Place","Godliz"]
    try{
     ar.forEach(element => {
        console.log(element)
         db.Movies.findOneAndDelete({moviename:element})
         .then(result=>{
             console.log("deleted",result)
             res.status(200).json({message:"Deleted"})
         }).catch(err=>{
             console.log(err)
             res.status(500).json({error:"Something Went Wrong"})
         })
     });
    }catch(err){
        console.log(err)
    }
    }

exports.movie_update = async function(req,res){
    try{
        const updateMovie = await db.Movies.findOneAndUpdate();
        return res.status(200).send("Movie has been updated successfully");
    }catch(err){
        return res.status(400).send("This Movie doesn't exist")
    }
}
exports.movie_details = function (req,res){
    
}

exports.movie_list=(req,res)=>{
    db.Movies.find()
    .then(result=>{
       console.log(result)
       
       res.status(200).send(result)
    })
    .catch(err=>{
       console.log(err)
       res.status(500).json({error:"Something Went Wrong"})
    })
};