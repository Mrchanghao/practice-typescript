import styled from 'styled-components';
import { colors } from '~/constants/style';
import React, { useContext, useState, useEffect } from 'react';
import { UserCtx } from '~/context/user';
// import Purchase from '~/containers/Home/units/Purchase';
import { goPay } from '~/utils/inopay-script';
import { MerchantKey } from '../constants';
import { media } from '~/constants/theme';

const Product: React.FC = () => {
  const {
    userInfo: { email, products },
    setSignModalShown,
  } = useContext(UserCtx);

  const [purchaseStep, setPurchaseSetup] = useState(0);
  const payForm = React.createRef<HTMLFormElement>();
  const readyToPurchase = purchaseStep > 0;
  const handleClickPurchase = () => {
    if (!email) confirm('로그인 후 이용 가능 로그인 하세요') && setSignModalShown(true);
    else if (readyToPurchase) goPay(payForm.current, MerchantKey);
    else setPurchaseSetup(1);
  };

  const handleClosePurchaseBox = () => setPurchaseSetup(0);

  return (
    <ProductWrap id="product-intro">
      <div>
        <ProductContainer.root>
          <ProductContainer.left>
            <ProductTitle>Alps Test</ProductTitle>
            <ProductPrice>15만원</ProductPrice>
          </ProductContainer.left>
          <ProductContainer.right>
            {!readyToPurchase && (
              <ProductContainer.rightCont>
                <ProductDesc>
                  Alps test는 IT직무에 요구되는 지식, 기술, 태도를 체계적으로 평가하는 표준화된 시험으로, 문제해결 능력, 코드 작성 기술 및 코드 품질, 개발 습관에 중점을 두고 SW역량을 평가한다. 특히,
                  Alps는 피험자의 알고리즘 역량을 세밀하게 측정하기 위해 AI엔진을 활용하여 5가지 각도에서(로직, 코드, 효율성, 정확성, TCP) 알고리즘 구현 습관을 분석한다.
                </ProductDesc>
                {/* <ProductSpec>
                  <ProductSpecTitle>Package</ProductSpecTitle>
                  <ProductSpecList>
                    <ProductSpecListItem>test A- 컴퓨팅 사고(객관식/20문항)</ProductSpecListItem>
                    <ProductSpecListItem>test B- 문제 해결(프로그래밍/6문항)</ProductSpecListItem>
                    <ProductSpecListItem>AI엔진을 활용한 SW역량 분석 성적표</ProductSpecListItem>
                  </ProductSpecList>
                </ProductSpec> */}
              </ProductContainer.rightCont>
            )}
            {readyToPurchase && <ProductContainer.rightCont>{/* <Purchase formRef={payForm} onClickClose={handleClosePurchaseBox} /> */}</ProductContainer.rightCont>}
          </ProductContainer.right>
          <ProductPurchaseButton onClick={handleClickPurchase}>
            {readyToPurchase ? 'PROCEED TO PAY' : products && products.find((p) => p.id.toString() === process.env.PRODUCT_ID && p.is_purchase) ? 'RE-PURCHASE' : 'PURCHASE'}
          </ProductPurchaseButton>
        </ProductContainer.root>
        <ProductNotice>*취소/환불 등 기타 결제관련 문의는 고객센터로 연락하시길 바랍니다</ProductNotice>
      </div>
    </ProductWrap>
  );
};

export default Product;

const ProductWrap = styled.div`
  background: linear-gradient(to bottom, transparent 50%, #000 50%);
  overflow: hidden;
  & > div {
    max-width: 1063px;
    margin: 0 auto;
    padding: 0 10px;
  }
`;

const ProductContainer = {
  root: styled.div`
    border-radius: 19px;
    box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.21);
    background-color: ${colors.blueberry};
    padding: 71px 110px;
    display: flex;
    position: relative;
    align-items: center;
    ${media.mobile} {
      flex-direction: column;
      padding: 48px 32px 38px;
      align-items: stretch;
    }
  `,
  left: styled.div`
    padding-right: 70px;
    position: relative;
    &:after {
      content: '';
      top: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      width: 1px;
      background-color: #fff;
      ${media.mobile} {
        content: none;
      }
    }
    ${media.mobile} {
      padding: 0 0 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #fff;
    }
  `,
  right: styled.div`
    padding-left: 70px;
    position: relative;
    align-self: flex-start;
    &:after {
      content: '';
      top: 0;
      bottom: 0;
      left: -1px;
      position: absolute;
      width: 1px;
      background-color: #fff;
      ${media.mobile} {
        content: none;
      }
    }
    ${media.mobile} {
      padding: 0;
    }
  `,
  rightCont: styled.div``,
};

const ProductNotice = styled.div`
  margin-top: 30px;
  font-size: 14px;
  line-height: 1.57;
  color: #ffffff;
`;

const ProductTitle = styled.h3`
  line-height: 61px;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.01px;
  text-align: center;
  color: #ffffff;
  ${media.mobile} {
    font-size: 32px;
    line-height: 50px;
    text-align: left;
  }
`;

const ProductPrice = styled.div`
  line-height: 100px;
  font-size: 100px;
  font-weight: 500;
  letter-spacing: -0.03px;
  text-align: center;
  color: ${colors.azure};
  margin-top: 38px;
  ${media.mobile} {
    line-height: 50px;
    font-size: 40px;
    margin-top: 7px;
    text-align: left;
  }
`;

const ProductDesc = styled.div`
  font-size: 18px;
  line-height: 1.67;
  color: #ffffff;
  ${media.mobile} {
    font-size: 14px;
    line-height: 1.64;
  }
`;

const ProductSpec = styled.div`
  margin-top: 34px;
`;

const ProductSpecTitle = styled.div`
  line-height: 25px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.01px;
  color: #ffffff;
  margin-bottom: 18px;
`;

const ProductSpecList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -12px;
  max-width: 300px;
`;

const ProductSpecListItem = styled.div`
  line-height: 17px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 12px;
  position: relative;
  padding-left: 14px;
  :before,
  :after {
    content: '';
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    background-color: #fff;
    position: absolute;
  }
  :before {
    width: 2px;
    height: 8px;
    left: 4px;
    top: 4px;
  }
  :after {
    width: 6px;
    height: 2px;
    left: -3px;
    top: 9px;
  }
`;

const ProductPurchaseButton = styled.button`
  position: absolute;
  bottom: 80px;
  /* right: -100px; */
  right: -160px;
  /* min-width: 304px; */
  min-width: 270px;
  height: 87px;
  padding: 0 20px;
  border-radius: 43.5px;
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.21);
  background-color: ${colors.azure};
  font-size: 24px;
  font-weight: bold;
  border-width: 0;
  letter-spacing: 1.71px;
  text-align: center;
  color: #ffffff;
  ${media.mobile} {
    display: none;
  }
`;
