import React from "react";
import styled from "styled-components";

export const WrapperFooter = styled.div`
  display: flex;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  gap: 16px;
  color: #212529;
  justify-content: center;
  p {
    text-align: center;
    margin: 30px 0px 45px 0px;
  }
  a {
    color: #fe3f40;
    text-decoration: none;
  }
`;
const FooterContainer = () => {
  return (
    <footer>
      <WrapperFooter>
        <p>
          © Copyright 2021 Space Dynamic Co. All Rights Reserved.
          <br />
          Design:{" "}
          <a rel="nofollow" href="https://templatemo.com">
            TemplateMo
          </a>
        </p>
      </WrapperFooter>
    </footer>
  );
};

export default FooterContainer;
