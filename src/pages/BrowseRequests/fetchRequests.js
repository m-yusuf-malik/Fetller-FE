// import axios from "axios";
// import { useState } from "react";

// const fetchAllRequests = async () => {
//   const [requests, setRequets] = useState(null);
//   const [isloading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState(null);

//   try {
//     setIsLoading(true);

//     const response = await axios.get(`${process.env.DOMAIN}/requests`, {
//       headers: {
//         Authorization: `Bearer ${a}`,
//       },
//     });

//     const data = response.json();
//     setRequets(data);
//   } catch (errors) {
//     setErrors(errors);
//   } finally {
//     setIsLoading(false);
//   }

//   return { requests, isloading, errors };
// };

// export default fetchAllRequests;
