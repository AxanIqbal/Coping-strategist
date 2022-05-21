import React, { useRef } from 'react';
import './views.css';
import Box from '../Components/Box';

function ChangePasswordRequest() {
  // const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  // const navigate = useNavigate();
  const handleSubmit = () => {
    // setLoading(true);
    // e.preventDefault();
    // try {
    // setLoading(true);
    //   resetPassword(emailRef.current.value).then(() => {
    //     toast.success('Email send, PLease check your mail', {
    //       position: 'top-center',
    //       autoClose: 5000,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //     setLoading(false);
    //     navigate('/login');
    //   }).catch((e) => {
    //     toast.error('Email was not send please try again!', {
    //       position: 'top-center',
    //       autoClose: 5000,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //     setLoading(false);
    //   });
    // } catch (e) {
    //   toast.error('Email was not send please try again', {
    //     position: 'top-center',
    //     autoClose: 5000,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // setLoading(false);
    // }
  };

  return (
    <div>
      <Box showHeading heading="Forgot password?">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <p className="heading">Registered Email</p>
            <input type="email" ref={emailRef} className="inputContainer" />
          </div>
          <button type="submit" className="signinButton" style={{ marginTop: '25px' }}>
            Send Email
          </button>
        </form>
      </Box>
    </div>
  );
}

export default ChangePasswordRequest;
