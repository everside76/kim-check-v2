/* ============================================================
   김치옥 MOT 점검 V2 — 설정
   ============================================================ */
window.MOT = window.MOT || {};

MOT.config = {
  /* Apps Script 웹앱 배포 URL (.../exec)
     결과 스프레드시트 "MOT_김치옥_점검결과_V2" 에 붙인 스크립트의 배포 주소.
     배포 후 아래 값을 채워 넣으세요. 앱 설정 화면에서도 변경할 수 있습니다. */
  SCRIPT_URL: "",

  /* 참고용 시트 주소 (앱 설정 화면 안내에 사용) */
  CHECKLIST_SHEET_URL: "https://docs.google.com/spreadsheets/d/1HApNgMVR2rYjf2kcgn3H76qP9mj-m-4XMlE6y8_Yf6I/edit",
  RESULT_SHEET_URL:    "https://docs.google.com/spreadsheets/d/1X45VnlpNgD-gdTGlRGHmH4Nysw0HLH30nb4QEvtn5mI/edit",

  BRAND: "김치옥",
  /* 체크리스트 버전 — 시트의 탭 두 개에 각각 대응합니다.
     화면에 보이는 순서이자, 결과 시트의 '브랜드' 컬럼에 "김치옥 무르익다" 형태로 기록됩니다. */
  VERSIONS: ["무르익다", "익스프레스"],

  APP_VERSION: "2.0.0",

  /* 등급 컷 (점수 이상이면 해당 등급) */
  GRADE_CUTS: [
    { grade: "S", min: 90 },
    { grade: "A", min: 80 },
    { grade: "B", min: 70 },
    { grade: "C", min: 60 },
    { grade: "D", min: 50 },
    { grade: "F", min: 0  }
  ],

  /* 점검율에 따른 등급 상한 — 점검율이 낮으면 등급을 제한 */
  RATE_CAPS: [
    { min: 80, cap: null },   // 제한 없음
    { min: 60, cap: "A"  },
    { min: 50, cap: "B"  },
    { min: 0,  cap: "C"  }    // 50% 미만 → C + 재점검 대상
  ],
  RECHECK_RATE: 50,           // 이 미만이면 재점검 계획 대상 경고

  NETWORK_TIMEOUT: 12000,     // 시트 통신 제한시간(ms)
  CHECKLIST_TTL: 6 * 60 * 60 * 1000  // 캐시를 '신선'으로 볼 시간(6시간)
};

/* localStorage 키
   ⚠️ 고반식당 V2와 같은 주소(everside76.github.io)에 배포되므로 저장 공간을 공유합니다.
      키가 겹치면 두 앱이 서로의 점검 이력·설정을 덮어쓰므로 반드시 다르게 유지하세요. */
MOT.LS = {
  settings:  "kimmot2_settings",
  history:   "kimmot2_history",
  draft:     "kimmot2_draft",
  checklist: "kimmot2_checklist_cache",
  lastInput: "kimmot2_last_input",
  inspector: "kimmot2_inspector"
};

/* 변경 이력 (최신이 위) */
MOT.CHANGELOG = [
  { v: "2.0.0", date: "2026-08-10", items: [
    "V2 전면 개편 — 체크리스트를 구글 시트에서 직접 불러옵니다. 문항·배점·판정 기준을 시트에서 고치면 앱에 바로 반영됩니다",
    "무르익다 · 익스프레스 두 버전을 그대로 유지합니다. 점검 정보에서 버전을 고르면 해당 체크리스트로 점검합니다",
    "채점 방식 변경: 감점제 → 획득점수제. '일반' 문항의 이행 점수 합계가 100점이며, 미흡은 절반, 불이행은 0점입니다",
    "'상황발생시' 문항 신설 — 상황이 실제 발생했을 때만 점검하며, 불이행일 때만 점수가 차감됩니다",
    "'개인 / 매장공통' 구분 신설 — 결과 화면에서 개인 서비스와 매장 공통 항목의 점수를 나눠 봅니다",
    "문항별 이행·미흡·불이행 판정 기준을 점검 화면에서 바로 확인할 수 있습니다",
    "직접주문 / 테이블오더 구분 폐지 — 버전별 하나의 체크리스트로 통합",
    "절대 금지 10계명은 시트에서 관리하며 위반 1건당 점수를 차감합니다"
  ]}
];
