const Dinosaure = require('../models/dinosaure');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

exports.signup = (req, res, next)=> {
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        const dinosaure = new Dinosaure({
          login: req.body.login,
          password: hash,
          age: req.body.age,
          famille: req.body.famille,
          race: req.body.race,
          nourriture: req.body.nourriture
        });
        dinosaure.save().then(
          () => {
            res.status(201).json({
              error: 'Dinosaure added successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: 'login already exist!'
            });
          }
        );
      }
    );
  };


exports.login = (req, res, next)=> {
    Dinosaure.findOne({ login: req.body.login }).then(
      (dinosaure) => {
      
       
       
     
        if (!dinosaure) {
            
          return res.status(401).json({
            error: 'Dinosaure not found!'
          });
        }
        bcrypt.compare(req.body.password, dinosaure.password).then(
          (valid) => {
            if (!valid) {
                
              return res.status(401).json({
                
                error:'Incorrect password!'
              });
            }

           
            const token = jwt.sign(
              { dinosaureId: dinosaure._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
                dinosaureId: dinosaure._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  };

  exports.userProfile = (req, res, next) =>{
    Dinosaure.findOne({login:req.params.login },
        (err, dinosaure) => {
            if (!dinosaure)
               {
                    return res.status(404).json({ status: false, message: 'dinosaure record not found.' });}
            else
                return res.status(200).json({ status: true, dinosaure : _.pick(dinosaure,['login','age','famille','race','nourriture']) });
        }
    );
}

exports.getInformations = (req, res, next)=> {
    Dinosaure.find().then(
        (dinosaure) => {
           
            res.status(200).json(dinosaure);
        
        }).catch(
            (error) => {
                res.status(404).json({
                  error: error
                });
              }
        );     
    

};

exports.modifyInformations = (req, res, next)=> {

    Dinosaure.findOne({login:req.params.login },
        (err, dinosaure) => {
            if (!dinosaure)
               {
                    return res.status(404).json({ status: false, message: 'dinosaure record not found.' });}
            else{
               

                dinosaure.age=req.body.age;
                dinosaure.famille=req.body.famille;
                dinosaure.race=req.body.race;
                dinosaure.nourriture=req.body.nourriture;
              


                Dinosaure.updateOne({login:dinosaure.login},dinosaure).then(
                    () => {
                        res.status(201).json({
                          message: 'Dinosaure updated successfully!'
                        });
                      }

                    ).catch(
                        (error) => {
                          res.status(400).json({
                            error: error
                          });
                        }
                      );

            }
        }
    );

}


      