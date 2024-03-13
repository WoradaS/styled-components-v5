import FooterContainer from "./components/Template/FooterContainer";
import {
  ContactUsContainer,
  Container,
  RowContainer,
  Box,
  Section,
  PhoneInfo,
  FormContainer,
  Column,
  InputStyle,
  TextAreaStyle,
  ButtonStyle,
} from "./components/Template/styled";

function App() {
  return (
    <div>
      <ContactUsContainer>
        <Container>
          <RowContainer>
            <Box data-wow-duration="0.5s" data-wow-delay="0.25s">
              <Section>
                <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut
                  labore et dolores
                </p>
                <PhoneInfo>
                  <h4>
                    For any enquiry, Call Us:{" "}
                    <span>
                      <a href="#">010-020-0340</a>
                    </span>
                  </h4>
                </PhoneInfo>
              </Section>
            </Box>
            <Box data-wow-duration="0.5s" data-wow-delay="0.25s">
              <FormContainer id="contact" action="" method="post">
                <RowContainer>
                  <Column>
                    <fieldset>
                      <InputStyle type="name" name="name" id="name" placeholder="Name" autocomplete="on" required />
                    </fieldset>
                  </Column>
                  <Column>
                    <fieldset>
                      <InputStyle
                        type="surname"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </Column>
                  <Column>
                    <fieldset>
                      <InputStyle
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email"
                        required=""
                      />
                    </fieldset>
                  </Column>
                  <Column>
                    <fieldset>
                      <TextAreaStyle
                        name="message"
                        type="text"
                        class="form-control"
                        id="message"
                        placeholder="Message"
                        required=""
                      ></TextAreaStyle>
                    </fieldset>
                  </Column>
                  <Column>
                    <fieldset>
                      <ButtonStyle type="submit" id="form-submit" class="main-button ">
                        Send Message
                      </ButtonStyle>
                    </fieldset>
                  </Column>
                </RowContainer>
              </FormContainer>
            </Box>
          </RowContainer>
        </Container>
      </ContactUsContainer>
      <FooterContainer />
    </div>
  );
}

export default App;
