var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;

var player_object= "";
 var block_image_object= "";
  function player_update() 
  { fabric.Image.fromURL("player.png", function(Img) 
     { player_object = Img; player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
      player_object.set({ top:player_y, left:player_x });
       canvas.add(player_object);
     });
   } 
     function new_image(get_image) 
     { fabric.Image.fromURL(get_image, function(Img) 
        { block_image_object = Img;
             block_image_object.scaleToWidth(block_image_width);
              block_image_object.scaleToHeight(block_image_height);
               block_image_object.set({ top:player_y, left:player_x });
                canvas.add(block_image_object);
        });
      }    
  window.addEventListener("keydown", my_keydown);
  
  function my_keydown(e)
  {
     keyPressed = e.keyCode;
     console.log(keyPressed);
     if(e.shiftKey == true && keyPressed == "80")
     {
        console.log("p and shift key pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
     document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height; 
     }

     if(e.shiftKey == true && keyPressed == "77")
     {
      console.log("m and shift key pressed together");
      block_image_width = block_image_width - 10;
      block_image_height = block_image_height - 10;
      document.getElementById("current_width").innerHTML = block_image_width;
      document.getElementById("current_height").innerHTML = block_image_height; 
     }

     if(keyPressed == "38")
     {

     up();
     console.log("up");


    }  

     if(keyPressed == "40")
     {

      down();
      console.log("down");


     }

     if(keyPressed == "37")
     {

     left();
    console.log("left");


    }
    if(keyPressed == "39")
    {

    right();
    console.log("right");


    }

    if(keyPressed == "87")
    {

    new_image("wall.jpg");
    console.log("w");


     }

    if(keyPressed == "71")
    {

    new_image("ground.png");
    console.log("g");
    }
    if(keyPressed == "76")
    {

    new_image("light_green.png");
    console.log("l");
    }
    if(keyPressed == "84")
    {

    new_image("trunk.jpg");
    console.log("t");
    } 
    if(keyPressed == "82")
    {

    new_image("roof.jpg");
    console.log("r");


 
    }
    if(keyPressed == "89")
    {

    new_image("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shopdisney.co.uk%2Fdisney-store-spider-man-baby-costume-body-suit-4042049220045M.html&psig=AOvVaw3a5Lyyxx1ZwVoUyGcKBllz&ust=1617453683852000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCd4ObK3-8CFQAAAAAdAAAAABAE");
    console.log("y");


    }
     if(keyPressed == "68")
    {

     new_image("https://www.google.com/url?sa=i&url=https%3A%2F%2Fgambia.desertcart.com%2Fproducts%2F122671032-damdos-44-cm-thors-hammer-pu-foam-17-thunder-thor-hammer-pu-foam-collectors-cosplay-prop-fancy-dress-weapon&psig=AOvVaw3IBGZvi2SJV59RKUhIJNzZ&ust=1617453599311000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIil2bbK3-8CFQAAAAAdAAAAABAD");
    console.log("d");


 
    }
    if(keyPressed == "85")
    {

    new_image("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fsuperhero-sanctum-20%2Fart%2FHULK-SMASH-Incredible-Hulk-MPC-Kit-Base-Legs-747590130&psig=AOvVaw0KSKrnXP8YVFXz_N3Mpuz3&ust=1617453515848000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDDgpLK3-8CFQAAAAAdAAAAABAD");
    console.log("u");


    }
    if(keyPressed == "67")
    {

    new_image("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ca%2Fpin%2F259731103488966521%2F&psig=AOvVaw2ukeUXuzyDPUfZAXtS-tS-&ust=1617453420201000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCSpNjJ3-8CFQAAAAAdAAAAABAD");
    console.log("c");


    }
   }

   function up()
   {
        if (player_y >=0)
        {
           player_y = player_y - block_image_height;
           console.log("block image height = " + block_image_height);
           console.log("when up arrow key is pressed X = " + player_x + ",Y = "+player_y);
           canvas.remove(player_object);
           player_update();
        }
   }

   
   function down()
   {
        if (player_y <=500)
        {
           player_y = player_y + block_image_height;
           console.log("block image height = " + block_image_height);
           console.log("when up arrow key is pressed X = " + player_x + ",Y = "+player_y);
           canvas.remove(player_object);
           player_update();
        }
   }

   
   function left()
   {
        if (player_x >=0)
        {
           player_x = player_x - block_image_height;
           console.log("block image height = " + block_image_height);
           console.log("when up arrow key is pressed X = " + player_x + ",Y = "+player_y);
           canvas.remove(player_object);
           player_update();
        }
   }

   function right()
   {
        if (player_x <=850)
        {
           player_x = player_x + block_image_height;
           console.log("block image height = " + block_image_height);
           console.log("when up arrow key is pressed X = " + player_x + ",Y = "+player_y);
           canvas.remove(player_object);
           player_update();
        }
   }