/*
if-else if문 사용

1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템
다섯 과목의 점수가 다음과 같을 때 총합과 평균을 출력하는 프로그램을 작성하세요.
const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

출력 결과:
총점: 383
평균: 60.6
 */

const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

let sum = 0;
let avg = 0;
let max = 0;
let min = 100;
sum += softwareDesign;
sum += softwareDevelopment;
sum += databaseSetup;
sum += programmingUsage;
sum += systemManagement;
avg = sum / 5;

if (max < softwareDesign) max = softwareDesign;
if (max < softwareDevelopment) max = softwareDevelopment;
if (max < databaseSetup) max = databaseSetup;
if (max < programmingUsage) max = programmingUsage;
if (max < systemManagement) max = systemManagement;
if (min > softwareDesign) min = softwareDesign;
if (min > softwareDevelopment) min = softwareDevelopment;
if (min > databaseSetup) min = databaseSetup;
if (min > programmingUsage) min = programmingUsage;
if (min > systemManagement) min = systemManagement;

console.log("총점: " + sum);
console.log("평균: " + avg);
console.log("최고점: " + max);
console.log("최저점: " + min);
if (min < 40) console.log("아쉽지만 불합격입니다. 사유: 과락 40점 미달(" + min + "점)");
else if (avg < 60) console.log("아쉽지만 불합격입니다. 사유: 평균 60점 미달(" + avg + "점)");
else console.log("합격입니다.");
