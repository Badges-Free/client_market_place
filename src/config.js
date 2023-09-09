

const config = {
    // url : "http://localhost:8080/",
 url : "https://seyhashop.onrender.com/"
}

module.exports = config;


// export async function fetchApiData(method, endpoint, data = null) {
//     try {
//       const options = {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any other headers you need
//         },
//         body: data ? JSON.stringify(data) : undefined,
//       };
  
//       const response = await fetch(`${BASE_URL}/${endpoint}`, options);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const responseData = await response.json();
//       return responseData;
//     } catch (error) {
//       throw error;
//     }
//   }