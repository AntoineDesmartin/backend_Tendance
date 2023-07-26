
import { Schema, model } from 'mongoose';

const MarkerSchema = new Schema({
  nickname: String,
  name: String,
  latitude: Number,
  longitude: Number,
});

const Marker = model('markers', MarkerSchema);

export default Marker;