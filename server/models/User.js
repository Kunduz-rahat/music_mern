import mongoose, {model, Schema} from 'mongoose'


const UserSchema = new mongoose.Schema({
	username:{type:String, required:true},
	email:{type:String, required:true, unique:true},
	password:{type:String, required:true},
	tracks:[{type:mongoose.Schema.Types.ObjectId, ref:"Track"}],

},
{timestamps:true})

export default mongoose.model("User", UserSchema)