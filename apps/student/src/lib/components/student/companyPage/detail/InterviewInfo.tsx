import { PostInterviewApiResType } from "@/src/axios/dist";

const CompanyDetailInterviewInfo = ({
  req,
}: {
  req: {
    state: PostInterviewApiResType;
    setState: (value: PostInterviewApiResType) => void;
  };
}) => {
  const inputList = [
    {
      key: "지원 직무파트",
      tag: (
        <input
          placeholder="프론트"
          onChange={(e) =>
            req.setState({ ...req.state, appliedJobPart: e.target.value })
          }
        />
      ),
    },
    {
      key: "면접 날짜",
      tag: (
        <input
          type={"date"}
          onChange={(e) =>
            req.setState({ ...req.state, interviewDate: e.target.value })
          }
        />
      ),
    },
    {
      key: "면접관 수",
      tag: (
        <input
          placeholder="1"
          value={
            Number.isNaN(req.state.directorCount) ? "" : req.state.directorCount
          }
          onChange={(e) => {
            req.setState({
              ...req.state,
              directorCount: parseInt(e.target.value),
            });
          }}
        />
      ),
    },
    {
      key: "면접 구분",
      tag: (
        <select
          onChange={(e) =>
            req.setState({
              ...req.state,
              interviewType: e.target.value as "ONLINE" | "OFFLINE",
            })
          }
        >
          <option>ONLINE</option>
          <option>OFFLINE</option>
        </select>
      ),
    },
    {
      key: "면접 지역",
      tag: (
        <input
          placeholder="서울 • 경기"
          onChange={(e) =>
            req.setState({ ...req.state, interviewPlace: e.target.value })
          }
        />
      ),
    },
  ];

  return (
    <span>
      {inputList.map((e, i) => (
        <h4 key={i}>
          <div>{e.key}</div>
          {e.tag}
        </h4>
      ))}
    </span>
  );
};
export default CompanyDetailInterviewInfo;
