var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
   {
      name: "Alps", 
      image: "https://images.squarespace-cdn.com/content/552eceffe4b0e4e51051d4d5/1570496428095-KQBBGA5M14H2HVJSBJYI/acj-0308-switzerland-mountains-2.jpg?content-type=image%2Fjpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati aut inventore, porro odio fugiat tempora qui. Eligendi, facilis minima odio, nam libero iure aliquam veniam itaque, enim aut id ipsum voluptatem earum reprehenderit expedita ut temporibus soluta. Corporis excepturi quos autem similique quisquam esse veritatis quasi facere qui laboriosam distinctio, quam accusantium veniam eaque! Labore aspernatur, delectus exercitationem voluptatem eligendi deserunt. Accusamus nulla dicta, dolorum voluptatem repellendus laborum eligendi nesciunt accusantium illo, ex dolore sequi. Expedita rerum ipsa vitae dolores consectetur vel aperiam quisquam error deleniti sit vero ex odit sed, dolorem, nam doloremque officia debitis consequatur reprehenderit nobis? Illo voluptates, tempora cupiditate voluptatem quasi quidem voluptas officia placeat sed nesciunt adipisci, minus, sapiente repudiandae molestiae blanditiis? Debitis perferendis, inventore nemo quidem ut, optio tempora hic itaque aut, ipsum ad? Alias, suscipit? Cupiditate odit vero necessitatibus excepturi esse vitae doloribus illum, atque laborum minus mollitia dolores facere possimus molestias!"
   },
   {
      name: "Mount Everest", 
      image: "https://www.suphantrek.com/wp-content/uploads/2017/12/ebc_07.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati aut inventore, porro odio fugiat tempora qui. Eligendi, facilis minima odio, nam libero iure aliquam veniam itaque, enim aut id ipsum voluptatem earum reprehenderit expedita ut temporibus soluta. Corporis excepturi quos autem similique quisquam esse veritatis quasi facere qui laboriosam distinctio, quam accusantium veniam eaque! Labore aspernatur, delectus exercitationem voluptatem eligendi deserunt. Accusamus nulla dicta, dolorum voluptatem repellendus laborum eligendi nesciunt accusantium illo, ex dolore sequi. Expedita rerum ipsa vitae dolores consectetur vel aperiam quisquam error deleniti sit vero ex odit sed, dolorem, nam doloremque officia debitis consequatur reprehenderit nobis? Illo voluptates, tempora cupiditate voluptatem quasi quidem voluptas officia placeat sed nesciunt adipisci, minus, sapiente repudiandae molestiae blanditiis? Debitis perferendis, inventore nemo quidem ut, optio tempora hic itaque aut, ipsum ad? Alias, suscipit? Cupiditate odit vero necessitatibus excepturi esse vitae doloribus illum, atque laborum minus mollitia dolores facere possimus molestias!"
   },
   {
      name: "Ural Mountains", 
      image: "https://www.indy-guide.com/system/images/57584/original/hziq2VTfUCo.jpg?1539953842",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum at dolor cupiditate, autem quaerat non, aliquid itaque, voluptatem ullam quibusdam sit aut fugiat explicabo molestias necessitatibus! Placeat voluptates nulla, sequi perspiciatis sit est quam esse ullam beatae incidunt et facilis non perferendis dolor nam neque mollitia nostrum quasi pariatur ratione quos magni! Consequatur recusandae praesentium illum repellat corrupti deserunt ducimus aspernatur quis, earum unde ratione hic ipsam quidem, dignissimos at rerum eligendi dolor voluptate quisquam velit sequi ipsa qui. Autem hic voluptate, obcaecati aspernatur dolor mollitia veritatis doloribus nostrum reiciendis at possimus laudantium aliquam facilis error cumque explicabo enim, deleniti repudiandae, assumenda qui sint nesciunt fuga. Impedit perspiciatis consequuntur facilis, esse maiores numquam, repellat aliquid id corporis error recusandae tempore perferendis magni laudantium tempora sint omnis, iure nam non explicabo reprehenderit qui! Doloremque, dignissimos? A, eligendi at tempore est odio delectus rerum aspernatur fuga deserunt ad distinctio eveniet, recusandae magnam dolorem cupiditate corrupti eius. Omnis distinctio itaque illo cupiditate molestias officia neque iste sed, sit repellat fuga, corporis, dolor blanditiis incidunt aliquam beatae pariatur voluptates? Consequuntur aspernatur in deserunt sint dolores totam veniam magnam, nesciunt quas mollitia laudantium sapiente suscipit quod accusantium vero commodi? Eaque facere modi perferendis aliquid."
   },
]

function seedDB(){
   // remove all camgrounds
   Campground.deleteMany({}, function(err){
      if(err){
         console.log(err);
      }
      console.log("remove campgrounds")
         //add a few campgrounds
      data.forEach(function(seed){
         Campground.create(seed, function(err, campground){
            if(err){
               console.log(err);
            } else {
               console.log("added a campground");
               //create a comment
               Comment.create(
                  {
                     text: "This place is great, but I wish there was internet",
                     author: "Homer"
                  }, function (err, comment){
                        if(err){
                           console.log(err);
                        } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment")
                        }
                  });
            }
         });
      });
   });
}

module.exports = seedDB;
