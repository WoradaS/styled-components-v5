import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 33px;
  background-color: #d1f3ff;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 300;
  color: #2a2a2a;
  padding: 0px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;

  ::placeholder {
    color: #2a2a2a;
  }
`;

export const TextAreaStyle = styled.textarea`
  width: 100%;
  // min-width: 100%;
  // max-width: 100%;
  max-height: 180px;
  min-height: 140px;
  height: 140px;
  border-radius: 20px;
  background-color: #d1f3ff;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 300;
  color: #2a2a2a;
  padding: 15px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;

  ::placeholder {
    color: #2a2a2a;
  }
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  background-color: #03a4ed;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-transform: capitalize;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
  border: none;
  outline: none;
  transition: all 0.3s;
  :hover {
    background-color: #fe3f40;
  }
`;

export const FormContainer = styled.form`
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
  background-color: #fff;
  padding: 60px 30px;
  border-radius: 20px;
`;

export const Column = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const Section = styled.div`
  text-align: center;
  color: #fff;
  h2 {
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 0.25px;
    position: relative;
    z-index: 2;
    line-height: 44px;
    em {
      font-style: normal;
      color: #03a4ed;
    }
    span {
      color: #fe3f40;
    }
    text-align: center;
    margin: 0px 90px 0px 90px;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }
  p {
    color: #fff;
    margin-top: 30px;
    margin-right: 0px;
    text-align: center;
  }
`;

export const PhoneInfo = styled.div`
  margin-top: 40px;
  h4 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
  span {
    a {
      color: #fff;
      font-size: 15px;
      font-weight: 400;
    }
    i {
      width: 46px;
      height: 46px;
      display: inline-block;
      text-align: center;
      line-height: 46px;
      background-color: #fff;
      border-radius: 50%;
      color: #ff3b2c;
      font-size: 22px;
      margin-left: 30px;
      margin-right: 15px;
    }
  }
`;

export const ContactUsContainer = styled.div`
  padding: 160px 0px;
  background-image: url(../contact-bg.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Box = styled.article`
  align-self: center !important;
  width: 100%;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

export const RowContainer = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
display: grid;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
`;

export const Container = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
`;