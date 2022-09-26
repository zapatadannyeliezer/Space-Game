function initCanvas(){
    let ctx = document.getElementById('my_canvas').getContext('2d');
    let backgroundImage = new Image();
    let naveImage       = new Image(); // nave
    let enemiespic1     = new Image(); // enemigo 1
    let enemiespic2     = new Image(); // enemigo 2

    // backgroundImage y naveImage
    backgroundImage.src = "images/background-pic.jpg"; //Background picture
    naveImage.src       = "images/spaceship-pic.png"; //Spaceship picture
    // Enemigos fotos
    enemiespic1.src     = "images/enemigo1.png";
    enemiespic2.src     = "images/enemigo2.png"; //Enemies picture
    
    // width and height (canvas)
    let cW = ctx.canvas.width; // 700px 
    let cH = ctx.canvas.height;// 600px

    // template for naves
    let enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }
    let enemis = [
        new enemyTemplate({id: "enemy3", x: 350, y: 50, w: 80, h: 30})
    ]

    var renderEnemies = function(enemyList){

        for(let i = 0; i < enemyList.length; i++){
            let enemy = enemyList[i];
            ctx.drawImage(enemy.image, enemy.x, enemy.y += .5, enemy.w, enemy.h);
        }
    }

     function launcher(){
        this.y = 500, 
        this.x = cW*.5-25, 
        this.w = 100, 
        this.h = 100,   
        this.direccion, 
        this.bg="white", 
    this.misiles = [];

        this.render = function(){
            ctx.fillstyle = this.bg;
            ctx.drawImage(backgroundImage, 10, 10);
            ctx.drawImage(naveImage, this.x, this.y, 100, 90);
        }
   }  

    //let Launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        //Launcher.render();
        renderEnemies(enemis);
    }

    let animateIntervale = setInterval(animate, 6);

}

window.addEventListener('load', function(event) {
    initCanvas();
});