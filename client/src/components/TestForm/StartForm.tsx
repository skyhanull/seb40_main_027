import * as S from './StartForm.style';
import WarningWindow from './WarningWindow';
import { useRecoilState } from 'recoil';
import { isStart } from '../../atoms/index';
import { Link } from 'react-router-dom';

const StartForm = () => {
  const [isStarting, setIsStarting] = useRecoilState(isStart);
  const StartHandler = () => {
    setIsStarting(true);
  };
  return (
    <S.StartFormView>
      {isStarting ? (
        <WarningWindow />
      ) : (
        <S.StartView>
          <div>환영합니다 여러분! 그럼 테스트를 시작 해 볼까요?</div>
          <Link to="/test/waring">
            <S.StartFormButton onClick={StartHandler}>start</S.StartFormButton>
          </Link>
        </S.StartView>
      )}
    </S.StartFormView>
  );
};

export default StartForm;
