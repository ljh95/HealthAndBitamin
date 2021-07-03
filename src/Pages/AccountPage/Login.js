import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../AccountPage/Login.scss';

function Login() {
  const [userForm, setUserForm] = useState({ userId: '', userPw: '' });
  const history = useHistory();

  // input userId, userPw
  const handleChange = e => {
    e.preventDefault();

    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  // login
  const goToMain = async () => {
    const response = await fetch('http://18.116.64.187:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: userForm.userId,
        password: userForm.userPw,
      }),
    });

    const data = response.json();

    if (response.ok) {
      localStorage.setItem('token', JSON.stringify(data['ACCESS_TOKEN']));
      history.push('/');
    } else {
      console.log(data);
    }
  };

  // signin
  const goToMembership = () => {
    this.props.history.push('/signup');
  };

  return (
    <div className="loginHome">
      <div className="loginIcon">
        <div className="loginKo">
          <h2 className="nameLogin">로그인</h2>
        </div>
        <div className="idPwMom">
          <div className="idPw">
            <div className="idPwBig">
              <div className="idBox">
                <div className="idKo">아이디</div>
                <div>
                  <input
                    className="writeId"
                    type="text"
                    name="userId"
                    placeholder="아이디"
                    value={userForm.userId}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pwBox">
                <div className="pwKo">비밀번호</div>
                <div>
                  <input
                    className="writePw"
                    type="password"
                    name="userPw"
                    value={userForm.userPw}
                    onChange={handleChange}
                    placeholder="비밀번호"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={
                  userForm.userId.includes('@') && userForm.userPw.length > 5
                    ? `loginBtBox onColor`
                    : `loginBtBox offColor`
                }
                onClick={goToMain}
              >
                로그인
              </button>
            </div>
          </div>
          <div className="searchBox">
            <div className="searchId">
              <a href="/" className="searchIdBox">
                아이디 찾기
              </a>
            </div>
            <div>|</div>
            <div className="searchPw">
              <a href="/" className="searchPwBox">
                비밀번호 찾기
              </a>
            </div>
          </div>
          <div className="yet">
            <p className="general">
              아직 제너럴브랜즈의 회원이 아니신가요?
              <br />
              <span className="service">
                회원가입하고 다양한 혜택과 서비스를 이용해보세요!
              </span>
            </p>
            <button className="memberBt" onClick={goToMembership}>
              <h4>회원가입</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
