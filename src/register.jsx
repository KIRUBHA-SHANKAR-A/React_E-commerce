// import React, { useState } from 'react';
// import {BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom';
// import './register.css';
// import {TextField,InputAdornment, Container,Box} from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';

//  const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password1, setPassword1] = useState('');
//     const [password2, setPassword2] = useState('');
//     const handleEmail = (event) => {
//         setEmail(event.target.value);
//       };
//     const handlePassword1 = (event) => {
//         setPassword1(event.target.value);
//       };
//     const handlePassword2 = (event) => {
//         setPassword2(event.target.value);
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         if(password1 === password2)
//         {
//             console.log('Email:', email);
//             console.log('Password:', password1);
//         }
//         else
//         {
//             alert("Create password and Confirm password must be same");
//         }
//     };
//     return (
//         <Box style={{paddingBottom:"290px"}}>
//          <br/>
//          <br/>
//         <Container maxWidth='xs' style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',margin:'auto'}}>
//             <img class = "logo" src="https://cdn-icons-png.flaticon.com/128/711/711979.png" ></img>  
//             <h1 class ="peek">PeekPicks</h1>
//             </Container>
//          <br/>
//         <div className="login-container">
//             <h1><center>Sign Up</center></h1>
//             <form onSubmit={handleSubmit}>
//             <TextField label="Email" value={email} variant="outlined" size="small" onChange={handleEmail}
//            sx={{ marginBottom: '10px',marginLeft: '4px',width: '290px',borderRadius: '25px',
//             backgroundColor:'transparent',
//             '& .MuiInputBase-root': {
//                 borderRadius: '25px',
            
//             },
//             '& .MuiInputLabel-root': {
//                 color: 'lightblack', // Default label color
//                 '&.Mui-focused': {
//                     color: 'black', // Label color when focused
//                 },
//             },
//             '& .MuiOutlinedInput-root': {
//                 borderRadius: '25px',
//                 '& fieldset': {
//                     borderColor: 'lightblack',
//                     borderWidth: '2px',
//                     borderRadius: '25px',
//                 },
//                 '&:hover fieldset': {
//                     borderColor: 'black',
//                 },
//                 '&.Mui-focused fieldset': {
//                     borderColor: 'black',
//                     borderWidth: '2px',
//                     borderRadius: '25px',
//                 },
//             },
//         }} />

//                 <br />
//                 <br />
//                     <TextField type="password" value={password1} label="Create Password" variant="outlined" size="small" onChange={handlePassword1} sx={{fontSize:'0.05rem',marginLeft:'4px',width:'290px',marginBottom :'10px',
//           '& .MuiInputLabel-root': {
//               color: 'lightblack', // Default label color
//               '&.Mui-focused': {
//                   color: 'black', // Label color when focused
//                 },
//             },'& .MuiOutlinedInput-root': {

//                 '& fieldset': {
//                     borderColor: 'lightblack',
//                     borderWidth: '2px',
//                     borderRadius: '25px',
//             },
//             '&:hover fieldset': {
//               borderColor: 'black'
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: 'black',
//               borderWidth: '2px',
//             }}} }/>
//                 <br />
//                 <br />
//                     <TextField type="password" value={password2} label="Confirm Password" variant="outlined" size="small" onChange={handlePassword2} sx={{fontSize:'0.05rem',marginLeft:'4px',width:'290px',marginBottom :'10px',
//                '& .MuiInputLabel-root': {
//               color: 'lightblack', // Default label color
//               '&.Mui-focused': {
//                   color: 'black', // Label color when focused
//                 },
//             },'& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                     borderColor: 'lightblack',
//                     borderWidth: '2px',
//                     borderRadius: '25px',
//             },
//             '&:hover fieldset': {
//               borderColor: 'black'
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: 'black',
//               borderWidth: '2px',
//             }}} }/>
                    
            
//                 <br />
//                 <Link to='/home'> <button class="button3">Sign Up</button></Link>
//                 <div className="links">
//                     <p >Already a user?<Link to='/login'> <a class="link" href="/register">Login</a></Link></p>
//                 </div>
//             </form>
//         </div>
//         </Box>
//     );
// };

// export default Register;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './register.css';
import { TextField, Container, Box } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword1 = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format.');
      return;
    }

    // Check if passwords match
    if (password1 !== password2) {
      setErrorMessage('Passwords must match.');
      return;
    }

    // Create user data object
    const userData = {
      email,
      password: password1,
    };

    try {
      // POST request to save user details
      const response = await axios.post('http://localhost:3003/users', userData);
      console.log('Registration successful:', response.data);

      // Redirect to login or home page after successful registration
      navigate('/login'); // Change this if you want to navigate elsewhere
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <Box style={{ paddingBottom: '290px' }}>
      <br />
      <br />
      <Container maxWidth='xs' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 'auto', backgroundColor: "transparent" }}>
        <img className="logo" src="https://cdn-icons-png.flaticon.com/128/711/711979.png" alt="Logo" />
        <h1 className="peek">PeekPicks</h1>
      </Container>
      <br />
      <div className="login-container">
        <h1 style={{ backgroundColor: "transparent" }}><center style={{ backgroundColor: "transparent" }}>Sign Up</center></h1>
        <form onSubmit={handleSubmit} style={{ backgroundColor: "transparent" }}>
          <TextField
            label="Email"
            value={email}
            variant="outlined"
            size="small"
            onChange={handleEmail}
            sx={{
              marginBottom: '10px',
              marginLeft: '4px',
              width: '290px',
              borderRadius: '25px',
              backgroundColor: 'transparent',
              '& .MuiInputBase-root': { borderRadius: '25px' },
              '& .MuiInputLabel-root': { color: 'lightblack', '&.Mui-focused': { color: 'black' } },
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px',
                '& fieldset': { borderColor: 'lightblack', borderWidth: '2px', borderRadius: '25px' },
                '&:hover fieldset': { borderColor: 'black' },
                '&.Mui-focused fieldset': { borderColor: 'black', borderWidth: '2px', borderRadius: '25px' },
              },
            }}
          />
          <br />
          <br />
          <TextField
            type="password"
            value={password1}
            label="Create Password"
            variant="outlined"
            size="small"
            onChange={handlePassword1}
            sx={{
              fontSize: '0.05rem',
              marginLeft: '4px',
              width: '290px',
              marginBottom: '10px',
              '& .MuiInputLabel-root': { color: 'lightblack', '&.Mui-focused': { color: 'black' } },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'lightblack', borderWidth: '2px', borderRadius: '25px' },
                '&:hover fieldset': { borderColor: 'black' },
                '&.Mui-focused fieldset': { borderColor: 'black', borderWidth: '2px' }
              }
            }}
          />
          <br />
          <br />
          <TextField
            type="password"
            value={password2}
            label="Confirm Password"
            variant="outlined"
            size="small"
            onChange={handlePassword2}
            sx={{
              fontSize: '0.05rem',
              marginLeft: '4px',
              width: '290px',
              marginBottom: '10px',
              '& .MuiInputLabel-root': { color: 'lightblack', '&.Mui-focused': { color: 'black' } },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'lightblack', borderWidth: '2px', borderRadius: '25px' },
                '&:hover fieldset': { borderColor: 'black' },
                '&.Mui-focused fieldset': { borderColor: 'black', borderWidth: '2px' }
              }
            }}
          />
          <br />
          <br />
          <button type="submit" className="button3">Sign Up</button>
          <p style={{ color: 'red' , fontWeight:'normal',textAlign:"center" ,fontSize:"15px",paddingBottom:"10px",backgroundColor: "transparent"}}>{errorMessage}</p>
          <div className="links" style={{ backgroundColor: "transparent" }}>
            <p style={{ backgroundColor: "transparent" }}>Already a user? <Link to='/login'> <span className="link" style={{ backgroundColor: "transparent" }}>Login</span></Link></p>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Register;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import './register.css';
// import { TextField, Container, Box } from '@mui/material';
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password1, setPassword1] = useState('');
//   const [password2, setPassword2] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePassword1 = (event) => {
//     setPassword1(event.target.value);
//   };

//   const handlePassword2 = (event) => {
//     setPassword2(event.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password1 !== password2) {
//       setErrorMessage('Passwords must match.');
//       return;
//     }

//     // Create user data object
//     const userData = {
//       email,
//       password: password1,
//     };

//     try {
//       // POST request to save user details
//       const response = await axios.post('http://localhost:3002/users', userData);
//       console.log('Registration successful:', response.data);

//       // Redirect to login or home page after successful registration
//       navigate('/login'); // Change this if you want to navigate elsewhere
//     } catch (error) {
//       console.error('Registration error:', error);
//       setErrorMessage('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <Box style={{ paddingBottom: '290px' }}>
//       <br />
//       <Container maxWidth='xs' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 'auto', backgroundColor: "transparent", borderRadius: '25px', }}>
//         <img className="logo" src="https://cdn-icons-png.flaticon.com/128/711/711979.png" alt="Logo" />
//         <h1 className="peek">PeekPicks</h1>
//       </Container>
//       <br />
//       <div className="login-container">
//         <h1 style={{ backgroundColor: "transparent" }}><center style={{ backgroundColor: "transparent" }}>Sign Up</center></h1>
//         <form onSubmit={handleSubmit} style={{ backgroundColor: "transparent" }}>
//           <TextField
//             label="Email"
//             value={email}
//             variant="outlined"
//             size="small"
//             onChange={handleEmail}
//             sx={{ marginBottom: '10px', marginLeft: '4px', width: '290px', borderRadius: '25px' }}
//           />
//           <br />
//           <TextField
//             type="password"
//             value={password1}
//             label="Create Password"
//             variant="outlined"
//             size="small"
//             onChange={handlePassword1}
//             sx={{ marginBottom: '10px', marginLeft: '4px', width: '290px', borderRadius: '25px' }}
//           />
//           <br />
//           <TextField
//             type="password"
//             value={password2}
//             label="Confirm Password"
//             variant="outlined"
//             size="small"
//             onChange={handlePassword2}
//             sx={{ marginBottom: '10px', marginLeft: '4px', width: '290px', borderRadius: '25px' }}
//           />
//           <br />
//           <button type="submit" className="button3">Sign Up</button>
//           <div className="links" style={{ backgroundColor: "transparent" }}>
//             <p style={{ backgroundColor: "transparent" }}>Already a user? <Link to='/login'>Login</Link></p>
//           </div>
//           <p style={{ color: 'red' }}>{errorMessage}</p>
//         </form>
//       </div>
//     </Box>
//   );
// };

// export default Register;
