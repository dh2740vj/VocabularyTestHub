/* =====================================================================
   단어 테스트 설정 파일
   ---------------------------------------------------------------------
   이 파일은 처음 한 번만 올리면 됩니다.
   프로그램이 업데이트되면 index.html 만 새 파일로 바꾸면 되고,
   이 파일은 그대로 두면 설정이 유지됩니다.

   선생님 로그인     : Firebase 콘솔 > Authentication 에 만든 이메일/비밀번호로 로그인합니다.
                      (비밀번호는 이 파일에 적지 않습니다)
   STUDENTS         : 학생코드: "이름"   예) { "6406": "홍길동", "7012": "김철수" }
   FIREBASE         : Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)의 firebaseConfig 값
                      (비워 두면 "체험 모드": 기록이 그 기기에만 저장됩니다)
   ===================================================================== */
window.VOCA_CONFIG = {
  STUDENTS: { "6406": "" },
  FIREBASE: {
    apiKey: "AIzaSyBy9f2YIkZul4BXIn0g68ySW6q1jnTaSWw",
    authDomain: "vocabulary-hub-b015a.firebaseapp.com",
    databaseURL: "https://vocabulary-hub-b015a-default-rtdb.firebaseio.com",
    projectId: "vocabulary-hub-b015a",
    storageBucket: "vocabulary-hub-b015a.firebasestorage.app",
    messagingSenderId: "147945729604",
    appId: "1:147945729604:web:683764137ac64a67941611"
  }
};
