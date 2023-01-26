import mongoose, {model, Schema} from 'mongoose'


const TrackSchema = new mongoose.Schema({
	name:{type:String, required:true},
	artist:{type:String, required:true},
	text:{type:String, required:true},
	picture:{type:String, required:true},
	audio:{type:String, required:true},
	listens:{type:Number, required:true},
	author:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
	comments:[{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}],
	username:{type:String}


},
{timestamps:true})

export default mongoose.model("Track", TrackSchema)