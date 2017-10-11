 const mongoose = require('mongoose')
 const Message = mongoose.model('Message')
 
 module.exports = app => {
    app.get('/', function(req,res){
        Message.find().populate('comments').exec(function(err,messages){
            if(err){
                res.redirect('/')
            }
            res.render('index',{messages})
        })
    })


    app.post('/comment',function(req,res){
        let newComment= new Comment(req.body)
        // console.log(newComment._id)
        // temp = Message.findOne({_id:req.body._messageID},function(err,message){
            // console.log(message)
        // })
        
        Message.findOne({_id:req.body._messageID},function(err,message){
            message.comments.push(newComment._id)
            message.save()
        })
        newComment.save(function(err){
            if(err){
                console.log(`
                
                `)
                console.log(err)
            }
            res.redirect('/')
        })
    })

    app.post('/message',function(req,res){
        let myMessage = new Message(req.body)
        myMessage.save(function(err){
            if(err){
                console.log(err)
            }else{
                res.redirect('/')
            }   
        })
        
    })
}