import styled from 'styled-components';
import React from 'react';
import { media } from '~/constants/theme';

export default () => (
  <Root>
    <div>
      <Top>
        <Contract>대표이사 : 손진호 | 사업자등록번호 : 569-88-00792 | 주소 : 서울특별시 마포구 서교동 와우산로 180 | 번호 : 02-6471-3033 | 이메일 : contact@algorithmlabs.co.kr</Contract>
        <Right>
          <SnsAnchors href="" target="_blank">
            <img src={require('~/assets/img/sns/kakao.svg')} alt="" />
          </SnsAnchors>
          <SnsAnchors href="" target="_blank">
            <img src={require('~/assets/img/sns/facebook.svg')} alt="" />
          </SnsAnchors>
          <SnsAnchors href="" target="_blank">
            <img src={require('~/assets/img/sns/instagram.svg')} alt="" />
          </SnsAnchors>
          <SnsAnchors href="" target="_blank">
            <img src={require('~/assets/img/sns/blog.svg')} alt="" />
          </SnsAnchors>
        </Right>
      </Top>
      <CopyRight>© 2019, ALGORITHMLABS. ALL RIGHTS RESERVED.</CopyRight>
    </div>
  </Root>
);

const Root = styled.div`
  background-color: #000;
  & > div {
    max-width: 1200px;
    margin: auto;
    padding: 90px 10px;
    color: #fff;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 0 0 auto;
  display: flex;
  margin-left: -22px;
  margin-bottom: 30px;
  order: 2;
  ${media.mobile} {
    order: 0;
  }
`;

const Contract = styled.div`
  flex: 1;
  margin-bottom: 39px;
  font-size: 14px;
  line-height: 1.57;
  color: #ffffff;
  margin-right: 20px;
  max-width: 600px;
  order: 1;
  ${media.mobile} {
    text-align: center;
  }
`;

const CopyRight = styled.div`
  font-size: 14px;
  line-height: 1.57;
  color: #ffffff;
  ${media.mobile} {
    text-align: center;
  }
`;

const SnsAnchors = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  margin-left: 22px;
  & > img {
    display: block;
    height: 100%;
  }
`;
