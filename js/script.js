let books=[
  {id:1,name:"1984",description:"بقلم جورج أورويل: رواية ديستوبية تروي قصة مجتمع تحت حكم الدكتاتورية الشمولية",img:"./images/pro1.jpg",price:"140$",quantity:1},
  {id:2,name:" الجلد الأبيض",description:"قلم هيرمان ملفيل: رواية تدور حول قصة حب مستحيلة بين رجل وامرأة من عرقين مختلفين في الولايات المتحدة",img:"./images/pro3.jpg",price:"200$",quantity:1},
  {id:3,name:"فهرنهايت 451",description:"بقلم راي برادبري: رواية خيال علمي تستكشف عالمًا حيث يتم حرق الكتب",img:"./images/pro2.jpg",price:"240$",quantity:1},
  {id:4,name:"الأجنحة المتكسرة",description:"بقلم خليل جبران: رواية تحكي قصة صداقة متينة بين صبيين في أفغانستان وتتناول موضوعات الخيانة والتضحية",img:"./images/pro4.jpg",price:"140$",quantity:1},
  {id:5,name:"مئة عام من العزلة",description:"بقلم غابرييل غارسيا ماركيز: رواية واقعية سحرية تروي قصة عائلة بوينديا في قرية معزولة",img:"./images/pro5.jpg",price:"230$",quantity:1},
  {id:6,name:"حول العالم في 80 يومًا",description:"بقلم جول فيرن: رواية مغامرات تحكي قصة فيكتوريا فيلكس ورحلته حول العالم في مهلة زمنية ضيقة",img:"./images/pro6.jpg",price:"470$",quantity:1},
  {id:7,name:"الف ليلة وليلةلأندلسي",description:"مجموعة من الحكايات العربية الشهيرة التي تروى بواسطة شهرزاد لإنقاذ حياته",img:"./images/pro7.jpg",price:"440$",quantity:1},
  {id:8,name:"الرحيق المختوم",description:"بقلم سفيان السوداي: كتاب يتحدث عن سيرة حياة النبي محمد صلى الله عليه وسلم",img:"./images/pro8.jpg",price:"310$",quantity:1},
  {id:9,name:"جريمة وعقاب",description:"بقلم فيودور دوستويفسكي: رواية تحكي قصة روديون راسكولنيكوف وجريمته وعقابه",img:"./images/pro9.jpg",price:"240$",quantity:1},
  {id:10,name:"الهوبيت",description:"بقلم ج. ر. ر. تولكين: رواية خيالية تدورحول مغامرة بيلبو باغنز في عالم الهوبيتات والأقزام.",img:"./images/pro10.png",price:"300$",quantity:1},
  {id:11,name:"الفيل الأزرق",description:"بقلم أحمد مراد: رواية تدور حول قصة حب وجريمة في مصر المعاصرة",img:"./images/pro11.jpg",price:"340$",quantity:1},
  {id:12,name:"الألفية الثانية",description:"بقلم يوفال نوح هاراري: كتاب يستكشف تأثير التكنولوجيا والتطور البشري على مستقبل البشرية.",img:"./images/pro12.jfif",price:"300$",quantity:1},
]
let loginBtn = document.getElementById("loginbtn")
let registerBtn = document.getElementById("registerbtn")
function validation(){
  let validationStore = JSON.parse(localStorage.getItem("validation"))
  if(validationStore === false ||validationStore === null){
    window.location = "login.html"; 
    
  }else{
   
     
    loginBtn.style.display = "none"
    registerBtn.style.display = "none"
  }
     
  }
  validation()
function logout(){
  localStorage.setItem("validation",false)
  validation()
    
}
let chosenCart = [];

function addtoCart(id) {
  let existingProduct = chosenCart.find((key2) => key2.id === id);

  if (existingProduct) {
    chosenCart.forEach((product) => {
      if (product.id === id) {
        product.quantity++;
      }
    });
  } else {
    let product = books.find((key) => key.id === id);
 
    chosenCart.push(product);
  }

  console.log(chosenCart);
  localStorage.setItem("userCart", JSON.stringify(chosenCart));
}
function run(){
  validation()
var container = document.getElementById("container")
books.map((key)=>{
    container.innerHTML +=`<div  class="col-lg-4 col-md-6">
    <div class="card">
      <img src="${key.img}" class="card-img-top" alt="Card Image">
      <div class="card-body">
        <h5 class="card-title">${key.name}</h5>
        <p class="card-text">${key.description}</p>
        <h6 class="card-price">${key.price}</h6>    
        <button onclick="addtoCart(${key.id})"    id="key-${key.id}" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div> ` 
  // let add = document.getElementById(`key-${key.id}`)

})

}


run()






