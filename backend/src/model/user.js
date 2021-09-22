const mongoose  = require('mongoose');
const validator = require('validator');
const bcrypt    = require('bcryptjs')
const jwt       = require('jsonwebtoken');


const userSchema = mongoose.Schema({
  username :{
    type: String,
    required : true,
    trim : true
  },
  email:{
    type : String,
    unique : true,
    required : true,
    trim : true,
    lowercase : true,
    validate (value){
        if (!validator.isEmail(value)){
          throw new Error ('Email is invalid');
        }
    }
  },
  password:{
    type : String,
    trim : true,
    validate(value){
        if(value.toLowerCase().includes('password')){
            throw new Error('the password cannot contain password')
        }
        if(value.length < 6){
            throw new Error('the password should be greater than six characters');
        }
    }
  },
  department:{
      type: String,
      required: true,
      trim:true
  },
  role:{
      type:String,
      required: true,
      trim:true
  },
  tokens:[{
    token :{
    type: String,
    required : true,
    }}],
    avatar : {
      type: Buffer
    }
     
},{
  timestamps : true
})


userSchema.methods.toJSON = function (){
  let user = this;
  let userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
}

userSchema.methods.generateAuthToken = async function (){
  let user = this;
  let token = jwt.sign({_id: user._id.toString()},process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({token});
  await user.save(); 
  return token;
}

userSchema.statics.findUserByCredentials = async (email,password) => { 
  let user = await User.findOne({email});
  console.log('0011',user);
  if(!user) {
    throw new Error("Unable to Login");
  } 

  let isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch){
    throw new Error("Unable to Login");
  }
  return user;
}

//hash the password before saving it to the database
userSchema.pre('save', async function(next){
 let user = this;

 if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password,8);
 }

 next();
})

  


const User = mongoose.model('User',userSchema);

module.exports = User