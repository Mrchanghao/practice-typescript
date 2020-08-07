import styled from 'styled-components';
import React from 'react';
import { colors } from '~/constants/style';
import { ButtonA } from '~/components/ButtonA';
import { media } from '~/constants/theme';
import ModalA from '~/components/ModalA';
import { FormAWrapper, FormARow, FormAField, FormALabel, FormAInput, FormATextarea } from '~/components/Form';

const Contact: React.FC<{ onClickClose: () => void; isShown: boolean }> = ({ onClickClose, isShown }) => {
  const formRef = React.createRef<HTMLFormElement>();

  const submit = (hideModal: () => void) => {
    if (!formRef.current) return;
    const payload = ['Company', 'Name', 'Email', 'Message'].reduce((p: { [key: string]: string }, c) => ((p[c] = formRef.current![c]), p), {});
    // const payload = ['Company', 'Name', 'Email', 'Message'].reduce((p: { [key: string]: string }, c) => {
    //   return (p)
    // }, {})
    fetch('https://script.google.com/macros/s/AKfycbzXtmcdJQRA-jvHkTVZTimjwT3DAD6uQhFTvNTADslV4bxd0zw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw res;
        return res.json();
      })
      .then((data) => {
        if (data.result === 'error') throw new Error('type Error');
        return alert('등록 완료');
      })
      .catch((e) => alert('등록 실패'))
      .then(hideModal);
  };

  return (
    <ModalA on={isShown} hideModal={onClickClose}>
      {(hideModal) => (
        <>
          <Title>Be a Partner!</Title>
          <FormAWrapper>
            <FormARow>
              <FormAField style={{ flex: '1 1 299px' }}>
                <FormALabel>Company</FormALabel>
                <FormAInput name="Company" placeholder="Alps" />
              </FormAField>
              <FormAField style={{ flex: '1 1 167px' }}>
                <FormALabel>Name</FormALabel>
                <FormAInput name="Name" placeholder="Your name?" />
              </FormAField>
            </FormARow>
            <FormARow>
              <FormAField>
                <FormALabel>Email</FormALabel>
                <FormAInput name="Email" placeholder="enter your email" />
              </FormAField>
              <FormAField style={{ flex: '1 1 167px' }}>
                <FormALabel>Message</FormALabel>
                <FormAInput name="Message" placeholder="feel free to contact to us" />
              </FormAField>
              <Submit color={colors.blueberry} bgColor="#fff" onClick={() => submit(hideModal)}>
                SUBMIT
              </Submit>
            </FormARow>
          </FormAWrapper>
        </>
      )}
    </ModalA>
  );
};

export default Contact;

const Title = styled.h3`
  line-height: 61px;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.01px;
  color: #ffffff;
  margin-bottom: 53px;
  ${media.mobile} {
    line-height: 41px;
    font-size: 32px;
    text-align: center;
    margin-bottom: 32px;
  }
`;

const Submit = styled(ButtonA as any)`
  margin-top: 53px;
`;
