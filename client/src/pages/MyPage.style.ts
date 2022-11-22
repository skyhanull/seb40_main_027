import styled from 'styled-components';

export const PageSize = styled.div`
  /* overflow-y: auto; */ // 나중에 재수정할 수 도 있을 것 같아서 일단 주석 처리만 진행햇어요.
  transform: all 2s;
`;

export const MyPageContent = styled.div`
  height: 100vh;
  max-height: 1080px;
  margin: 0rem 18% 0rem 18%;
  transform: all 2s;
  .tab-menu {
    height: 10%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0rem 5rem 0rem 5rem;
  }
  .tab-content-mobile {
    display: none;
  }
  .page-name {
    font-size: 2em;
    margin: 1rem;
  }
  img {
    display: flex;
    align-items: flex-end;
    width: 8rem;
    height: 50%;
  }
  .icon-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin-left: 1rem;
  }
  .tab-content {
    width: 10rem;
    display: flex;
    flex-direction: row;
  }
  .tab-body {
    height: 10%;
    background-color: var(--greenMain);
    border-radius: 40px 40px 0px 0px;
  }
  .my-page-body {
    display: flex;
    border: 1px solid var(--grayContentsBorder);
  }
  .profile {
    width: 25%;
    max-height: 1080px;
    border-right: 1px solid var(--grayContentsBorder);
    display: flex;
  }
  .user-profile {
    height: 40%;
    border: 1px solid var(--grayContentsBorder);
    margin: 1rem 1rem 0rem 1rem;
    width: 100%;
  }
  .my-page-view {
    width: 100%;
  }
  .icon-gear {
    display: flex;
    flex-direction: row-reverse;
  }
  .user-picture {
    display: flex;
    width: 100%;
    height: 60%;
    background-color: red;
  }
  .user-info {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    height: 30%;
    align-items: center;
  }
  .user-nickname {
    border: 1px solid var(--grayContentsBorder);
    border-radius: 20px;
    width: 70%;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 414px) {
    margin: 0px;

    .tab-menu {
      display: none;
    }
    .tab-content-mobile {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
    .page-name {
      display: none;
    }
    .icon-wrapper {
      display: none;
    }
    img {
      display: none;
    }
    .tab-body {
      display: none;
    }
    .my-page-body {
      margin: 0px;
      display: flex;
      width: 100vw;

      flex-direction: column;
      justify-content: center;
      border: none;
    }
    .profile {
      width: 100vw;
      border: none;
      display: flex;
      justify-content: center;
      z-index: 1;
    }
    .user-profile {
      width: 100vw;
      display: flex;
      flex-direction: row;
      height: 7rem;
      border-radius: 20px;
      margin: 1rem;
    }
    .user-picture {
      height: 100%;
    }
    .user-info {
      height: 100%;
      width: 100%;
    }
    .my-page-view {
    }
    .tab-mobile-bar {
      display: flex;
      background-color: var(--greenMain);
      height: 3rem;
      width: 100%;
    }
  }
`;

export const ButtonTab = styled.button`
  border: none;
  height: 2rem;
  width: 6rem;
  border-radius: 10px 10px 0px 0px;
  background-color: ${(props) => (props.className === 'tab-button' ? 'var(--greenMain)' : '#a9dbbd')};
`;
