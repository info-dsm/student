import { useState } from "react";
import styled from "styled-components";

const AnnouncePageNation = ({
  current,
  total,
}: {
  current: {
    state: number;
    setState: (value: number) => void;
  };
  total: number[];
}) => {
  const [inputPage, setInputPage] = useState(5);

  return (
    <PaginationDiv>
      {total.length <= 4 ? (
        <>
          {total.map((t) => (
            <>
              {t === current.state + 1 ? (
                <NowPagenation>{t}</NowPagenation>
              ) : (
                <div onClick={() => current.setState(parseInt(String(t)) - 1)}>
                  {t}
                </div>
              )}
            </>
          ))}
        </>
      ) : (
        <>
          {current.state + 1 <= 3 ? (
            <>
              {["1", "2", "3", "...", total.length].map((t, i) => (
                <>
                  {t === String(current.state + 1) ? (
                    <NowPagenation>{t}</NowPagenation>
                  ) : (
                    <div
                      onClick={() => {
                        if (t === "...") setInputPage(i);
                        else {
                          setInputPage(5);
                          current.setState(parseInt(String(t)) - 1);
                        }
                      }}
                    >
                      {inputPage === i ? (
                        <input
                          onKeyDown={(e: any) => {
                            if (e.keyCode === 13) {
                              current.setState(parseInt(e.target.value) - 1);
                              setInputPage(5);
                            }
                          }}
                        />
                      ) : (
                        <>{t}</>
                      )}
                    </div>
                  )}
                </>
              ))}
            </>
          ) : (
            <>
              {current.state + 1 >= total.length - 2 ? (
                <>
                  {[
                    "1",
                    "...",
                    total.length - 2,
                    total.length - 1,
                    total.length,
                  ].map((t, i) => (
                    <>
                      {t === current.state + 1 ? (
                        <NowPagenation>{t}</NowPagenation>
                      ) : (
                        <div
                          onClick={() => {
                            if (t === "...") setInputPage(i);
                            else {
                              setInputPage(5);
                              current.setState(parseInt(String(t)) - 1);
                            }
                          }}
                        >
                          {inputPage === i ? (
                            <input
                              onKeyDown={(e: any) => {
                                if (e.keyCode === 13) {
                                  current.setState(
                                    parseInt(e.target.value) - 1
                                  );
                                  setInputPage(5);
                                }
                              }}
                            />
                          ) : (
                            <>{t}</>
                          )}
                        </div>
                      )}
                    </>
                  ))}
                </>
              ) : (
                <>
                  {["1", "...", current.state + 1, "...", total.length].map(
                    (t, i) => (
                      <>
                        {i == 2 ? (
                          <NowPagenation>
                            {inputPage === i ? (
                              <input
                                onKeyDown={(e: any) => {
                                  if (e.keyCode === 13) {
                                    current.setState(
                                      parseInt(e.target.value) - 1
                                    );
                                    setInputPage(5);
                                  }
                                }}
                              />
                            ) : (
                              <>{t}</>
                            )}
                          </NowPagenation>
                        ) : (
                          <div
                            onClick={() => {
                              if (t === "...") setInputPage(i);
                              else {
                                setInputPage(5);
                                current.setState(parseInt(String(t)) - 1);
                              }
                            }}
                          >
                            {inputPage === i ? (
                              <input
                                onKeyDown={(e: any) => {
                                  if (e.keyCode === 13) {
                                    current.setState(
                                      parseInt(e.target.value) - 1
                                    );
                                    setInputPage(5);
                                  }
                                }}
                              />
                            ) : (
                              <>{t}</>
                            )}
                          </div>
                        )}
                      </>
                    )
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </PaginationDiv>
  );
};

export default AnnouncePageNation;

const PaginationDiv = styled.span`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  input {
    width: 60px;
    height: 40px;
    background-color: #ededed;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
  }
  div {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const NowPagenation = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;
