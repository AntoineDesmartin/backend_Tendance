
import express, { Request, Response } from 'express';
var indexRouter = express.Router();
const uid2 = require("uid2");
const bcrypt = require("bcrypt");
const { checkBody } = require("../modules/checkBody");

import Marker from '../models/user';

indexRouter.post("/places", (req: Request, res: Response) => {
  // console.log(req.body);
  // if(checkBody(req.body,["/places","/places"])){
  //   console.log('ok');
  // }
  // const newMarker = new Marker({
  //   nickname: req.body.nickname,
  //   name: req.body.name,
  //   latitude: req.body.latitude,
  //   longitude: req.body.longitude,
  // });
  
  // newMarker.save().then((data:object) => {
  //   console.log(data);
  //   res.json({ result: true });
  // });
});


interface DataItem {
  nickname?: string;
  name?: string;
  latitude?: number;
  longitude?: number;
}



indexRouter.get("/places/:nickname", (req : Request, res : Response) => {
  Marker.find({ nickname: req.params.nickname }).then((data:DataItem[]) => {
    if (data) {
      let test :DataItem[]= [];
      for(let i=0;i<data.length;i++){
          let obj: DataItem ={ nickname: data[i].nickname, name: data[i].name, latitude: data[i].latitude, longitude: data[i].longitude };
          test.push(obj);
      }
      res.json({ result: true, places: test });
    } else {
      res.json({ result: false });
    }
  });
});


export { indexRouter };
