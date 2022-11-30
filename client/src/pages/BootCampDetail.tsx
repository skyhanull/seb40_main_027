import Banner from '../components/Banner';
import * as S from './BootCampDetail.style';
import { DetailTable, DataType } from '../components/Table/DetailTable';
import { BootDetailButton } from '../components/Button';
import { GREEN_MAIN, RED_BOOT_DETAIL_HEART } from '../assets/constant/COLOR';
import { useGetBootSpecificTable } from '../hooks/useBootTable';

const BootCampDetail = () => {
  const data = useGetBootSpecificTable();
  console.log(data);
  const dataKeys: Array<string> = Object.keys(data);
  const halfIdx = Math.floor(dataKeys.length / 2);
  // 찜하기 기능 구현하기
  // const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <>
      <Banner text={`${data.process}`} pageType="other" />
      <S.PageWrap>
        <S.MiddleSection>
          <a href={`https://${data.site}`} target="_blank" rel="noopener noreferrer">
            <BootDetailButton text="홈 페이지" icon="ant-design:home-outlined" iconColor={GREEN_MAIN} />
          </a>
          <BootDetailButton text="찜 " icon="mdi:cards-heart-outline" iconColor={RED_BOOT_DETAIL_HEART} />
        </S.MiddleSection>
        <section>
          <DetailTable data={data} halfIdx={halfIdx} dataKeys={dataKeys} />
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCampDetail;
