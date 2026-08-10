/* ============================================================
   내장 체크리스트 스냅샷 (최후 폴백)

   구글 시트에 연결할 수 없고 기기에 저장된 캐시도 없을 때만 사용합니다.
   ⚠️ 이 파일은 시트의 사본일 뿐입니다. 문항을 고칠 때는 구글 시트를 고치세요.
      (시트 수정 후 이 파일도 함께 갱신해 두면 오프라인 점검이 최신 기준으로 이뤄집니다)

   기준 시트 : MOT_김치옥_체크리스트 (무르익다 / 익스프레스 탭)
   스냅샷 시점 : 2026-08-10
   ============================================================ */
window.MOT = window.MOT || {};

(function () {
  "use strict";

  /* 두 버전이 공유하는 문항 (1~16번) — 내용이 완전히 같습니다 */
  function common() {
    return [
      { no:"1", stage:"입점", kind:"일반", who:"개인",
        text:`고객 입장 즉시 '어서오세요!! 김치옥입니다.' 라고 "큰 소리"로 인사하는가?  (큰소리 기준 : 2명 이상 시 이행으로 판단, 1인 근무시 메아리 적용안함.)`,
        critO:"큰소리로 선창·후창하여 다른 직원에게도 들림 (1인근무 시 인사하면 이행으로 간주)",
        critT:"인사는 하였으나 메아리 되지 않음 (2인이상적용, 1인근무시 인사는하였으나 목소리가 작음)",
        critX:"고객에게 인사 하지 않음", scoreO:6, scoreT:3, scoreX:0 },
      { no:"2", stage:"입점", kind:"일반", who:"개인",
        text:`인사 시 고객을 바라보며 눈을 맞추는가?`,
        critO:"고객을 바라보고 눈을 맞춤", critT:"고객을 보지 않고 인사함", critX:"고객을 보지않음",
        scoreO:6, scoreT:3, scoreX:0 },
      { no:"3", stage:"입점", kind:"일반", who:"개인",
        text:`인사 시 "밝은 표정(미소)"을 짓는가?  (밝은 미소 기준 : 치아가 보이는 미소)`,
        critO:"밝은 미소로 인사함", critT:"무표정으로 인사함", critX:"인사하지않음",
        scoreO:6, scoreT:3, scoreX:0 },
      { no:"4", stage:"입점", kind:"상황발생시", who:"개인",
        text:`웨이팅 고객에게 웨이팅 리스트 작성 설명 및 예상 대기시간을 안내하는가?  (안내 기준 : 대기 장소, 대기 예상 시간 안내)`,
        critO:"리스트 작성 안내와 예상시간을 모두 안내함", critT:"", critX:"고객을 방치함",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:"5", stage:"입점", kind:"상황발생시", who:"개인",
        text:`대기 후 입장 시 '기다려 주셔서 감사합니다' 인사를 하는가?`,
        critO:"감사인사를 함", critT:"", critX:"감사인사 하지 않음",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:"6", stage:"주문", kind:"일반", who:"개인",
        text:`주문 안내 및 추천 메뉴(전략판매메뉴)를 제안하는가?  ("테이블오더로 주문해주세요", 점심특선 및 저녁메뉴 인분에 맞는 세트메뉴 등)`,
        critO:"주문 안내와 추천 메뉴를 함께 제안함", critT:"주문 안내만 함", critX:"주문 안내·추천 제안 모두 불이행",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:"7", stage:"주문", kind:"상황발생시", who:"개인",
        text:`[직접주문] 주문 후 내용을 복창하여 확인하는가?`,
        critO:"주문 내용을 정확하게 복창하여 확인함", critT:"", critX:"주문내용 확인절차 없음",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:"8", stage:"주문", kind:"상황발생시", who:"개인",
        text:`[테이블오더] 고객이 태블릿 주문에 어려움을 겪을 때 즉시 도움을 제공하는가?`,
        critO:"고객님이 요청하거나, 필요시 즉시 해결", critT:"", critX:"도움을 제공하지 않음",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:"9", stage:"주문", kind:"상황발생시", who:"개인",
        text:`후식·식사메뉴 동시 주문 시 제공 타이밍을 확인하여 안내하는가?`,
        critO:"제공 시점을 물어보고 정확히 제공함", critT:"", critX:"제공시점 확인하지 않음",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:"10", stage:"서빙", kind:"상황발생시", who:"개인",
        text:`유아동반 손님에게 아기 용품(ex.수저·포크·유아의자)을 안내하는가?`,
        critO:"먼저 안내함", critT:"", critX:"안내하지 않음",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:"11", stage:"서빙", kind:"일반", who:"매장공통",
        text:`수저·젓가락·냅킨이 충분히 준비되어 있는가?`,
        critO:"인원수에 맞게 충분히 준비되어 있음", critT:"준비되었으나 일부 부족함", critX:"준비되어 있지 않음",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:"12", stage:"서빙", kind:"일반", who:"개인",
        text:`흰색·밝은색 옷 고객에게 먼저 앞치마 필요 여부를 물어보는가?`,
        critO:"고객에게 먼저 필요 여부를 물어 준비함", critT:"요청 시 제공함", critX:"물어보지 않음",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:"13", stage:"서빙", kind:"일반", who:"개인",
        text:`리뷰 이벤트에 대한 언급를 하거나, 고객이 보기쉽게 노출되어 있는가?`,
        critO:"리뷰 이벤트에 대해 정확히 고객님께 안내멘트를 함",
        critT:"리뷰이벤트관련 부착만 되어있고 직접적으로 언급하지 않음.",
        critX:"부착된것도 없고, 안내도 없음", scoreO:4, scoreT:2, scoreX:0 },
      { no:"14", stage:"서빙", kind:"일반", who:"개인",
        text:`메뉴(반찬 포함) 제공 시 '실례하겠습니다/뜨거우니 조심하세요' 멘트를 하는가?  (예 : 제육볶음, 폭탄계란찜 등)`,
        critO:"친절하게 멘트함", critT:"멘트만 함", critX:"멘트를 하지 않음",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:"15", stage:"서빙", kind:"일반", who:"개인",
        text:`추가 반찬 및 육수는 셀프바를 이용해 주세요' 안내를 하는가?  (셀프바가 없는 경우 : 추가 반찬 필요 시 직원 호출 안내)`,
        critO:"먼저 안내함", critT:"문의 시 안내함", critX:"안내하지 않음",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:"16", stage:"서빙", kind:"상황발생시", who:"개인",
        text:`음식 제공이 늦어질 때(15분 이상) 고객에게 양해 멘트 및 예상 대기시간을 안내하는가?`,
        critO:"양해 멘트와 예상 대기시간을 안내함", critT:"", critX:"안내 없이 대기하게 함",
        scoreO:0, scoreT:0, scoreX:-2 }
    ];
  }

  /* 두 버전 공통 마무리 문항 (식사중~퇴식) — 번호만 버전별로 다릅니다 */
  function tail(startNo, hasParking) {
    var n = startNo;
    var out = [
      { no:String(n++), stage:"식사중", kind:"일반", who:"개인",
        text:`식사 중, "음식은 괜찮으세요?" 등 고객 만족 여부를 체크하는가?`,
        critO:"직접 여쭤보고 확인함", critT:"눈으로만 체크함", critX:"체크 없음",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:String(n++), stage:"식사중", kind:"일반", who:"개인",
        text:`홀 직원은 항상 홀에 있으며 테이블을 수시로 살피는가?`,
        critO:"홀에 상주하며 테이블을 수시로 살핌", critT:"홀에 있으나 테이블 확인이 미흡함", critX:"홀을 비우는 경우가 있음",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:String(n++), stage:"계산", kind:"일반", who:"개인",
        text:`감사합니다 고객님! 계산 도와드리겠습니다' 후 '식사는 맛있게 하셨어요?' 매뉴얼에 맞게 응대하는가?`,
        critO:"눈맞춤과 멘트를 모두 실시함", critT:"멘트는 하였으나 눈맞춤이 없음", critX:"말없이 계산만 함",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:String(n++), stage:"계산", kind:"일반", who:"개인",
        text:`재방문을 유도하는 멘트를 하는가? (쿠폰, 포인트 적립, 매장 행사 안내 등)`,
        critO:"쿠폰·적립 등 재방문 유도 멘트를 함", critT:"또오세요 인사만 함", critX:"멘트 하지 않음",
        scoreO:4, scoreT:2, scoreX:0 }
    ];
    if (hasParking) {
      out.push({ no:String(n++), stage:"계산", kind:"일반", who:"개인",
        text:`주차 필요 여부 및 영수증 필요 여부를 확인하는가?`,
        critO:"먼저 확인함", critT:"요청 시 해드림", critX:"불이행",
        scoreO:4, scoreT:2, scoreX:0 });
    }
    out.push(
      { no:String(n++), stage:"환송", kind:"일반", who:"개인",
        text:`감사합니다. 안녕히 가세요!' 환송 인사를 큰 소리로 하는가?  (큰소리 기준 : 메아리 2명 이상 시 이행으로 판단)`,
        critO:"큰소리로 선창·후창하여 다른 직원에게도 들림 (1인근무 시 인사하면 이행으로 간주)",
        critT:"인사는 하였으나 메아리 되지 않음 (2인이상적용, 1인근무시 인사는하였으나 목소리가 작음)",
        critX:"고객에게 인사 하지 않음", scoreO:6, scoreT:3, scoreX:0 },
      { no:String(n++), stage:"클레임", kind:"상황발생시", who:"개인",
        text:`고객의 말을 끊지 않고 끝까지 듣는가?`,
        critO:"끝까지 차분하게 경청함", critT:"", critX:"경청하지 않고 불만을 표시함",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:String(n++), stage:"클레임", kind:"상황발생시", who:"개인",
        text: hasParking
          ? `해결 방안(교환·환불·추가 서비스)을 매뉴얼에 맞춰 안내하는가?`
          : `해결 방안(교환·환불·추가 서비스)을 명확하게 제시하는가?`,
        critO:"해결 방안을 친절하게 안내함", critT:"", critX:"해결 방안 없이 우왕좌왕함",
        scoreO:0, scoreT:0, scoreX:-2 },
      { no:String(n++), stage:"퇴식", kind:"일반", who:"개인",
        text:`퇴식 시 매뉴얼에 맞는 행주를 사용하고, 크린콜 등 적절한 세정제를 뿌리고 닦는가?  (3가지 색의 행주 사용 : 고기상·찌개상·의자용)`,
        critO:"행주구분이 있고, 세정제사용", critT:"행주만 구분 또는 세정제만 사용", critX:"행주 구분 없이 사용하거나 세정제 미사용",
        scoreO:4, scoreT:2, scoreX:0 },
      { no:String(n++), stage:"퇴식", kind:"일반", who:"개인",
        text:`옆 테이블 고객이 식사 중일 때 퇴식 시, 그릇·카트 소음이 나지 않도록 조심하는가?`,
        critO:"발생하지 않음", critT:"소음이 발생함", critX:"컴플레인이 발생함",
        scoreO:4, scoreT:2, scoreX:0 }
    );
    return out;
  }

  /* ── 무르익다 (17~20: 고기류 4문항 · 25번 주차/영수증 있음) ── */
  var 무르익다 = common().concat([
    { no:"17", stage:"서빙", kind:"일반", who:"개인",
      text:`[고기류] 고기 제공 전, 반찬이 메뉴 기준에 맞게 세팅되었는가?  ① 콩나물+고사리+익은지+파김치  ② 장아찌류+소스류+열무김치+겉절이  ③ 앞접시`,
      critO:"1번~3번 모두 기준대로 세팅됨", critT:"세팅되었으나 일부 누락됨", critX:"기준과 다르게 세팅됨",
      scoreO:6, scoreT:3, scoreX:0 },
    { no:"18", stage:"서빙", kind:"일반", who:"개인",
      text:`[고기류] 고기를 불판에 올리기 전, 온도계로 불판 온도를 확인하는가?  (불판 온도 200도 이상 확인)`,
      critO:"온도계를 사용함", critT:"손/눈으로만 체크함", critX:"체크하지않음(방치)",
      scoreO:6, scoreT:3, scoreX:0 },
    { no:"19", stage:"서빙", kind:"일반", who:"개인",
      text:`[고기류] 고기 굽는 순서를 안내하는가?  (삼겹살, 목살, 가브리살 구우신 뒤 약불에 껍데기를 구워 드세요)`,
      critO:"굽는 순서를 정확하게 안내함", critT:"일부만 간단하게 안내함", critX:"안내 없음",
      scoreO:6, scoreT:3, scoreX:0 },
    { no:"20", stage:"서빙", kind:"일반", who:"개인",
      text:`[찜·찌개류] 맛있게 먹는 법에 대한 안내를 하는가?  (김치찜 매뉴얼, 찌개 : 사리 추가 제안 등)  [고기류] 맛있게 곁들여 먹는 법에 대한 안내를 하는가?  ("맛있게먹는법" 시트 기준)`,
      critO:"맛있게 먹는법에 대해 정확히 고객님께 안내멘트를 함",
      critT:"맛있게먹는법이 부착만 되어있고 직접적으로 언급하지 않음.",
      critX:"부착된것도 없고, 안내도 없음", scoreO:6, scoreT:3, scoreX:0 }
  ]).concat(tail(21, true));

  /* ── 익스프레스 (17: 찜·찌개 타이머 · 18~21: 고기류 4문항 · 주차/영수증 없음) ── */
  var 익스프레스 = common().concat([
    { no:"17", stage:"서빙", kind:"일반", who:"개인",
      text:`[찜·찌개류] 타이머가 울리면 '실례합니다. 뚜껑 열어드릴게요. 잠시만 비켜주실 수 있나요? 맛있게 드세요!!' 멘트를 하는가?  (찌개 : '육수 더 필요하시면 말씀해 주세요' 안내 포함)`,
      critO:"뚜껑 개방과 안내 멘트를 모두 실시함", critT:"뚜껑만 열어주고 안내 멘트는 없음", critX:"뚜껑 개방·멘트 모두 없음",
      scoreO:4, scoreT:2, scoreX:0 },
    { no:"18", stage:"서빙", kind:"일반", who:"개인",
      text:`[고기류] 고기 제공 전, 반찬 종류가 메뉴 기준에 맞게 세팅되었는가?  ① 콩나물+고사리+김치(장독대 제공) ② 장아찌류+쌈장/다진마늘/땡초/참기름 ③ 앞접시(땡마새+안데스소금)`,
      critO:"1번~3번 모두 기준대로 세팅됨", critT:"세팅되었으나 일부 누락됨", critX:"기준과 다르게 세팅됨",
      scoreO:6, scoreT:3, scoreX:0 },
    { no:"19", stage:"서빙", kind:"일반", who:"개인",
      text:`[고기류] 고기를 불판에 올리기 전, 온도계로 불판 온도를 확인하는가?  (불판 온도 200도 이상 확인)`,
      critO:"온도계를 사용함", critT:"손/눈으로만 체크함", critX:"체크하지않음(방치)",
      scoreO:6, scoreT:3, scoreX:0 },
    { no:"20", stage:"서빙", kind:"일반", who:"개인",
      text:`[고기류] 고기 굽는 순서를 안내하는가?  (삼겹살, 목살, 가브리살 구우신 뒤 약불에 껍데기를 구워 드세요)`,
      critO:"굽는 순서를 정확하게 안내함", critT:"일부만 간단하게 안내함", critX:"안내 없음",
      scoreO:6, scoreT:3, scoreX:0 },
    { no:"21", stage:"서빙", kind:"일반", who:"개인",
      text:`[찜·찌개류] 맛있게 먹는 법에 대한 안내를 하는가?  (김치찜 매뉴얼, 찌개 : 사리 추가 제안 등)  [고기류] 맛있게 곁들여 먹는 법에 대한 안내를 하는가?  ("맛있게먹는법" 시트 기준)`,
      critO:"맛있게 먹는법에 대해 정확히 고객님께 안내멘트를 함",
      critT:"맛있게먹는법이 부착만 되어있고 직접적으로 언급하지 않음.",
      critX:"부착된것도 없고, 안내도 없음", scoreO:6, scoreT:3, scoreX:0 }
  ]).concat(tail(22, false));

  function stagesOf(items) {
    var out = [];
    items.forEach(function (i) { if (out.indexOf(i.stage) < 0) out.push(i.stage); });
    return out;
  }
  function normalMaxOf(items) {
    return items.reduce(function (s, i) { return s + (i.kind === "상황발생시" ? 0 : i.scoreO); }, 0);
  }

  MOT.seed = {
    result: "success",
    valid: true,
    issues: [],
    version: "v2.0",
    revisedAt: "2026-08-10",
    contentHash: "seed",
    source: "seed",
    versionKeys: ["무르익다", "익스프레스"],
    versions: {
      "무르익다":   { label:"무르익다",   sheetName:"(내장본)", items:무르익다,
                      stages:stagesOf(무르익다),   normalMax:normalMaxOf(무르익다) },
      "익스프레스": { label:"익스프레스", sheetName:"(내장본)", items:익스프레스,
                      stages:stagesOf(익스프레스), normalMax:normalMaxOf(익스프레스) }
    },
    rules: [
      { no:"01", key:"입점안내", desc:"입점 시 인사나 안내 없이 고객을 방치하기", penalty:5 },
      { no:"02", key:"흡연",     desc:"유니폼 입고 흡연하기", penalty:5 },
      { no:"03", key:"폭언",     desc:"고객 앞에서 직원 혼내기", penalty:5 },
      { no:"04", key:"무응답",   desc:"고객 요청에 대답 안 하기 (실행 여부 관계없이)", penalty:5 },
      { no:"05", key:"책임전가", desc:"고객 불편사항에 대해 즉시 사과하지 않기", penalty:5 },
      { no:"06", key:"불친절",   desc:"음식 나올 때 테이블에 던지듯 내려놓기", penalty:5 },
      { no:"07", key:"오픈준수", desc:"오픈 시간에 영업 준비가 안 되어 있기", penalty:5 },
      { no:"08", key:"감정행동", desc:"감정 상태를 행동(그릇 소리·집게·카트 등)으로 고객에게 드러내기", penalty:5 },
      { no:"09", key:"방치",     desc:"고객이 있는데도 직원 전체가 매장을 비우기", penalty:5 },
      { no:"10", key:"근무태만", desc:"고객이 보이는 장소에서 휴대폰을 오래 하기", penalty:5 }
    ]
  };
})();
