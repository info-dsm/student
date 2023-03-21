export const GetInitial = (str: string) => {
  const initial = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  let result = "";
  str.split("").map((c, i) => {
    const utf = c.charCodeAt(0);
    if (utf >= 44032 && utf <= 55203)
      result += initial[parseInt(String((utf - 44032) / 588))];
    else result += c;
  });
  return result;
};
