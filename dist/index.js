const apiData = console.log(apiData.length);

for (let i = 0; i < apiData.length; i++) {
  console.log(`${i}번째의 내용 ===== `); // 0, 1, 2, 3
  const data = apiData[i];
  // 속성명만 뽑기 즉 , key 만 뽑기
  for (let key in data) {
    console.log(" 키명: ", key);
    console.log(" 키값: ", data.key);
    console.log(" 키값: ", data[key]);
  }
}
