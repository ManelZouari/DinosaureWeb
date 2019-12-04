const Friend = require('../models/friend');
const Dinoseure = require('../models/dinosaure');

exports.addFriend = (req, res, next)=> {
    
  Dinoseure.findOne({login: req.body.friend}).then(
    (friend) => {

      Friend.findOne({login: req.body.login,friend: req.body.friend}).then(
        (oldfriend) => {

          if (oldfriend!=null){
         
            res.status(201).json({
                  
              message: 'friend already exist!'
            });}


      else{
      
      
      console.log('found it')

      
      const newfriend = new Friend({
          login: req.body.login,
          friend: req.body.friend
        }
  
      );

      
  console.log(friend)
  if(friend!=null){
      newfriend.save().then(
          () => {
              res.status(201).json({
                  
                message: 'friend added successfully!'
              });
            }
  
      ).catch(
          (error) => {
            
            res.status(400).json({
              error: error
            });
          }
        );}
else{
        res.status(201).json({
                  
          message: 'Dinoseure doesnt exist!'
        });}}}
      

    

  ).catch( (error) => {
    console.log('not found it')
    res.status(400).json({
      error: error
    });
  });


}  
).catch();};



 




  

exports.getFriends = (req, res, next)=> {

  console.log(req.params);

    Friend.find({login: req.params.login}).then(
      (friend) => {
        console.log(friend);
        res.status(200).json(friend);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


  exports.allFriends = (req, res, next)=> {

    Friend.find().then(
      (friend) => {
        res.status(200).json(friend);
      }
    ).catch(
      (error) => {
          
        res.status(400).json({
          error: error
        });
      }
    );
  };


  
  exports.deleteFriend = (req, res, next)=> {
    Friend.deleteOne({login:req.params.login,friend: req.params.friend}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };