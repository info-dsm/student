import { getClassification, getClassificationProps } from "@/src/axios/dist";
import { TagNameType } from "@/src/lib/types";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const TagList = ({
  name,
}: {
  name: {
    state: TagNameType;
    setState: (value: TagNameType) => void;
  };
}) => {
  const [classification, setClassification] = useState<
    getClassificationProps[]
  >([]);

  useEffect(() => {
    getClassification().then((res) => {
      setClassification(
        [
          {
            bigClassification: {
              bigClassificationName: "전체",
            },
            name: "전체",
          },
          {
            bigClassification: {
              bigClassificationName: "웹",
            },
            name: "프론트",
          },
          {
            bigClassification: {
              bigClassificationName: "웹",
            },
            name: "백엔드",
          },
        ].concat(res.filter((e) => e.name !== "프론트" && e.name !== "백엔드"))
      );
    });
  }, []);

  const ref = useRef<any>(null);

  const handleOnDown = (e: MouseEvent) => {
    // 마우스 디폴트위치 기억
    ref.current.dataset.mouseDownAt = e.clientX;
    ref.current.dataset.drag = true;
  };
  const handleOnUp = () => {
    if (ref.current.dataset.mouseDownAt === "0") return;

    // 마우스 위치 삭제
    ref.current.dataset.mouseDownAt = "0";
    ref.current.dataset.prevPercentage = ref.current.dataset.percentage;
    ref.current.dataset.drag = false;
  };
  const handleOnMove = (e: MouseEvent) => {
    // 마우스를 드래그할 때만 함수 실행
    if (ref.current.dataset.mouseDownAt === "0" && ref.current.dataset.drag)
      return;

    // 디폴트 마우스 위치 - 현재 마우스 위치
    const mouseDelta = -(
      parseFloat(ref.current.dataset.mouseDownAt) - e.clientX
    );

    // 포지셔닝
    const speed = (mouseDelta / 500) * 10;
    const per = parseFloat(ref.current.dataset.prevPercentage) + speed;

    moveAnimation(per, 900);
  };

  if (typeof ref.current !== "undefined" && typeof window !== "undefined") {
    ref.current?.addEventListener("mousedown", (e: MouseEvent) =>
      handleOnDown(e)
    );
    window?.addEventListener("mouseup", () => handleOnUp());
    ref.current?.addEventListener("mousemove", (e: MouseEvent) =>
      handleOnMove(e)
    );
  }

  const moveAnimation = (per: number, duration: number) => {
    const nextPercentage = per > 0 ? 0 : per < -76.1 ? -76.1 : per;

    ref.current.dataset.percentage = nextPercentage;

    const content = document.getElementById("content") as HTMLDivElement;

    content.animate(
      {
        transform: `translateX(${nextPercentage}%`,
      },
      { duration: duration, fill: "forwards", easing: "ease-in-out" }
    );
  };

  return (
    <MainDiv>
      <Arrow
        onClick={() =>
          moveAnimation(parseFloat(ref.current.dataset.percentage) + 12.45, 500)
        }
      >
        <div>
          <span>{"<"}</span>
        </div>
      </Arrow>
      <Nav
        ref={ref}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        data-percentage="0"
        data-drag={false}
      >
        <div id="content">
          {classification.map((e) => (
            <Content
              onClick={() => {
                name.setState({
                  ...name.state,
                  ["smallClassification"]: e.name,
                });
              }}
              selected={e.name === name.state.smallClassification}
            >
              {e.name}
            </Content>
          ))}
        </div>
      </Nav>
      <Arrow
        onClick={() =>
          moveAnimation(parseFloat(ref.current.dataset.percentage) - 12.45, 500)
        }
      >
        <div>
          <span>{">"}</span>
        </div>
      </Arrow>
    </MainDiv>
  );
};
export default TagList;

const MainDiv = styled.div`
  display: inline-flex;
  width: 70%;
  height: 8.7vmin;
  margin-bottom: 40px;
`;

const Arrow = styled.div`
  margin: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 5px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgb(168, 168, 168);
    span {
      margin-bottom: 5px;
      font-family: "Corben", cursive;
    }
  }
`;

const Nav = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 13px;
  margin-top: 25px;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100px;
  align-items: center;
  margin-bottom: 5px;
  > div {
    display: inline-flex;
    gap: 0.677vmax;
  }
  > div > div {
    height: 5.336vmin;
    padding: 1.067vmin 1.406vmax;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 0.937vmax;
    border-radius: 24px;
    white-space: nowrap;
    cursor: pointer;
    transition: 0.2s;
  }
`;

const Content = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#6750f819" : "#fff")};
  color: ${(props) => (props.selected ? "#6750f8" : "rgba(0, 0, 0, 0.4)")};
  border: 1px solid
    ${(props) => (props.selected ? "#6750f8" : "rgba(168, 168, 168, 0.4)")}; ;
`;
