import React, { useEffect } from 'react';
import { LOAD_PROFILE, LOGIN_SUCCESS } from '../../redux/actionType';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';

import './loginScreen.scss';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };
  const history = useHistory();

  const handleGuest = () => {
    const obj = {
      accessToken:
        'ya29.a0ARrdaM9RhDy20NBPHWM59giWsPXPn-BG2fED1qYqgMUS1HWvs1k0-W41393LQSoKTJh755AGPTRUh_MLnW3X1moMA6JXWsgn82dfzIs54D5zniVpPMjwIGy1sX-ZGuJGiH2MkaEBxwYJEuJkVoEwsUiAefwZvcY',
      user: {
        name: 'Pravesh Vyas',
        photoURL:
          'https://lh3.googleusercontent.com/a-/AOh14Gitiijc5qslbDHlj5fRzGkfqXH2T9DN5jcgL4xqCYo=s96-c',
      },
      loading: false,
      error:
        'Firebase: The popup has been closed by the user before finalizing the operation. (auth/popup-closed-by-user).',
    };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: obj.accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: obj.user,
    });
  };

  useEffect(() => {
    if (accessToken) {
      history.push('/');
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <h2>VidTube</h2>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login With google</button>
        <p>Made using YouTube's APIs</p>
        <br />
        <button onClick={handleGuest}>Guest Login</button>
        <p className="BottomText">App needs Access to your Youtube channel</p>
        <p className="BottomText">
          Subscriptions and Comments won't work without it
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
