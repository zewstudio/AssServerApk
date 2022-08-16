// var express = require('express');
// var router = express.Router();
// var mongoose_ = require('mongoose')
// const {Schema} = require("mongoose");
// var mongoose_1 = require('mongoose')

// const uri = "mongodb+srv://zewdatabase:ijoXgdmQ0NCyg9DO@zewgame.urb3i.mongodb.net/assignment?retryWrites=true&w=majority";
// mongoose_.connect(uri).catch(err => console.log('Co Loi Xay Ra'))
// const uri1 = "mongodb+srv://zewdatabase:ijoXgdmQ0NCyg9DO@zewgame.urb3i.mongodb.net/Lab6?retryWrites=true&w=majority";
// mongoose_1.connect(uri1).catch(err => console.log('Co Loi Xay Ra'))
// const ImageBox = mongoose_.model('images',new Schema({
//       _title: String,
//       _content: String,
//       _tag: String,
//       _timeUpload: String,
//       _linkIMG: String
// }))
// const WallPapers = mongoose_1.model('wallpapers',{
//   description: String,
//   link: String,
//   categoryid: String,

// })
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   ImageBox.find({},function (error,result){
//     if(error) throw error;
//     res.render('index', { title: 'Assignment-Home',data:result });
//   });
// });
// router.get('/index', function(req, res, next) {

//   ImageBox.find({},function (error,result){
//     if(error) throw error;
//       res.render('index', { title: 'Assignment-Home',data:result });
//   });
// });
// router.get('/testshow/', function(req, res, next) {
//     const id = req.query.id
//     ImageBox.findOne({_id:id},function (error,result){
//         if(error) throw error;
//         res.render('testshow', { title: 'Assignment-Home',data:result });
//     });
// });
// router.get('/delete/', function(req, res, next) {
//     const id = req.query.id
//     ImageBox.deleteOne({_id:id},function (error,result){
//         if(error) throw error;
//        res.send("Xoa Thanh Cong"+`<a href='/index'>Ấn vào đây để quay trở lại Home -.- </a>`);
//     });
// });
// router.post('/update_one',function (req,res){
//     const id = req.query.id;
//     var title_get = req.body.title_;

//     var tag_get = req.body.tag_;

//     var content_get = req.body.content_;
//     var linkIMG_get = req.body.link_;
//     var today_ = new Date();
//     var timeUpload_get = (today_.getHours())+"h : "+(today_.getMinutes())+"' [ "+(today_.getDay())+"-"+(today_.getMonth())+"-"+(today_.getFullYear())+" ]";
//     if(content_get.length<150)
//     {
//         res.send("Nội Dung phải lớn hơn 150 kí tự"+`<a href='`+"/testshow/?id="+id+`' style='text-decoration: none;font-size: 30px ;margin: 10px' > Quay Lại -.- </a>`);
//         return;
//     }
//     if(linkIMG_get.lastIndexOf(".jpg")<0&&linkIMG_get.lastIndexOf(".png")<0&&linkIMG_get.lastIndexOf(".gif")<0)
//     {
//         res.send("link định sai định dạng vui lòng sử dụng link online có đuôi .jpg , .png hoặc .gif"+`<a href='`+"/testshow/?id="+id+`' style='text-decoration: none;font-size: 30px ;margin: 10px' > Quay Lại -.- </a>`);
//         return;
//     }
//     var newValue = {
//         $set:{_title: title_get , _content: content_get , _tag : tag_get , _timeUpload: timeUpload_get , _linkIMG:linkIMG_get}
//     };
//     ImageBox.updateOne({_id:id},newValue,function (err){
//        if(err) throw err;
//        ImageBox.find({_id:id},function (error,result){
//            if (error) throw error;
//            res.send("Cập Nhập Thành Công "+`<a href='/index' style='text-decoration: none;font-size: 30px ;margin: 10px' >Ấn vào đây để quay trở lại Home -.- </a>`);

//        })
//     });
// })
// router.get('/insert',function (req,res,next){
//     res.render('insertdata.ejs',{title:'Assignment-Insert'});
// });
// router.post('/insert/',function (req,res){

//     var title_get = req.body.title_;

//     var tag_get = req.body.tag_;

//     var content_get = req.body.content_;
//     var linkIMG_get = req.body.link_;
//     var today_ = new Date();
//     var timeUpload_get = (today_.getHours())+"h : "+(today_.getMinutes())+"' [ "+(today_.getDay())+"-"+(today_.getMonth())+"-"+(today_.getFullYear())+" ]";
//     if(content_get.length<150)
//     {
//         res.send("Nội Dung phải lớn hơn 150 kí tự"+`<a href='/insert' style='text-decoration: none;font-size: 30px ;margin: 10px' >quay trở lại -.- </a>`);
//         return;
//     }
//     if(linkIMG_get.lastIndexOf(".jpg")<0&&linkIMG_get.lastIndexOf(".png")<0&&linkIMG_get.lastIndexOf(".gif")<0)
//     {
//         res.send("link định sai định dạng vui lòng sử dụng link online có đuôi .jpg , .png hoặc .gif"+`<a href='/insert' style='text-decoration: none;font-size: 30px ;margin: 10px' >quay trở lại -.- </a>`);
//         return;
//     }
//     var newValue = {
//         _title: title_get , _content: content_get , _tag : tag_get , _timeUpload: timeUpload_get , _linkIMG:linkIMG_get
//     };
//     ImageBox.insertMany([newValue],function (error,result){
//         if(error) throw error;
//         res.send("Thêm Thành Công "+`<a href='/index' style='text-decoration: none;font-size: 30px ;margin: 10px' >Ấn vào đây để quay trở lại Home -.- </a>`);
//     });




// })
// router.get('/getData', function(req, res, next) {

//     ImageBox.find({},function (error,result){
//         if(error) throw error;
//         res.send(result);
//     });
// });
// router.get('/test',function (req,res,next){
//   ImageBox.find({},function (error,result){
//     if(error) throw error;
//     res.send("Title: "+result[0]._title+"\n  --  Content :"+result[0]._content+"\n  --  tag: "+result[0]._tag[0] + "\n   --  Time: "+result[0]._timeUpload +"\n   --- Link: "+result[0]._linkIMG);
//   });
// })
// router.get('/getData78', function(req, res, next) {

//   WallPapers.find({},function (error,result){
//     if(error) throw error;
//     res.send(result);
//   });
// });
// router.post('/insert78/',function (req,res){
//   var descriptionG = req.body.descriptionz;
//   var linkG = req.body.linkz;
//   var categoryidG = req.body.categoryidz;
//   WallPapers.insertMany([{description:descriptionG,link:linkG,categoryid:categoryidG}],function (error,dataz){
//     // res.send("Thanh Cong")
//     res.send(descriptionG+" -- "+linkG+" -- "+categoryidG);
//   })
//   // res.send(descriptionG+" -- "+linkG+" -- "+categoryidG);

// })

// module.exports = router;
var express = require('express');
const {request} = require("express");
var router = express.Router();
var multer = require('multer');
var mongoose_ = require('mongoose')
const {Schema} = require("mongoose");
const uri = "mongodb+srv://zewdatabase:ijoXgdmQ0NCyg9DO@zewgame.urb3i.mongodb.net/ph17958?retryWrites=true&w=majority";
mongoose_.connect(uri).catch(err => console.log('Co Loi Xay Ra'))

const ontap = mongoose_.model('baithi',new Schema({
  "_title" : String,
  "_content":String,
  "_baiviet":String,
  "_fileName":String,
}))


var storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null,'public/uploads');
  },
  filename: function (req,file,cb){
    if(file.length==0)
    {
      cb(new Error("File Không Hợp lệ hoặc chưa có gì"));
      return
    }else {
      var imgLink = ((new Date().getDate())+Math.random()+file.originalname);
      setImglink(imgLink);

      cb(null,imgLink);
    }


  },
});
var upload = multer({
  storage:storage,
  limits:{fileSize: 2 * 1024 * 1024},
  fileFilter: function (req,file,cb){
   var TenFile = file.originalname;
   var kichThuoc = file.length;
   if(kichThuoc==0){
     cb(new Error("File Khong Hop Le "+`<a href='/index'>Quay Lại</a>`),false);
   }
   if(TenFile.toString().indexOf('.jpg')>-1){
     cb(null,true);
   }else {
     cb(new Error("Duoi File Phai La .jpg "+`<a href='/index'>Quay Lại</a>`),false);
   }
   if(TenFile.length==0){
     cb(new Error("File Khong Hop Le "+`<a href='/index'>Quay Lại</a>`),false);

   }
  }
}).single('file')
//.array('file',3);
var imagelink;
function setImglink(text)
{
    imagelink = text;
}
var listData=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/insert', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/insert/', upload,function(req, res, next) {
  var title_ = req.body.title;
  var content_ = req.body.content;
  var baiviet_ = req.body.baiviet;
  if(imagelink==null)
  {
    res.send("File ko hop le"+`<a href='/index' > Return </a>`);
      return;
  }
  var filename ="/uploads/"+imagelink;
  console.log(req.body.file)


  if(title_.length==0||content_.length==0||baiviet_.length==0)
  {


        res.send("Không được để trống"+`<a href='/index' > Return </a>`);
        return;
  }
  var dataz = {
    "_title" : title_,
    "_content":content_,
    "_baiviet":baiviet_,
    "_fileName":filename,
  }
  console.log(filename);
  upload(req,res,function (err){
    if(err instanceof multer.MulterError)
    {
      res.send("Co Loi Xay Ra")
    }else {
      ontap.insertMany([dataz],function (error){
        if (error) throw error;
        ontap.find({},function (err,result){
          if (err) throw error;
            res.render('showitem',{datas:result})
        })
      })
      // res.render('showitem',{datas:listData})
    }
  })

  // res.send(""+listData);
  // console.log(listData)
});
router.get('/show',function (req,res){
  ontap.find({},function (error, result){
    if(error) throw error;
    res.render('showitem',{datas:result})
  })
})
router.get('/delete/', function(req, res, next) {
  var id = req.query.id;
  ontap.deleteOne({_id:id},function (error){
    if (error) throw error;
    res.send("Delete Thanh Cong"+`<a href='/index'>Quay Lai home</a>`)
  })
});
router.get('/show/search',function (req,res){
  var nhanHieu = req.query.search;
  if(nhanHieu.length==0)
  {
    ontap.find({},function (error, result){
      if (error) throw error;
      res.render('showitem',{datas:result,textNH:nhanHieu});
    })
  }else {
    ontap.find({_nhanHieu: nhanHieu},function (error, result){
      if (error) throw error;
      res.render('showitem',{datas:result,textNH:nhanHieu});
    })
  }

})
router.get('/getList',function (req,res){
  ontap.find({},function (error, result){
    if(error) throw error;
    res.send(result);
  })
})
module.exports = router;

