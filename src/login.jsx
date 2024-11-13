// import React, { useState } from 'react';
// import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom';
// import { TextField, Container, Box } from '@mui/material';
// import './login.css';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmail = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePassword = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <Box style={{paddingBottom:"350px",background:"transparent"}}>
//             <br />
//             <br />
//             <Container maxWidth='xs' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 'auto',background:"transparent" }}>
//                 <img className="logo" style={{background:"transparent"}} src="https://cdn-icons-png.flaticon.com/128/711/711979.png" alt="logo" />
//                 <h1 className="peek" style={{background:"transparent"}}>PeekPicks</h1>
//             </Container>
//             <br />
//             <div className="login-container1">
//                 <h1 style={{background:'transparent'}}><center style={{background:'transparent'}}>Login</center></h1>
//                 <form onSubmit={handleSubmit} style={{background:'transparent'}}>
//                     <TextField required label="Email" value={email} style={{background:'transparent'}} variant="outlined" size="small" onChange={handleEmail}
//                         sx={{ marginBottom: '10px',marginLeft: '4px',width: '290px',borderRadius: '25px',
//                             background:'transparent',
//                             '& .MuiInputBase-root': {
//                                 borderRadius: '25px',
                            
//                             },
//                             '& .MuiInputLabel-root': {
//                                 color: 'lightblack', // Default label color
//                                 '&.Mui-focused': {
//                                     color: 'black', // Label color when focused
//                                 },
//                             },
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: '25px',
//                                 '& fieldset': {
//                                     borderColor: 'lightblack',
//                                     borderWidth: '2px',
//                                     borderRadius: '25px',
//                                 },
//                                 '&:hover fieldset': {
//                                     borderColor: 'black',
//                                 },
//                                 '&.Mui-focused fieldset': {
//                                     borderColor: 'black',
//                                     borderWidth: '2px',
//                                     borderRadius: '25px',
//                                 },
//                             },
//                         }}
//                     />
//                     <br />
//                     <br />
//                     <TextField
//                         required
//                         type="password"
//                         value={password}
//                         label="Password"
//                         variant="outlined"
//                         size="small"
//                         onChange={handlePassword}
//                         sx={{
//                             marginLeft: '4px',
//                             width: '290px',
//                             marginBottom: '10px',
//                             borderRadius: '25px',
//                             '& .MuiInputBase-root': {
//                                 borderRadius: '25px',
//                                 backgroundColor: 'none',
//                             },
//                             '& .MuiInputLabel-root': {
//                                 color: 'lightblack',
//                                 '&.Mui-focused': {
//                                     color: 'black', 
//                                 },
//                             },
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: '25px',
//                                 '& fieldset': {
//                                     borderColor: 'lightblack',
//                                     borderWidth: '2px',
//                                     borderRadius: '25px',
//                                 },
//                                 '&:hover fieldset': {
//                                     borderColor: 'black',
//                                 },
//                                 '&.Mui-focused fieldset': {
//                                     borderColor: 'black',
//                                     borderWidth: '2px',
//                                     borderRadius: '25px',
//                                 },
//                             },
//                         }}
//                     />
//                     <br />
//                    <Link to='/home'> <button class="button2" type="submit">Login</button></Link>
//                     <div className="links" style={{backgroundColor:"transparent"}}>
//                         <p style={{backgroundColor:"transparent"}}>Don't have an account? <Link to='/register'><a className="link" href="/register" style={{background:'transparent'}}>Register</a></Link></p>
//                     </div>
//                 </form>a
//             </div>
//         </Box>
//     );
// };

// export default LoginPage;



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { TextField, Container, Box } from '@mui/material';
import axios from 'axios';
import './login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message

        try {
            // GET request to fetch users from db.json
            const response = await axios.get('http://localhost:3003/users'); // Assuming your users are stored at this endpoint

            const users = response.data;
            // Check if a user with the provided email and password exists
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                console.log('Login successful:', user);
                navigate('/home'); // Redirect to home page after successful login
            } else {
                setErrorMessage('Invalid email or password. Please try again.'); // Show error message
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setErrorMessage('An error occurred while trying to log in.'); // Show error message
        }
    };

    return (
        <Box style={{ paddingBottom: "350px", background: "transparent" }}>
            <br />
            <br />
            <Container maxWidth='xs' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 'auto', background: "transparent" }}>
                <img className="logo" style={{ background: "transparent" }} src="https://cdn-icons-png.flaticon.com/128/711/711979.png" alt="logo" />
                <h1 className="peek" style={{ background: "transparent" }}>PeekPicks</h1>
            </Container>
            <br />
            <div className="login-container1">
                <h1 style={{ background: 'transparent' }}><center style={{ background: 'transparent' }}>Login</center></h1>
                <form onSubmit={handleSubmit} style={{ background: 'transparent' }}>
                    <TextField
                        required
                        label="Email"
                        value={email}
                        variant="outlined"
                        size="small"
                        onChange={handleEmail}
                        sx={{
                            marginBottom: '10px', marginLeft: '4px', width: '290px', borderRadius: '25px',
                            background: 'transparent',
                            '& .MuiInputBase-root': {
                                borderRadius: '25px',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'lightblack',
                                '&.Mui-focused': {
                                    color: 'black',
                                },
                            },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                '& fieldset': {
                                    borderColor: 'lightblack',
                                    borderWidth: '2px',
                                    borderRadius: '25px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                    borderWidth: '2px',
                                    borderRadius: '25px',
                                },
                            },
                        }}
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        type="password"
                        value={password}
                        label="Password"
                        variant="outlined"
                        size="small"
                        onChange={handlePassword}
                        sx={{
                            marginLeft: '4px',
                            width: '290px',
                            marginBottom: '10px',
                            borderRadius: '25px',
                            '& .MuiInputBase-root': {
                                borderRadius: '25px',
                                backgroundColor: 'none',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'lightblack',
                                '&.Mui-focused': {
                                    color: 'black',
                                },
                            },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                '& fieldset': {
                                    borderColor: 'lightblack',
                                    borderWidth: '2px',
                                    borderRadius: '25px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                    borderWidth: '2px',
                                    borderRadius: '25px',
                                },
                            },
                        }}
                    />
                    <br />
                    <button className="button2" type="submit">Login</button>
                    <p style={{ color: 'red' , fontWeight:'normal',textAlign:"center" ,fontSize:"15px",paddingBottom:"10px",backgroundColor: "transparent"}}>{errorMessage}</p> {/* Error message display */}
                    <div className="links" style={{ backgroundColor: "transparent" }}>
                        <p style={{ backgroundColor: "transparent" }}>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </Box>
    );
};

export default LoginPage;
