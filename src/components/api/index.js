/*user login*/
// export const login = async (username, password) => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/auth/login", {
//             method: 'POST',
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log(result);
//         return result;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }


// export const login = fetch('https://fakestoreapi.com/auth/login',{
//             method:'POST',
//             body:JSON.stringify({
//                 username: "mor_2314",
//                 password: "83r5^_"
//             })
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))