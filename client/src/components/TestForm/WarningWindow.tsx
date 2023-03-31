import { useEffect, useState } from 'react';
import TypeForm from './TypeForm';
import * as S from './WarningWindow.style';
import { Link, useParams } from 'react-router-dom';
import { isStart } from '../../atoms';
import { useRecoilState } from 'recoil';

const WarningWindow = () => {
  const [isWarning, setIsWarning] = useState<boolean>(false);
  const [isStarting, setIsStarting] = useRecoilState(isStart);
  const { name } = useParams();

  useEffect(() => {
    if (name === 'start') {
      setIsStarting(false);
    }
  }, []);
  const WaringHandler = () => {
    setIsWarning(true);
  };
  return (
    <S.WarningLargeContent>
      {isWarning ? (
        <TypeForm />
      ) : (
        <div>
          <S.WarnTitle>주의!</S.WarnTitle>
          <S.WarnContent>이 테스트는 정확한 테스트가 아니므로 주의해주십시오.</S.WarnContent>
          <S.WaringButtonContent>
            <Link to="/test/1">
              <S.WarningButton onClick={WaringHandler}>Next</S.WarningButton>
            </Link>
          </S.WaringButtonContent>
        </div>
      )}
    </S.WarningLargeContent>
  );
};
export default WarningWindow;
