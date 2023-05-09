import { useState } from "react";
import Select from "../Select";
import { useEffect } from "react";
import { getCompanyPreference, getPosition } from "@/src/axios/dist";

const MyInfoPrefer = ({
  fix,
  defaultName,
}: {
  fix: boolean;
  defaultName: string;
}) => {
  const [pos, setPos] = useState<string>();
  const [company, setCompany] = useState<string>();

  useEffect(() => {
    if (defaultName === "맞춤 포지션을 설정해주세요.") {
      getPosition().then((res) => {
        setPos(res);
      });
    } else if (defaultName === "희망하는 기업 규모를 선택해주세요.") {
      getCompanyPreference().then((res) => {
        setCompany(res);
      });
    }
  }, []);

  return (
    <>
      {fix ? (
        <>
          ㅤ
          <Select
            width={defaultName === "맞춤 포지션을 설정해주세요." ? 14 : 16}
            defaultName={defaultName}
            prefer={{
              setState:
                defaultName === "맞춤 포지션을 설정해주세요."
                  ? setPos
                  : setCompany,
            }}
          />
        </>
      ) : (
        <>
          {defaultName === "맞춤 포지션을 설정해주세요." ? (
            <>{pos && pos.length > 0 ? pos : defaultName}</>
          ) : (
            <>
              {company && company.length > 0
                ? `${company}에서 일해보고 싶어요!`
                : defaultName}
            </>
          )}
        </>
      )}
    </>
  );
};
export default MyInfoPrefer;
