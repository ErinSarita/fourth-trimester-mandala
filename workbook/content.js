/* The workbook's shared lists: used by the fillable workbook (index.html), the booklet (booklet.html),
   and the one-page help sheet (ways-to-help.html). The order of each list sets the saved keys, so add to the end. */
const PARTNER_REQ = [["Keep the baby with me, skin to skin, as much as we can","On my chest her temperature, heart, and breathing steady."],["Guard the door: visitors, calls, and announcements wait until I am ready",""],["Bring water and a snack every time I feed",""],["Take night shifts for changing, settling, and bringing the baby to me",""],["Hold the baby skin to skin on your own chest when I need to rest or shower",""],["Listen to my birth story without fixing or correcting it",""],["Watch my mood with me, and help me reach support if I need it",""],["Tell me what I am doing well, often",""],["Take care of yourself too, and tell me when you need support",""]];
const HOUR = [["My baby placed straight on my bare chest, dried there, with a warm blanket over us both",""],["Unbroken skin to skin for at least the first hour, until after the first feed",""],["Let my baby find the breast herself, with no one placing her on the nipple","The breast crawl can take most of an hour; pauses are a stage of their own."],["Weighing, measuring, the bath, and routine procedures wait until after the first feed",""],["Newborn checks done on my chest, where possible",""],["Waiting before the cord is clamped",""],["Dim lights, quiet voices, and a calm room",""],["Visitors, calls, and announcements wait",""],["If I am drowsy or need care, my partner holds the baby skin to skin, or someone stays awake and watches her",""],["If I have a cesarean: skin to skin in the operating room if possible, or on my partner's chest until I am ready",""],["If my baby needs special care: my partner goes with her and keeps a hand and a voice with her",""],["Someone tells my baby what is happening, in a calm voice",""]];
const FEED_HOW = ["Breastfeeding","Pumping","Breast and bottle","Formula","Not sure yet"];
const FEED_WANT = [["Skin to skin during feeds",""],["Feed on cue, day and night, rather than by the clock","Rooting, hands to mouth, and stirring come before crying."],["A visit from a lactation consultant (IBCLC) in the first days",""],["Help with latch and positioning before we leave the hospital or birth center",""],["A calm minute before each feed: slow breaths, warmth, or music","Calm helps the milk let down."],["A breastfeeding group or La Leche League meeting",""],["Ask me before offering the baby a bottle or a pacifier",""],["If bottles are used: hold her close, let her set the pace, and switch sides",""]];
const VISIT = [["Please text before you come",""],["Please keep visits short, about an hour or less",""],["Please wash your hands when you arrive",""],["Please stay home if you are unwell",""],["Please help with a task rather than hold the baby",""],["Please do not kiss the baby's face",""]];
// the help a mother can choose from, gathered by kind, with the mandala's ring colors.
// The aim of every item: to free her to rest, heal, feed, and be with her baby (Johnson; Bergman).
const CATS=[["baby", "Care for the baby, close by", "--baby", ["Change diapers, then bring the baby back to me", "Burp and settle the baby after feeds", "Hold the baby skin to skin while I sleep or shower", "Carry the baby in a wrap or carrier for a short walk", "Bathe the baby, when we are ready", "Restock diapers, wipes, and clothes by the bed and the changing area", "Keep a simple log of feeds and diapers in the first week", "Learn the baby's early hunger cues, so you can bring her to me before she cries", "Drive us to the baby's checkups"]], ["feed", "Feeding", "--mother", ["Set up a feeding nest: pillows, water, snacks, a phone charger, a burp cloth", "Bring me water and a snack at every feed", "Wash and dry pump parts and bottles", "Bring the baby to me for night feeds", "Help me reach a lactation consultant or a breastfeeding group", "Prepare bottles, if we use them, the way I have asked"]], ["meals", "Meals and nutrition", "--center", ["Organize a meal train", "Fill the freezer with meals before the birth", "Cook warm, nourishing meals: soups, stews, broths", "Make breakfast I can eat with one hand", "Keep a snack basket stocked: nuts, fruit, cheese, crackers", "Keep my water bottle filled beside me", "Plan the week's meals with my food notes in mind", "Wash up after meals"]], ["shop", "Groceries", "--partner", ["Make the grocery list with me", "Do the weekly shop, or order a delivery", "Pick up top-ups: milk, bread, fruit", "Put the groceries away", "Pick up pads, nipple cream, and other recovery supplies"]], ["house", "Household and cleaning", "--partner", ["Tidy the main rooms", "Clean the kitchen", "Clean the bathroom", "Vacuum or sweep", "Change the bed sheets", "Take out the trash and recycling", "Water the plants", "Keep the house warm, and open a window for fresh air"]], ["laundry", "Laundry", "--circle", ["Wash, dry, and fold laundry", "Wash the baby's clothes and blankets", "Put clean clothes away", "Keep clean towels and burp cloths stocked"]], ["errands", "Errands", "--circle", ["Pharmacy pickups", "Post office, packages, and returns", "Bills and banking", "Fuel the car and check the car seat", "Pick up anything else I need"]], ["kids", "Older children", "--mother", ["School or daycare drop-offs and pick-ups", "Playdates and outings", "Meals and snacks for them", "Help with homework", "Help at bedtime", "Special one-on-one time with each child"]], ["pets", "Pets", "--partner", ["Feeding", "Walks", "Litter or cleaning", "Vet visits"]], ["body", "Care for my body", "--baby", ["Hold the baby while I shower or bathe", "Run a warm bath or a sitz bath", "Restock pads, ice packs, and comfort supplies", "Help me get up and to the bathroom in the first days", "Remind me to take any medication or vitamins", "A foot rub, a massage, or a hand on my back", "Help with my hair", "Drive me to my postpartum checkup", "Help me book a pelvic floor physiotherapist, if I need one"]], ["sleep", "Rest and sleep", "--edu", ["Protect one long stretch of sleep for me each day", "Take a night shift", "Keep the bedroom dark and quiet", "Hold the baby skin to skin so I can nap", "Turn visitors away kindly when I am resting"]], ["heart", "Emotional care and connection", "--edu", ["A daily check-in: how are you, really?", "Listen to my birth story without fixing it", "Sit with me on hard nights", "Remind me that I am doing well", "Watch for signs I am struggling, and help me reach support", "Bring me outside for fresh air or sun", "Keep me company, without needing me to host"]], ["visits", "Visitors and messages", "--best", ["Share the news and updates for us", "Answer messages and calls", "Schedule visits and keep them short", "Remind visitors to wash their hands, and to stay home if unwell", "Keep track of gifts and thank-you notes"]], ["admin", "Paperwork", "--best", ["Register the birth and order the birth certificate", "Add the baby to our health insurance", "Parental leave and work forms", "Keep a calendar of appointments and bills"]]];
const LEARN = [
  {c:"--baby", h:"Her chest is the baby's habitat", html:"<p>A newborn's brain is only about a quarter developed at birth, and to her there are two places: mother, or other (Bergman). On her mother's bare chest, her heart rate and breathing settle within minutes, and her mother's chest warms by up to about 2°C to warm her or cools by about 1°C to cool her. Only the mother's chest adjusts this way. Apart, the baby's body moves into defense: protest, then despair, with stress hormones high. This is why we ask you to keep them together, and to help with everything else.</p>"},
  {c:"--baby", h:"The first hour", html:"<p>Left skin to skin, a newborn moves through nine stages on her own: her birth cry, relaxation, awakening, rooting, rest, the crawl to the breast, licking and familiarizing, latching, and a deep sleep (Widström). She knows the way. Please wait, keep the room quiet, and let routines and visitors wait.</p>"},
  {c:"--mother", h:"Milk, and why calm matters", html:"<p>Human milk is light, the milk of a baby meant to be carried and fed often, about every two hours or whenever she asks (Bergman). Stress hormones can slow the milk; calm, warmth, and support help it flow (Jayamala; Feher). Protecting the mother's rest and peace is protecting the baby's food.</p>"},
  {c:"--edu", h:"Hormones and co-regulation", html:"<p>Oxytocin, the hormone of love and calm, flows with skin to skin, touch, and feeding, and it is held back by fear, pain, cold, and feeling watched or rushed (Uvnäs Moberg; Buckley). A newborn borrows her mother's nervous system to settle, and a mother settles more easily when she is held. Your calm counts: you steady the mother, and she steadies the baby. No one is meant to be the calm one alone.</p>"},
  {c:"--partner", h:"Her language", html:"<p>Crying is a baby's first spoken language, and around it is a language of the body. Feeding cues come early: stirring, rooting, hands to mouth. Looking away, yawning, hiccups, or splayed fingers mean she needs a pause. Some crying is about needs now, hunger, cold, tiredness; some may be about her birth. Meet her needs first, then hold her, stay calm, and say what you see (Appleton).</p>"},
  {c:"--circle", h:"How to support", html:"<ul><li>Do the tasks so the mother can hold the baby, rather than holding the baby so the mother can do the tasks.</li><li>Keep visits short, quiet, and helpful.</li><li>Listen to her birth story without correcting or comparing.</li><li>Tell her what she is doing well.</li><li>Watch for signs she is struggling, and help her reach care early.</li></ul>"},
  {c:"--best", h:"If you are caring for the baby", html:"<ul><li>Hold her close, skin to skin on your bare chest if you can, with her face visible and her nose and mouth clear.</li><li>Tell her who you are and what you are doing, in a calm, low voice.</li><li>Watch her cues, and bring her to her mother at the first signs of hunger.</li><li>If you give a bottle, do it as her mother has asked: hold her close and upright, let her set the pace, and switch sides.</li><li>For sleep: on her back, on a firm, flat surface of her own, with no pillows, blankets, or toys, in the room where her parents sleep.</li><li>Return her to her mother as soon as she can be together with her, and let her mother know how the time apart went.</li></ul>"}
];

// ---------- kangaroo care, sleep, and visitor cards (added October 2026) ----------
// Her own kangaroo care plan: skin to skin and closeness through the weeks (Bergman; WHO, 2003; Moore et al., 2016)
const KANGAROO_PLAN = [
  ["Skin to skin from birth, as continuously as we can",""],
  ["Sessions of at least an hour, several times a day","Each move in and out is a disruption for a small baby."],
  ["Skin to skin during feeds",""],
  ["My partner holds the baby skin to skin every day",""],
  ["A wrap or soft carrier, so she can be carried close",""],
  ["A warm room, a front-opening top, and a blanket over us both",""],
  ["Someone awake and watching whenever I feel drowsy",""]];
// Where the baby will sleep: what she chooses, with what each choice means
const SLEEP_WHERE = [
  ["In a bassinet or crib beside our bed, in the same room","Room-sharing is recommended for at least the first six months (AAP)."],
  ["In a bedside or side-car sleeper, close enough to reach",""],
  ["In our bed with me, for nursing through the night","Many breastfeeding mothers choose this. The AAP advises against bed-sharing; if you plan it, learn the Safe Sleep Seven below and talk with your provider."],
  ["Skin to skin on a parent's chest, while that parent is awake",""],
  ["Not sure yet; I would like to learn more",""]];
// The Safe Sleep Seven, from La Leche League, for breastfeeding mothers who bed-share
const SAFE_SLEEP_SEVEN = ["You are a nonsmoker","You are sober and unimpaired","You are breastfeeding","Your baby is healthy and full-term","Your baby is on her back","Your baby is lightly dressed, not swaddled","You are both on a safe surface: a firm mattress, light covers, no gaps, away from pillows"];
// Visitor cards
const VC_EXPECT = ["We are resting, so visits may be short","The baby may stay in my arms or on my chest the whole time","I may be feeding while you are here","Plans may change at the last minute","We may still be in our pajamas"];
const VC_HELP = ["Wash your hands when you arrive","Please stay home if you feel unwell","Bring a meal or a snack to share","Do one small chore: dishes, laundry, or a tidy","Hold the baby only if I offer","Please skip kissing the baby's face","Keep it short and sweet"];
const VC_DUR = ["15 minutes","30 minutes","About an hour","As long as feels right"];

/* Visitor invitations, each 4.25 x 5.5 in (408 x 528 px): a front with her photo and the baby's name, and a back with the visit.
   v holds her answers (empty for a blank card), photo is a data URL or "" (with ?mine and no photo, the mandala's wheel stands in). */
const vcNice=t=>{ if(!t) return ""; let m=String(t).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(m) return new Date(+m[1],+m[2]-1,+m[3]).toLocaleDateString(undefined,{month:"long",day:"numeric",year:"numeric"});
  m=String(t).match(/^(\d{1,2}):(\d{2})$/); if(m){ const h=+m[1]; return `${h%12||12}:${m[2]} ${h<12?"am":"pm"}`; } return t; };
const vcFirst=t=>(t||"").trim().split(/\s+/)[0]||"";
// twelve petals round the photo, in the mandala's colors from the yellow center out to rose
function vcPetals(){ const cols=["--center","--baby","--mother","--partner","--circle","--edu","--best","--edu","--circle","--partner","--mother","--baby"];
  return `<svg class="vc-ring" viewBox="-150 -150 300 300" aria-hidden="true">${cols.map((c,k)=>`<path transform="rotate(${k*30})" d="M0 -146C10 -136 12 -124 0 -112C-12 -124 -10 -136 0 -146Z" fill="var(${c})"/>`).join("")}<circle r="108" fill="none" stroke="#C08A2E" stroke-width="1.2"/><circle r="103" fill="none" stroke="#E7CFA3" stroke-width=".8"/></svg>`; }
function visitorFront(v, photo, esc, mine){
  const baby=v["vc.baby"]||v["me.baby"]||"";
  const from=v["vc.from"]||[vcFirst(v["me.name"]),vcFirst(v["p.name"])].filter(Boolean).join(" & ");
  const facts=[v["vc.weight"],v["vc.length"]].filter(Boolean).map(esc).join(" · ");
  const pic=photo?`<img class="vc-photo" src="${photo}" alt="">`:mine?`<img class="vc-photo wheel" src="img/wheel.webp" alt="">`:`<div class="vc-photo empty"><span>Place a photo here</span></div>`;
  return `<div class="vc vc-front"><div class="vc-frame"></div>
    <div class="vc-eb">With love, we invite you to meet</div>
    <div class="vc-pic">${vcPetals()}${pic}</div>
    <div class="vc-name">${baby?esc(baby):`<span class="vc-ln" style="min-width:220px;height:30px"></span>`}</div>
    <div class="vc-born">${v["vc.born"]||v["me.born"]?`born ${esc(vcNice(v["vc.born"]||v["me.born"]))}${v["vc.time"]?` at ${esc(vcNice(v["vc.time"]))}`:""}`:`born <span class="vc-ln" style="min-width:150px"></span> at <span class="vc-ln" style="min-width:60px"></span>`}</div>
    ${facts?`<div class="vc-facts">${facts}</div>`:mine?"":`<div class="vc-facts"><span class="vc-ln" style="min-width:70px"></span> · <span class="vc-ln" style="min-width:60px"></span></div>`}
    <div class="vc-from"><span>With love,</span> ${from?esc(from):`<span class="vc-ln" style="min-width:150px"></span>`}</div>
  </div>`;
}
function visitorBack(v, i, esc){
  const o=on=>`<span class="vc-o${on?" on":""}"></span>`;
  const pick=(key,list,extra)=>{ let chosen=list.map((t,j)=>[t,!!v[`${key}.${j}`]]).filter(x=>x[1]); if(extra) chosen.push([extra,true]);
    return (chosen.length?chosen:list.map(t=>[t,false])).map(([t,c])=>`<li>${o(c)}<span>${esc(t)}</span></li>`).join(""); };
  const dur=v[`vis.${i}.dur`], who=v[`vis.${i}.for`];
  // a note for the visitor fits when her chosen lists are short; a blank card lists every option instead
  const nE=VC_EXPECT.filter((_,j)=>v[`vc.expect.${j}`]).length, nH=VC_HELP.filter((_,j)=>v[`vc.help.${j}`]).length+(v["vc.x"]?1:0);
  const roomForNote=nE>0 && nH>0 && Math.max(nE,nH)<=4;
  const ln=(t,w)=>t?`<span class="vc-val">${esc(vcNice(t))}</span>`:`<span class="vc-ln" style="min-width:${w}px"></span>`;
  return `<div class="vc vc-back"><div class="vc-frame"></div>
    <div class="vc-eb">Your visit</div>
    <div class="vc-dear">Dear ${who?esc(who):`<span class="vc-ln" style="min-width:180px;height:26px"></span>`},</div>
    <div class="vc-when"><div><b>Date</b>${ln(v[`vis.${i}.date`],120)}</div><div><b>Time</b>${ln(v[`vis.${i}.time`],70)}</div>
      <div><b>For about</b>${dur!=null&&dur!==""?`<span class="vc-val">${esc(VC_DUR[+dur]||dur)}</span>`:VC_DUR.map(d=>`<span class="vc-dur">${o(false)}${d}</span>`).join("")}</div></div>
    <div class="vc-words">${v["vc.words"]?esc(v["vc.words"]):""}</div>
    <div class="vc-cols"><div><div class="vc-h">What to expect</div><ul>${pick("vc.expect",VC_EXPECT)}</ul></div>
      <div><div class="vc-h">How you can help</div><ul>${pick("vc.help",VC_HELP,v["vc.x"])}</ul></div></div>
    ${roomForNote?`<div class="vc-note"><div class="vc-h">A note for you</div><div class="vc-lines"></div></div>`:""}
    <div class="vc-foot">Thank you for helping us rest, heal, and fall in love.</div>
  </div>`;
}
