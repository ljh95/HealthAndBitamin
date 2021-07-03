import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../AccountPage/SignUp.scss';

function SignUp() {
  const [formData, setFormData] = useState({
    id: '',
    pw: '',
    phone: '',
    email: '',
    name: '',
    gender: false,
    birth: '',
  });

  const history = useHistory();

  const signUp = async () => {
    const response = await fetch('http://18.116.64.187:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        division: true,
        account: formData.id,
        email: formData.email,
        name: formData.name,
        password: formData.pw,
        phone_number: formData.phone,
        gender: formData.gender,
        date_of_birth: formData.birth,
      }),
    });

    const data = response.json();

    if (response.ok && data.MESSAGE === 'SUCCESS') {
      history.push('/login');
    } else {
      console.log(data.MESSAGE);
    }
  };

  const change = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="home">
      <div className="icon">
        <div className="signUp">
          <h2>
            <strong>회원 가입</strong>
          </h2>
        </div>
        <table className="type">
          <tr>
            <div className="memberColor">
              <td className="division">회원구분*</td>
            </div>
            <td className="memberShip">
              <label htmlFor="ownMember">
                <input className="own" name="button" type="radio" />
                개인회원
              </label>
              <label htmlFor="companyMember">
                <input className="company" name="button" type="radio" />
                사업자회원
              </label>
            </td>
          </tr>
        </table>
        <div className="inform">
          <div className="informBox">
            <h3>기본정보</h3>
          </div>
          <div className="idBox">
            <div className="oneBox">
              <table className="idPw">
                <tr>
                  <td className="idColor">
                    <div>아이디*</div>
                  </td>
                  <td className="idEnglish">
                    <input
                      className={
                        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.id)
                          ? 'id valid'
                          : 'id notValid'
                      }
                      name="id"
                      type="text"
                      onChange={change}
                    />
                    <div className="english">(영문소문자/숫자,4~16자)</div>
                  </td>
                </tr>
              </table>
            </div>
            <table>
              <tr>
                <td className="pwColor">
                  <div className="pwKo">비밀번호*</div>
                </td>
                <td className="pwBox">
                  <input
                    className={
                      /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/.test(
                        formData.pw
                      )
                        ? 'pw valid'
                        : 'pw notValid'
                    }
                    name="pw"
                    type="password"
                    onChange={change}
                  />
                  <div className="pwEnglish">
                    (영문 대소문자/숫자/특수문자 중 2가지 이상 조합,8자~16자)
                  </div>
                </td>
              </tr>
            </table>
            <div className="write">
              <table>
                <tr>
                  <td className="writeName">
                    <div className="name">이름*</div>
                  </td>
                  <td className="naming">
                    <input
                      className="nameBox"
                      name="name"
                      type="text"
                      onChange={change}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="phoneBox">
              <table>
                <tbody>
                  <tr>
                    <td className="writePhone">
                      <div className="phoneKo">휴대전화*</div>
                    </td>
                    <div className="callingBox">
                      <td className="calling">
                        <div className="submit">
                          <input
                            className="phone"
                            type="tel"
                            name="phone"
                            onChange={change}
                          />
                        </div>
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="emailBox">
              <table>
                <tbody>
                  <tr>
                    <td className="writeEmail">
                      <div className="emailKo">이메일*</div>
                    </td>
                    <td>
                      <div className="writing">
                        <input
                          className="email"
                          type="email"
                          name="email"
                          onChange={change}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="addInform">
          <h3>추가정보</h3>
        </div>
        <table className="plus">
          <tr>
            <div className="genderBox">
              <div className="gender">
                <td>
                  <div className="other">성별*</div>
                </td>
              </div>
            </div>
            <td className="manWoman">
              <input className="Man" name="buttoni" type="radio" />
              <label htmlFor="manMember">남자</label>
              <input className="Woman" name="buttoni" type="radio" />
              <label htmlfor="womanMember">여자</label>
            </td>
          </tr>
        </table>
        <div className="bigAdd">
          <table className="addTable">
            <tr className="birthDayBox">
              <div>
                <div className="birthDay">
                  <td className="dailyBox">
                    <div className="birth">생년월일*</div>
                  </td>
                </div>
              </div>
              <td className="dailyMonth">
                <input
                  className="daily"
                  type="date"
                  name="birth"
                  onChange={change}
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="endSignup">
          <button className="memberBt" onClick={signUp}>
            <h4 style={{ color: 'white' }}>회원가입</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
