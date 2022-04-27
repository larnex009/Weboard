// const APIController = (function() {

//     const clientid = '';
//     const clientSecret = '';

//     // private methods 
//     const _getToken = async () => {

//          const result = await fetch('https://jimbex.github.io/webboard/africa100.json',{
//             method: "POST",
//             headers: {
//                 'Content-Type' : 'application/x-www-formurlencoded',
//                 'Authorization' : 'Basic ' + btoa(clientid + ':' + clientSecret)
//                 },
//                  body: 'grant_type=client_credentials'
//         });

//             const data = await result.json();
//             return data.access_token;
//         }
//         const _getsongs = async (token) => {

//             const data = await fetch{'https://jimbex.github.io/webboard/africa100.json}
//                 const result 
//                 method: 'GET',
//                 headers: {'Authorization' : 'Bearer'}
//             }
    
//         })();
//     })()

let items ;
Promise.all([
	fetch("https://jimbex.github.io/webboard/africa100.json"),
	fetch("https://jimbex.github.io/webboard/africapic.json")
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	
 let op = data[0].map((e,i)=>{
  let temp = data[1].find(element=> element.rank === e.rank)
  if(temp.image) {
    e.image = temp.image;
  }
  return e;
})
console.log(op);
 
const html = op.map(user=>{
    
    return`
    <div class="card ">
    <div class="row">
    <div class="col-6 d-flex">
        <div class="col-2">
            <h5> ${user.rank}</h5>
            <small>
                <i class="bi bi-arrow-up text-success Fw-bold h5"></i>
            </small>                    
        </div>
        <div class="col-10">
            <h6> ${user.song}</h6>
            <small> ${user.artist}</small>
        </div>
    </div>
    <div class="col-6">
        <div class="row list">
            <div class="col-2"> ${user.rank}</div>
            <div class="col-2">
                <h6>
               
                </h6>
            </div>
            <div class="col-2">
                <h6>
                    1
                </h6>
            </div>
            <div class="col-2">
                <h6>
                ${user['Previous week']}
                </h6>
            </div>
            <div class="col-2">
                <h6>
                ${user["weeks on chart"]}
                </h6>
            </div>

            <div class="col-2">
                            <img src=${user.image} class="img-fluid"
                                 alt="">
                        </div>
            </div>
           
           </div>
        </div>
    </div> `   
  })
  .join("")
document.querySelector(".card1").insertAdjacentHTML("beforeend", html)
   
   



//    async function myFetchimg( ){
//     let response =await fetch("https://jimbex.github.io/webboard/africapic.json")
//     const images = await response.json();
//     return images;
//     }
//     myFetchimg().then(images =>{ 
//           const img = images.map(pic=>{
        
//         return`
//         <div  class="col-2">
//         <img src=${pic.image} class="img-fluid"
//         alt="">
//         </div
//         `   
//       })
//       .join("")
//     document.querySelector(".card1").insertAdjacentHTML("beforeend", img)
//        })
    





}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});