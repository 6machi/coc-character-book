const sb=window.supabase.createClient(window.COCBOOK_SUPABASE_URL,window.COCBOOK_SUPABASE_ANON_KEY);const BUCKET="character-icons";const FIXED=[{key:"job",group_name:"所属・経歴",label:"職業",type:"text",sort_order:200},{key:"jobDetail",group_name:"所属・経歴",label:"職業詳細",type:"textarea",sort_order:205},{key:"age",group_name:"基本情報",label:"年齢",type:"number",sort_order:25},{key:"birthday",group_name:"基本情報",label:"誕生日",type:"birthday",sort_order:35}];const DQ=[["cvImage", "基本情報", "CVイメージ（声優のイメージ）", "text", 10],["imageSong", "基本情報", "イメージソング", "textarea", 20],["mbti", "基本情報", "MBTIは？", "text", 30],["birthFlower", "基本情報", "誕生花", "text", 40],["birthStar", "基本情報", "誕生星", "text", 50],["bloodType", "基本情報", "血液型", "select", 60],["birthplace", "基本情報", "出身", "text", 70],["nationality", "基本情報", "国籍", "text", 80],["religion", "基本情報", "宗教", "text", 90],["height", "外見・身体", "身長", "number", 110],["weight", "外見・身体", "体重", "number", 120],["dominantHand", "外見・身体", "利き手", "text", 130],["hairColor", "外見・身体", "髪色", "text", 140],["favoriteColor", "外見・身体", "好きな色", "text", 150],["tattoo", "外見・身体", "タトゥー　理由や位置など", "textarea", 160],["family", "所属・経歴", "家族構成", "text", 210],["education", "所属・経歴", "学歴", "text", 220],["reasonForJob", "所属・経歴", "今の仕事に就いた理由は？", "textarea", 230],["admiredPerson", "所属・経歴", "憧れの人", "textarea", 240],["firstPerson", "呼び方・関係", "一人称", "text", 310],["secondPerson", "呼び方・関係", "二人称", "text", 320],["nickname", "呼び方・関係", "愛称", "text", 330],["importantPerson1Name", "呼び方・関係", "大切な人1：名前", "text", 340],["importantPerson1Relation", "呼び方・関係", "大切な人1：関係", "textarea", 341],["importantPerson2Name", "呼び方・関係", "大切な人2：名前", "text", 350],["importantPerson2Relation", "呼び方・関係", "大切な人2：関係", "textarea", 351],["importantPerson3Name", "呼び方・関係", "大切な人3：名前", "text", 360],["importantPerson3Relation", "呼び方・関係", "大切な人3：関係", "textarea", 361],["skills", "好きなもの・日常", "得意なこと", "textarea", 410],["weakness", "好きなもの・日常", "苦手なこと", "textarea", 420],["hobby", "好きなもの・日常", "趣味", "textarea", 430],["currentBoom", "好きなもの・日常", "最近のマイブームは？", "textarea", 440],["favoriteFood", "好きなもの・日常", "好きな食べ物", "text", 450],["dislikedFood", "好きなもの・日常", "嫌いな食べ物", "text", 460],["favoriteSeason", "好きなもの・日常", "好きな季節", "text", 470],["favoriteEvent", "好きなもの・日常", "好きな年中行事", "text", 480],["favoriteMovie", "好きなもの・日常", "好きな映画", "text", 490],["favoriteBook", "好きなもの・日常", "好きな本", "text", 500],["favoriteSong", "好きなもの・日常", "好きな曲", "text", 510],["favoriteGame", "好きなもの・日常", "好きなゲーム", "text", 520],["favoritePizza", "好きなもの・日常", "好きなピザの種類", "text", 530],["favoriteBurger", "好きなもの・日常", "好きなハンバーガーの種類", "text", 540],["holiday", "好きなもの・日常", "休日の過ごし方", "textarea", 550],["dayBeforeWork", "好きなもの・日常", "仕事前日の過ごし方", "textarea", 560],["happiness", "好きなもの・日常", "日常生活の中でどんな時に幸せを感じますか？", "textarea", 570],["dailyRoutine", "好きなもの・日常", "一日の習慣になっていることは何かありますか？", "textarea", 580],["frequentPlace", "好きなもの・日常", "あなたがよく足を運ぶ場所と理由は？", "textarea", 590],["smoking", "嗜好・恋愛", "煙草について", "text", 610],["perfume", "嗜好・恋愛", "香水について", "text", 620],["alcohol", "嗜好・恋愛", "お酒について", "text", 630],["fashion", "嗜好・恋愛", "ファッションについて", "textarea", 640],["relationshipCount", "嗜好・恋愛", "今まで付き合った人数", "textarea", 650],["meetingTime", "嗜好・恋愛", "待ち合わせにどれくらいの時間に来る？", "text", 660],["attractiveGesture", "嗜好・恋愛", "ドキッとする異性のしぐさは？", "textarea", 670],["datePlan", "嗜好・恋愛", "デートプランを考えるとしたら？", "textarea", 680],["loverCall", "嗜好・恋愛", "恋人になんて呼ばれたい？", "text", 690],["cookingForLover", "嗜好・恋愛", "恋人に作ってあげたい料理はある？", "textarea", 700],["typePreference", "嗜好・恋愛", "好きなタイプ", "textarea", 710],["preciousThing", "価値観・物語", "大切にしているものは？", "textarea", 810],["wantedThing", "価値観・物語", "今一番欲しいものは？", "textarea", 820],["motto", "価値観・物語", "座右の銘は？", "textarea", 830],["habit", "価値観・物語", "よくしてしまう癖", "textarea", 840],["favoriteRoomItems", "価値観・物語", "部屋にあるお気に入りのものを3つ教えてください", "textarea", 850],["nameOrigin", "価値観・物語", "名前とその由来は？あだ名（通り名）があるならそちらも教えてください", "textarea", 860],["worldFilledWith", "価値観・物語", "次の文の〇〇に言葉を入れてください。『世界は〇〇に満ちている。』", "textarea", 870],["unforgettableScenery", "価値観・物語", "忘れられない景色はありますか？いつどこで見た、どんな景色ですか？", "textarea", 880],["regret", "価値観・物語", "あの時こうしておけば良かった、と思っていることがありますか？どんなことですか？", "textarea", 890],["childhoodMemory", "価値観・物語", "幼い頃または学生時代の印象的な出来事があれば教えてください", "textarea", 900],["happiestMemory", "価値観・物語", "過去の思い出で一番楽しかったことは何？", "textarea", 910],["biggestFight", "価値観・物語", "今までした一番激しい大喧嘩は、誰と何が原因でしましたか？その相手とはどうなりましたか？", "textarea", 920],["secret", "価値観・物語", "墓の中まで持っていくつもりの嘘、秘密はありますか？またそれを共有している相手はいますか？", "textarea", 930],["endOfWorld", "価値観・物語", "もしも明日で世界が終わるとしたら何をする？", "textarea", 940],["wish", "価値観・物語", "今一番の願いは何ですか？", "textarea", 950],["unchangedFromChildhood", "価値観・物語", "自分が子供の頃から変わっていないと思う部分は？", "textarea", 960],["longTimePerson", "価値観・物語", "家族を除き、長い時間を共に過ごした人物は？どんな人？", "textarea", 970],["unforgivable", "価値観・物語", "許せないことは？", "textarea", 980],["justice", "価値観・物語", "あなたにとって正義とは？", "textarea", 990]];const SG=[{title:'基本ステータス',keys:['STR','CON','POW','DEX','APP','SIZ','INT','EDU']},{title:'基本戦闘技能',keys:['回避','キック','組み付き','こぶし（パンチ）','頭突き','投擲','マーシャルアーツ','拳銃','サブマシンガン','ショットガン','マシンガン','ライフル']},{title:'基本探索技能',keys:['応急手当','鍵開け','隠す','隠れる','聞き耳','忍び歩き','写真術','精神分析','追跡','登攀','図書館','目星']},{title:'基本行動技能',keys:['運転','機械修理','重機械操作','乗馬','水泳','製作','操縦','跳躍','電気修理','ナビゲート','変装']},{title:'基本交渉技能',keys:['言いくるめ','信用','説得','値切り','母国語','日本語','ヒプノーシス']},{title:'基本知識技能',keys:['医学','オカルト','化学','クトゥルフ神話','芸術','経理','考古学','コンピューター','心理学','人類学','生物学','地質学','電子工学','天文学','博物学','物理学','法律','薬学','歴史']}];const AB=SG[0].keys;let TEAM=null;function e(t){return t?String(t).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'):''}function c(t){return e(t).replaceAll('`','&#096;')}function col(x){return /^#[0-9A-Fa-f]{6}$/.test(String(x||'').trim())?String(x).trim():'#999999'}function rgb(h){let m=String(h).match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return m?{r:parseInt(m[1],16),g:parseInt(m[2],16),b:parseInt(m[3],16)}:null}function soft(h){let r=rgb(h)||{r:153,g:153,b:153};return `rgba(${r.r},${r.g},${r.b},0.08)`}function bd(b){let m=b?.birthdayMonth,d=b?.birthdayDay;if(!m&&!d)return'未設定';if(m&&d)return`${Number(m)}月${Number(d)}日`;if(m)return`${Number(m)}月`;if(d)return`${Number(d)}日`;return'未設定'}async function team(){if(TEAM)return TEAM;let {data,error}=await sb.from('teams').select('*').limit(1).single();if(error)throw error;TEAM=data;return data}async function ensureQ(){let t=await team();let {data,error}=await sb.from('questions').select('id').eq('team_id',t.id).limit(1);if(error)throw error;if(data&&data.length)return;let rows=DQ.map(x=>({team_id:t.id,key:x[0],group_name:x[1],label:x[2],type:x[3],sort_order:x[4],show_in_form:true,show_in_compare:true}));let r=await sb.from('questions').insert(rows);if(r.error)throw r.error}async function qs(){let t=await team();await ensureQ();let {data,error}=await sb.from('questions').select('*').eq('team_id',t.id).order('sort_order');if(error)throw error;return (data||[]).map(normalizeQuestion)}async function upIcon(file,id){if(!file)return null;let ext=file.name.split('.').pop()||'png',path=`${id}/${Date.now()}.${ext}`;let {error}=await sb.storage.from(BUCKET).upload(path,file,{cacheControl:'3600',upsert:true});if(error)throw error;return sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl}function groups(qs,inc=false){let a=[];function add(q){let n=q.group_name||'追加質問',g=a.find(x=>x.title===n);if(!g){g={title:n,fields:[]};a.push(g)}g.fields.push(q)}if(inc)FIXED.forEach(add);qs.forEach(add);return a}function qv(ch,q){if(['job','jobDetail','age'].includes(q.key))return ch.basic?.[q.key]||'';if(q.type==='birthday')return bd(ch.basic||{});return ch.answers?.[q.key]||''}function jobShort(b){const j=String(b?.job||'').trim();if(!j)return'職業未設定';return j.length>42?j.slice(0,40)+'…':j}
function jobDetailText(b){return String(b?.jobDetail||'').trim()}
function av(ch,cls='avatar'){let cc=col(ch.image_color),em=ch.emoji||'👤';if(ch.icon_url&&cls==='avatar')return`<div class="${cls}" style="--c:${cc};"><img src="${ch.icon_url}" alt="${c(ch.name||'icon')}"></div>`;return`<div class="${cls}-emoji" style="--c:${cc};">${e(em)}</div>`}


// v130: shared helpers for order/input/mobile fixes
const QUESTION_OVERRIDES={
  imageSong:{type:'textarea'},
  relationshipCount:{type:'textarea'},
  bloodType:{type:'text'}
};
function normalizeQuestion(q){
  const over=QUESTION_OVERRIDES[q.key];
  return over?{...q,...over}:q;
}
function characterOrderQuery(query){
  // Requires SQL: characters.sort_order. Falls back inside SQL setup for existing rows.
  return query.order('sort_order',{ascending:true,nullsFirst:false}).order('created_at',{ascending:true});
}
function sortedCharacters(list){
  return (list||[]).slice().sort((a,b)=>{
    const ao=Number.isFinite(Number(a.sort_order))?Number(a.sort_order):999999;
    const bo=Number.isFinite(Number(b.sort_order))?Number(b.sort_order):999999;
    if(ao!==bo)return ao-bo;
    const ac=a.created_at||'';
    const bc=b.created_at||'';
    return ac.localeCompare(bc);
  });
}
function isTextStatKey(k){return k==='芸術'||k==='製作';}
const COC6_DEFAULT_STATS={
  '回避':'DEX×2','キック':'25','組み付き':'25','こぶし（パンチ）':'50','頭突き':'10','投擲':'25','マーシャルアーツ':'1','拳銃':'20','サブマシンガン':'15','ショットガン':'30','マシンガン':'15','ライフル':'25',
  '応急手当':'30','鍵開け':'1','隠す':'15','隠れる':'10','聞き耳':'25','忍び歩き':'10','写真術':'10','精神分析':'1','追跡':'10','登攀':'40','図書館':'25','目星':'25',
  '運転':'20','機械修理':'20','重機械操作':'1','乗馬':'5','水泳':'25','製作':'','操縦':'1','跳躍':'25','電気修理':'10','ナビゲート':'10','変装':'1',
  '言いくるめ':'5','信用':'15','説得':'15','値切り':'5','母国語':'EDU×5','日本語':'EDU×5','ヒプノーシス':'1',
  '医学':'5','オカルト':'5','化学':'1','クトゥルフ神話':'0','芸術':'','経理':'10','考古学':'1','コンピューター':'1','心理学':'5','人類学':'1','生物学':'1','地質学':'1','電子工学':'1','天文学':'1','博物学':'10','物理学':'1','法律':'5','薬学':'1','歴史':'20'
};
function statDefault(k){return COC6_DEFAULT_STATS[k]??'';}
document.addEventListener('wheel',event=>{
  const el=event.target;
  if(el&&el.matches&&el.matches('input[type="number"]')) el.blur();
},{passive:true});


function closeInfoPopover(){
  document.querySelectorAll('.info-floating,.info-backdrop').forEach(x=>x.remove());
}
function openInfoPopover(button){
  closeInfoPopover();
  const wrap = button.closest('.info-wrap');
  const source = wrap ? wrap.querySelector('.info-pop') : null;
  if(!source) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'info-backdrop';
  backdrop.addEventListener('click', closeInfoPopover);

  const pop = document.createElement('div');
  pop.className = 'info-floating';
  pop.innerHTML = '<button class="info-floating-close" type="button" aria-label="閉じる">×</button>' + source.innerHTML;
  pop.querySelector('.info-floating-close').addEventListener('click', closeInfoPopover);

  document.body.appendChild(backdrop);
  document.body.appendChild(pop);

  const rect = button.getBoundingClientRect();
  const gap = 10;
  const margin = 14;

  let left = rect.left;
  let top = rect.bottom + gap;

  const popRect = pop.getBoundingClientRect();

  if(left + popRect.width > window.innerWidth - margin){
    left = window.innerWidth - popRect.width - margin;
  }
  if(left < margin) left = margin;

  if(top + popRect.height > window.innerHeight - margin){
    top = rect.top - popRect.height - gap;
  }
  if(top < margin) top = margin;

  pop.style.left = left + 'px';
  pop.style.top = top + 'px';
}
document.addEventListener('click', function(event){
  const button = event.target.closest('.info-button');
  if(button){
    event.preventDefault();
    event.stopPropagation();
    openInfoPopover(button);
  }
});
document.addEventListener('keydown', function(event){
  if(event.key === 'Escape') closeInfoPopover();
});


async function loadSiteTitle(){
  try{
    const {data,error}=await sb.from('site_settings').select('value').eq('key','site_title').maybeSingle();
    if(error) throw error;
    return (data&&data.value)?String(data.value):'自陣キャラ図鑑';
  }catch(error){
    console.warn('site title load failed',error);
    return '自陣キャラ図鑑';
  }
}
async function saveSiteTitle(title){
  const value=(title||'').trim()||'自陣キャラ図鑑';
  const {error}=await sb.from('site_settings').upsert({key:'site_title',value,updated_at:new Date().toISOString()},{onConflict:'key'});
  if(error) throw error;
  return value;
}
function setSiteTitle(title){
  const value=(title||'').trim()||'自陣キャラ図鑑';
  document.querySelectorAll('#siteTitle,.site-brand').forEach(x=>x.textContent=value);
  document.title=document.title.replace(/^.*?(?=｜|$)/,value);
}
function initSiteTitle(){
  const el=document.getElementById('siteTitle');
  if(!el)return;

  loadSiteTitle().then(setSiteTitle);

  if(el.dataset.boundTitle==='1')return;
  el.dataset.boundTitle='1';
  el.title='クリックでタイトル変更';
  el.style.cursor='pointer';

  el.addEventListener('click',async()=>{
    const next=prompt('サイトタイトルを入力してください',el.textContent.trim());
    if(next===null)return;
    const title=next.trim()||'自陣キャラ図鑑';
    const before=el.textContent;
    setSiteTitle(title);
    try{
      await saveSiteTitle(title);
    }catch(error){
      console.error(error);
      setSiteTitle(before);
      alert('タイトルの保存に失敗しました：'+error.message);
    }
  });
}


/* v123: safe emoji/avatar overrides */
function firstEmoji(value){
  const text = String(value || '').trim();
  if(!text) return '👤';
  try{
    const seg = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    const first = seg.segment(text)[Symbol.iterator]().next();
    return first && first.value ? first.value.segment : '👤';
  }catch(error){
    return Array.from(text)[0] || '👤';
  }
}
window.firstEmoji = firstEmoji;
window.av = function(ch, cls='avatar'){
  const cc = col(ch && ch.image_color);
  const em = firstEmoji(ch && ch.emoji);
  if(ch && ch.icon_url && cls === 'avatar'){
    return `<div class="${cls}" style="--c:${cc};"><img src="${ch.icon_url}" alt="${c(ch.name || 'icon')}"></div>`;
  }
  return `<div class="${cls}-emoji" style="--c:${cc};">${e(em)}</div>`;
};


/* v139: collaborative editing helpers */
function conflictMessage(label){
  return `${label || 'この項目'}は、他の人が先に更新しています。上書きを防ぐため保存を止めました。ページを再読み込みして最新内容を確認してください。`;
}
function sameTimestamp(a,b){
  if(!a && !b) return true;
  if(!a || !b) return false;
  return new Date(a).getTime() === new Date(b).getTime();
}
async function checkRowUnchanged(table, idColumn, idValue, knownUpdatedAt, label){
  if(!knownUpdatedAt) return true;
  const {data,error}=await sb.from(table).select('updated_at').eq(idColumn,idValue).maybeSingle();
  if(error) throw error;
  if(data && data.updated_at && !sameTimestamp(data.updated_at, knownUpdatedAt)){
    alert(conflictMessage(label));
    return false;
  }
  return true;
}
async function notifySaved(messageEl, text='保存しました'){
  if(messageEl) messageEl.textContent = text;
}


/* v140: unsaved-change warning helpers */
let __COCBOOK_UNSAVED__ = false;
function setUnsavedChanges(flag=true){
  __COCBOOK_UNSAVED__ = !!flag;
  document.body.classList.toggle('has-unsaved', __COCBOOK_UNSAVED__);
}
function clearUnsavedChanges(){
  setUnsavedChanges(false);
}
window.addEventListener('beforeunload', function(event){
  if(!__COCBOOK_UNSAVED__) return;
  event.preventDefault();
  event.returnValue = '';
});
document.addEventListener('click', function(event){
  const link = event.target.closest && event.target.closest('a[href]');
  if(!link || !__COCBOOK_UNSAVED__) return;
  const href = link.getAttribute('href') || '';
  if(href.startsWith('#') || link.target === '_blank') return;
  const ok = confirm('保存していない変更があります。このまま移動すると変更が消える可能性があります。移動しますか？');
  if(!ok) event.preventDefault();
});
function bindUnsavedInputs(root=document){
  root.querySelectorAll('input, textarea, select').forEach(el=>{
    if(el.dataset.unsavedBound === '1') return;
    el.dataset.unsavedBound = '1';
    el.addEventListener('input', () => setUnsavedChanges(true));
    el.addEventListener('change', () => setUnsavedChanges(true));
  });
}


/* v145: simple maintenance mode for shared test operation
   Toggle with site_settings key maintenance_mode = on/off. */
async function getSiteSettingValue(key, fallback=''){
  try{
    const {data,error}=await sb.from('site_settings').select('value').eq('key',key).maybeSingle();
    if(error) throw error;
    return data && data.value !== undefined && data.value !== null ? String(data.value) : fallback;
  }catch(error){
    console.warn('site setting load failed', key, error);
    return fallback;
  }
}
function showMaintenanceOverlay(message){
  if(document.getElementById('maintenanceOverlay')) return;
  const overlay=document.createElement('div');
  overlay.id='maintenanceOverlay';
  overlay.innerHTML=`
    <div class="maintenance-card">
      <strong>メンテナンス中です</strong>
      <p>${e(message || '現在、サイトの更新作業中です。入力や保存は少し待ってからお願いします。')}</p>
      <button type="button" onclick="location.reload()">再読み込み</button>
    </div>
  `;
  document.body.appendChild(overlay);

  const style=document.createElement('style');
  style.textContent=`
    #maintenanceOverlay{position:fixed;inset:0;z-index:9999;background:rgba(24,29,42,.42);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:grid;place-items:center;padding:18px;}
    #maintenanceOverlay .maintenance-card{width:min(440px,92vw);border-radius:24px;background:#fff;border:1px solid rgba(255,255,255,.95);box-shadow:0 24px 80px rgba(20,30,55,.28);padding:24px;text-align:center;color:#202532;}
    #maintenanceOverlay strong{display:block;font-size:24px;font-weight:950;margin-bottom:10px;color:#b42336;}
    #maintenanceOverlay p{margin:0 0 18px;line-height:1.75;color:#596273;font-size:14px;}
    #maintenanceOverlay button{border:0;border-radius:999px;background:#b42336;color:#fff;font-weight:900;padding:11px 18px;}
    body.is-maintenance input,body.is-maintenance textarea,body.is-maintenance select,body.is-maintenance main button{pointer-events:none;opacity:.55;}
    body.is-maintenance #maintenanceOverlay button{pointer-events:auto;opacity:1;}
  `;
  document.head.appendChild(style);
  document.body.classList.add('is-maintenance');
}
async function initMaintenanceMode(){
  const mode=(await getSiteSettingValue('maintenance_mode','off')).toLowerCase();
  if(['on','true','1','yes'].includes(mode)){
    const message=await getSiteSettingValue('maintenance_message','現在、サイトの更新作業中です。入力や保存は少し待ってからお願いします。');
    showMaintenanceOverlay(message);
  }
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initMaintenanceMode);
else initMaintenanceMode();
