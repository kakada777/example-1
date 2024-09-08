$(document).ready(() => new Controller());
    
    class Controller {
        constructor() {
            this.view = new View();
            this.data = new Data();
            this.data1 = new Data();
            this.data2 = new Data();
            this.BindEvent();
        }


        BindEvent() {
            this.view.drawCard(this.data.data);

            this.view.addEventClickOnBtnAll(e => {
                this.view.drawCard(this.data.data);
            })

            this.view.addEventClickOnBtnMale((e) => {
                let male = this.data.data.filter(v => v.Type == "male");
                this.view.drawCard(male);
            })

            this.view.addEventClickOnBtnFemale((e) => {
                let female = this.data1.data1.filter(v => v.Type != "male");
                this.view.drawCard(female);
            })
            this.view.addEventClickOnBtnKids((e) => {
                let kids = this.data2.data2.filter(v => v.Type != "male");
                this.view.drawCard(kids);
            })
        }
    }

    class View {
        constructor() {
            this.data = new Data();;
            this.data1 = new Data();;
            this.data2 = new Data();;

        }

        drawCard(data) {
            let html = "";
            data.map(v => {
                html += `
                    <div>
                         <img class="h-auto max-w-full rounded-lg" src="${v.Image}" alt="">
                    </div>
                `
            })

            $(".draw-card").html(html);
        }


        addEventClickOnBtnAll(callBack) {
            $("#all").click(e => callBack(e));
        }

        addEventClickOnBtnMale(callBack) {
            $("#male").click(e => callBack(e));
        }

        addEventClickOnBtnFemale(callBack) {
            $("#female").click(e => callBack(e));
        }
        addEventClickOnBtnKids(callBack) {
            $("#kids").click(e => callBack(e));
        }
    }

    class Data {
        constructor() {
            this.data = [
                {
                    Name: "Nike Air",
                    Type: "male",
                    price : '50$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                },
                {

                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '45$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '29$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '61$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '61$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '76$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '55$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '32$',
                    Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                },
            ]
        this.data1 = [
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '27$',
                Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            },
            {

                Name: "Blood Test Tub",
                Type: "female",
                price : '30$',
                Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '33$',
                Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '60$',
                Image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '75$',
                Image: "./girl shoes/girl3.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '39$',
                Image: "./ img index/pic6.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '24$',
                Image: "./girl shoes/girl4.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '26$',
                Image: "./ img index/pic8.png"
            },
            
        ]
        this.data2 = [
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./kid shoes/kids1.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '13$',
                Image: "./kid shoes/kids2.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '20$',
                Image: "./kid shoes/kids3.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '25$',
                Image: "./kid shoes/kids4.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '26$',
                Image: "./kid shoes/kids5.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '10$',
                Image: "./kid shoes/kids6.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '30$',
                Image: "./kid shoes/kids7.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./kid shoes/kids8.png"
            },
        ]
    }
}
function myfucntion(){
    alert("Thank you for support");
}
// model
// document.getElementById("button").addEventListener("click",function(){
//     document.querySelector(".popub").style.display ="flex";
// });
// document.querySelector(".close").addEventListener("click",function(){
//     document.querySelector(".popub").style.display ="none";
// });

// document.getElementById("button1").addEventListener("click",function(){
//     document.querySelector(".popub1").style.display ="flex";
// });
// document.querySelector(".close1").addEventListener("click",function(){
//     document.querySelector(".popub1").style.display ="none";
// });

// document.getElementById("button2").addEventListener("click",function(){
//     document.querySelector(".popub2").style.display ="flex";
// });
// document.querySelector(".close2").addEventListener("click",function(){
//     document.querySelector(".popub2").style.display ="none";
// });
//main shoes



