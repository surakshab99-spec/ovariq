import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  CircleAlert,
  Clock3,
  Flower2,
  HeartPulse,
  LockKeyhole,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react'

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'ta', label: 'தமிழ்' },
  { value: 'bn', label: 'বাংলা' },
]

const translations = {
  en: {
    title: 'Your care guide',
    subtitle: 'A starting point, not a diagnosis.',
    empty: 'Your next step starts with your story.',
    emptyHelp: 'Share what you have noticed and we’ll help you understand what may be worth discussing with a clinician.',
    matched: 'What this can sometimes be connected to',
    general: 'A few things to keep in mind',
    pcos: 'PCOS can be one possible explanation',
    pcosText: 'Irregular periods, acne, or increased facial and body hair can sometimes be associated with PCOS. These symptoms can also have other causes, and only a qualified clinician can assess what is happening.',
    next: 'A thoughtful next step',
    nextText: 'Consider booking a visit with a gynecologist or primary care clinician. Bring a note of when symptoms started, cycle dates, and any changes you have noticed.',
    track: 'What to keep track of',
    trackText: 'Your cycle dates, how long bleeding lasts, pain, skin or hair changes, and anything that makes symptoms better or worse.',
    generalText: 'Symptoms can have many causes. A healthcare professional can help interpret them in context, especially if they are new, recurring, or affecting daily life.',
    language: 'Your guide is shown in English.',
    urgent: 'Please seek urgent medical care if you have severe or sudden pain, fainting, trouble breathing, or bleeding that soaks through a pad every hour for 2 hours.',
    generic: 'Thanks for sharing. One symptom alone rarely tells the whole story. Consider when it started, how often it happens, and whether anything changes it. A clinician can help you make sense of it.',
    disclaimer: 'This tool shares general health information. It cannot diagnose, rule out a condition, or replace advice from a healthcare professional.',
  },
  hi: {
    title: 'आपके लिए स्वास्थ्य मार्गदर्शिका',
    subtitle: 'यह शुरुआती जानकारी है, निदान नहीं।',
    empty: 'आपकी बात से अगला कदम समझने में मदद मिलेगी।',
    emptyHelp: 'आपने जो बदलाव महसूस किए हैं, उन्हें लिखें। हम बताएँगे कि डॉक्टर से क्या चर्चा करना उपयोगी हो सकता है।',
    matched: 'यह किन बातों से जुड़ा हो सकता है',
    general: 'कुछ ज़रूरी बातें',
    pcos: 'PCOS एक संभावित कारण हो सकता है',
    pcosText: 'अनियमित माहवारी, मुहाँसे, या चेहरे और शरीर पर अधिक बाल कभी-कभी PCOS से जुड़े हो सकते हैं। इनके अन्य कारण भी हो सकते हैं। सही आकलन केवल योग्य डॉक्टर कर सकते हैं।',
    next: 'अगला उपयोगी कदम',
    nextText: 'स्त्री रोग विशेषज्ञ या प्राथमिक देखभाल डॉक्टर से मिलने पर विचार करें। लक्षण कब शुरू हुए, माहवारी की तारीखें और हुए बदलाव लिखकर ले जाएँ।',
    track: 'इन बातों का रिकॉर्ड रखें',
    trackText: 'माहवारी की तारीखें और अवधि, दर्द, त्वचा या बालों में बदलाव, और किन बातों से लक्षण बढ़ते या घटते हैं।',
    generalText: 'लक्षणों के कई कारण हो सकते हैं। यदि वे नए हैं, बार-बार होते हैं या रोज़मर्रा के जीवन को प्रभावित करते हैं, तो स्वास्थ्यकर्मी से बात करें।',
    language: 'आपकी मार्गदर्शिका हिन्दी में दिखाई गई है।',
    urgent: 'अचानक या बहुत तेज़ दर्द, बेहोशी, साँस लेने में परेशानी, या 2 घंटे तक हर घंटे एक पैड पूरा भीगने पर तुरंत चिकित्सा सहायता लें।',
    generic: 'अपनी बात साझा करने के लिए धन्यवाद। एक लक्षण से पूरी स्थिति समझना अक्सर संभव नहीं होता। यह ध्यान दें कि लक्षण कब शुरू हुआ, कितनी बार होता है और किससे बदलता है।',
    disclaimer: 'यह टूल सामान्य स्वास्थ्य जानकारी देता है। यह निदान नहीं कर सकता और डॉक्टर की सलाह का विकल्प नहीं है।',
  },
  ta: {
    title: 'உங்கள் உடல்நல வழிகாட்டி',
    subtitle: 'இது தொடக்கத் தகவல்; நோயறிதல் அல்ல.',
    empty: 'உங்கள் அனுபவத்தைப் பகிர்வதே அடுத்த படி.',
    emptyHelp: 'நீங்கள் கவனித்த மாற்றங்களை எழுதுங்கள். மருத்துவரிடம் பேச வேண்டியவற்றைப் புரிந்துகொள்ள உதவுகிறோம்.',
    matched: 'இது சில நேரங்களில் எதனுடன் தொடர்புடையதாக இருக்கலாம்',
    general: 'கவனத்தில் கொள்ள வேண்டியவை',
    pcos: 'PCOS ஒரு சாத்தியமான காரணமாக இருக்கலாம்',
    pcosText: 'ஒழுங்கற்ற மாதவிடாய், முகப்பரு அல்லது முகம் மற்றும் உடலில் அதிகரிக்கும் முடி சில நேரங்களில் PCOS-உடன் தொடர்புடையதாக இருக்கலாம். வேறு காரணங்களும் இருக்கலாம்; தகுதியுள்ள மருத்துவர் மட்டுமே மதிப்பிட முடியும்.',
    next: 'அடுத்து செய்யக்கூடியது',
    nextText: 'மகப்பேறு மருத்துவர் அல்லது முதன்மை சிகிச்சை மருத்துவரைச் சந்திக்கலாம். அறிகுறிகள் தொடங்கிய நாள், மாதவிடாய் தேதிகள், கவனித்த மாற்றங்கள் ஆகியவற்றைக் குறித்துச் செல்லுங்கள்.',
    track: 'குறித்துக் கொள்ள வேண்டியவை',
    trackText: 'மாதவிடாய் தேதிகள் மற்றும் நாட்கள், வலி, தோல் அல்லது முடி மாற்றங்கள், அறிகுறிகளை அதிகரிப்பவை அல்லது குறைப்பவை.',
    generalText: 'அறிகுறிகளுக்குப் பல காரணங்கள் இருக்கலாம். அவை புதிதாகத் தோன்றினாலோ, மீண்டும் மீண்டும் வந்தாலோ, அன்றாட வாழ்வைப் பாதித்தாலோ மருத்துவரிடம் பேசுங்கள்.',
    language: 'உங்கள் வழிகாட்டி தமிழில் காட்டப்படுகிறது.',
    urgent: 'திடீர் அல்லது கடுமையான வலி, மயக்கம், சுவாசிப்பதில் சிரமம், அல்லது தொடர்ந்து 2 மணி நேரம் ஒவ்வொரு மணிநேரமும் ஒரு பேட் முழுவதும் நனைந்தால் உடனடி மருத்துவ உதவியை நாடுங்கள்.',
    generic: 'பகிர்ந்ததற்கு நன்றி. ஒரு அறிகுறி மட்டும் முழு நிலையைச் சொல்லாது. அது எப்போது தொடங்கியது, எவ்வளவு அடிக்கடி வருகிறது, எதனால் மாறுகிறது என்பதைக் கவனியுங்கள்.',
    disclaimer: 'இந்தக் கருவி பொதுவான உடல்நலத் தகவல்களை வழங்குகிறது. இது நோயறிதல் அல்ல; மருத்துவரின் ஆலோசனைக்கு மாற்றாகாது.',
  },
  bn: {
    title: 'আপনার স্বাস্থ্য-সহায়িকা',
    subtitle: 'এটি প্রাথমিক তথ্য, রোগ নির্ণয় নয়।',
    empty: 'আপনার অভিজ্ঞতা থেকেই পরের পদক্ষেপ শুরু।',
    emptyHelp: 'আপনি যে পরিবর্তনগুলো লক্ষ করেছেন লিখুন। চিকিৎসকের সঙ্গে কী আলোচনা করবেন তা বুঝতে সাহায্য করব।',
    matched: 'এটি কখনও কখনও যে বিষয়গুলোর সঙ্গে যুক্ত হতে পারে',
    general: 'কিছু বিষয় মনে রাখুন',
    pcos: 'PCOS একটি সম্ভাব্য ব্যাখ্যা হতে পারে',
    pcosText: 'অনিয়মিত মাসিক, ব্রণ, বা মুখ ও শরীরে বেশি লোম কখনও কখনও PCOS-এর সঙ্গে যুক্ত হতে পারে। অন্য কারণও থাকতে পারে; যোগ্য চিকিৎসকই আপনার পরিস্থিতি মূল্যায়ন করতে পারবেন।',
    next: 'পরবর্তী একটি পদক্ষেপ',
    nextText: 'স্ত্রীরোগ বিশেষজ্ঞ বা প্রাথমিক চিকিৎসকের সঙ্গে দেখা করার কথা ভাবুন। উপসর্গ কখন শুরু হয়েছে, মাসিকের তারিখ এবং পরিবর্তনগুলো লিখে নিয়ে যান।',
    track: 'যা লিখে রাখতে পারেন',
    trackText: 'মাসিকের তারিখ ও স্থায়িত্ব, ব্যথা, ত্বক বা লোমের পরিবর্তন, এবং কোন কারণে উপসর্গ বাড়ে বা কমে।',
    generalText: 'উপসর্গের নানা কারণ থাকতে পারে। নতুন হলে, বারবার হলে, বা দৈনন্দিন জীবনে প্রভাব ফেললে স্বাস্থ্যকর্মীর সঙ্গে কথা বলুন।',
    language: 'আপনার সহায়িকাটি বাংলায় দেখানো হচ্ছে।',
    urgent: 'হঠাৎ বা তীব্র ব্যথা, অজ্ঞান হয়ে যাওয়া, শ্বাসকষ্ট, বা টানা ২ ঘণ্টা প্রতি ঘণ্টায় একটি প্যাড সম্পূর্ণ ভিজে গেলে জরুরি চিকিৎসা নিন।',
    generic: 'শেয়ার করার জন্য ধন্যবাদ। একটি উপসর্গেই পুরো বিষয়টি বোঝা যায় না। কখন শুরু হয়েছে, কতবার হচ্ছে এবং কীসে বদলায় তা খেয়াল করুন।',
    disclaimer: 'এই টুল সাধারণ স্বাস্থ্যতথ্য দেয়। এটি রোগ নির্ণয় করতে পারে না বা চিকিৎসকের পরামর্শের বিকল্প নয়।',
  },
}

const symptomPatterns = {
  pcos: /pcos|polycystic|अनियमित|माहवारी|पीरियड.*(देर|अनियमित)|மாதவிடாய்.*(ஒழுங்க|தாமத)|மாதவிடாய் சீரற்ற|অনিয়মিত মাসিক|মাসিক.*(দেরি|অনিয়মিত)/i,
  skin: /acne|pimples|facial hair|chin hair|मुहाँसे|दाने|चेहरे.*बाल|முகப்பரு|முகத்தில்.*முடி|ব্রণ|মুখে.*লোম/i,
  pain: /severe pain|sudden pain|faint|heavy bleeding|soak.*pad|तेज दर्द|बेहोश|बहुत.*खून|கடுமையான வலி|மயக்கம்|அதிக இரத்தப்போக்கு|তীব্র ব্যথা|অজ্ঞান|অতিরিক্ত রক্তপাত/i,
}

const quickPhrases = [
  'My periods are irregular',
  'I have acne or more facial hair',
  'I have lower belly pain',
]

function App() {
  const [symptoms, setSymptoms] = useState('')
  const [language, setLanguage] = useState('en')
  const [guide, setGuide] = useState(null)
  const [authMode, setAuthMode] = useState(null)
  const [authMessage, setAuthMessage] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const copy = translations[language]

  function createGuide(event) {
    event.preventDefault()
    const text = symptoms.trim()
    if (!text) return
    setGuide({
      text,
      pcos: symptomPatterns.pcos.test(text) || symptomPatterns.skin.test(text),
      urgent: symptomPatterns.pain.test(text),
    })
  }

  function addPhrase(phrase) {
    setSymptoms((current) => (current ? `${current}${current.endsWith('.') ? ' ' : '. '}${phrase}` : phrase))
  }

  function openAuth(mode) {
    setAuthMode(mode)
    setAuthMessage('')
  }

  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#242a26]">
      <header className="relative z-20 border-b border-[#e5e6df] bg-[#fbfaf6]">
        <div className="mx-auto flex h-[76px] max-w-[1220px] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Sakhi home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#d96f54] text-white"><Flower2 size={20} strokeWidth={1.8} /></span>
            <span className="font-display text-[25px] leading-none tracking-[-0.8px]">sakhi<span className="text-[#d96f54]">.</span></span>
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#understand">Understand symptoms</a>
            <a className="nav-link" href="#pcos">PCOS, explained</a>
            <a className="nav-link" href="#care">Finding care</a>
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <button className="button-quiet" onClick={() => openAuth('login')}>Log in</button>
            <button className="button-dark" onClick={() => openAuth('register')}>Create account <ArrowRight size={15} /></button>
          </div>
          <button className="icon-button mobile-menu-button" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileMenuOpen((open) => !open)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileMenuOpen && <div className="absolute left-0 right-0 top-full border-b border-[#e5e6df] bg-[#fbfaf6] px-5 py-4 shadow-lg sm:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            <a className="nav-link" href="#understand" onClick={() => setMobileMenuOpen(false)}>Understand symptoms</a>
            <a className="nav-link" href="#pcos" onClick={() => setMobileMenuOpen(false)}>PCOS, explained</a>
            <a className="nav-link" href="#care" onClick={() => setMobileMenuOpen(false)}>Finding care</a>
            <div className="flex gap-2 border-t border-[#e5e6df] pt-4">
              <button className="button-quiet" onClick={() => openAuth('login')}>Log in</button>
              <button className="button-dark" onClick={() => openAuth('register')}>Create account <ArrowRight size={15} /></button>
            </div>
          </nav>
        </div>}
      </header>

      <main id="top">
        <section className="mx-auto max-w-[1220px] px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_310px]">
            <div className="max-w-[740px] animate-rise">
              <p className="eyebrow mb-4"><span className="size-1.5 rounded-full bg-[#d96f54]" /> WOMEN'S HEALTH, IN YOUR WORDS</p>
              <h1 className="font-display max-w-[700px] text-[42px] leading-[1.04] tracking-[-1.4px] sm:text-[57px] sm:tracking-[-1.8px]">Make sense of what<br className="hidden sm:block" /> you’re feeling.</h1>
              <p className="mt-4 max-w-[550px] text-[16px] leading-7 text-[#666e67]">Everyday symptoms can be hard to put into words. Start here for clear information and a more confident conversation about your health.</p>
            </div>
            <div className="hidden border-l border-[#daddd5] pb-1 pl-6 md:block">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#43584e]"><ShieldCheck size={17} className="text-[#4f8d77]" /> Private by design</div>
              <p className="mt-2 max-w-[250px] text-[13px] leading-5 text-[#7b817b]">Your notes stay in this session and are not saved or shared.</p>
            </div>
          </div>

          <div id="understand" className="mt-9 grid scroll-mt-8 gap-4 lg:grid-cols-[1.04fr_0.96fr]">
            <section className="panel animate-rise [animation-delay:80ms]" aria-labelledby="symptom-heading">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">01 <span className="mx-1.5 text-[#c3c7bd]">/</span> YOUR STORY</p>
                  <h2 id="symptom-heading" className="mt-2 font-display text-[27px] tracking-[-0.6px]">What have you noticed?</h2>
                  <p className="mt-1 text-[13px] text-[#737a73]">There’s no wrong way to describe it.</p>
                </div>
                <span className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-[#f9e8e1] text-[#c76149] sm:flex"><MessageCircle size={18} /></span>
              </div>
              <form onSubmit={createGuide}>
                <label htmlFor="symptom-input" className="sr-only">Describe your symptoms</label>
                <textarea id="symptom-input" value={symptoms} onChange={(event) => setSymptoms(event.target.value)} placeholder="For example: My periods have been irregular for a few months, and I’ve noticed more acne..." className="symptom-input" maxLength={1000} />
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#939991]">
                  <span>Write in English, हिन्दी, தமிழ், or বাংলা</span>
                  <span>{symptoms.length}/1000</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {quickPhrases.map((phrase) => <button key={phrase} type="button" className="phrase-chip" onClick={() => addPhrase(phrase)}><span className="text-[#d96f54]">+</span> {phrase}</button>)}
                </div>
                <div className="mt-6 flex flex-col gap-3 border-t border-[#e8e9e3] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <label className="relative flex w-fit items-center gap-2 text-[13px] font-medium text-[#4c554e]">
                    <span className="text-[#888e87]">Response language</span>
                    <select aria-label="Response language" value={language} onChange={(event) => setLanguage(event.target.value)} className="language-select">
                      {languageOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-2 text-[#5a655e]" />
                  </label>
                  <button type="submit" className="button-coral" disabled={!symptoms.trim()}>Help me understand <ArrowRight size={16} /></button>
                </div>
              </form>
              <div className="mt-5 flex items-start gap-2 border-t border-[#e8e9e3] pt-4 text-[11px] leading-[18px] text-[#848b84]">
                <LockKeyhole size={13} className="mt-0.5 shrink-0" /> Your description stays on this device for this session. Avoid including your full name or other identifying details.
              </div>
            </section>

            <section className="panel min-h-[428px] animate-rise [animation-delay:140ms]" aria-live="polite" aria-labelledby="guide-heading">
              <div className="flex items-start justify-between gap-3 border-b border-[#e8e9e3] pb-4">
                <div>
                  <p className="eyebrow">02 <span className="mx-1.5 text-[#c3c7bd]">/</span> YOUR NEXT STEP</p>
                  <h2 id="guide-heading" className="mt-2 font-display text-[25px] tracking-[-0.6px]">{copy.title}</h2>
                  <p className="mt-1 text-[12px] text-[#808780]">{copy.subtitle}</p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e8f0e8] text-[#477865]"><Sparkles size={18} /></span>
              </div>
              {guide ? <div className="pt-5 animate-rise">
                <p className="text-[12px] leading-5 text-[#737a73]">“{guide.text}”</p>
                {guide.pcos ? <div className="mt-4 rounded-lg border border-[#f0d8cd] bg-[#fff7f2] p-4">
                  <p className="flex items-center gap-2 text-[14px] font-semibold text-[#954e3e]"><Flower2 size={16} /> {copy.pcos}</p>
                  <p className="mt-2 text-[12px] leading-[19px] text-[#6d625d]">{copy.pcosText}</p>
                </div> : <div className="mt-4 rounded-lg border border-[#e5e8df] bg-[#f8f9f5] p-4">
                  <p className="flex items-center gap-2 text-[14px] font-semibold text-[#43584e]"><HeartPulse size={16} /> {copy.general}</p>
                  <p className="mt-2 text-[12px] leading-[19px] text-[#6f766f]">{copy.generic}</p>
                </div>}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-[#f5f5ef] p-3.5">
                    <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#3c5148]"><Stethoscope size={14} /> {copy.next}</p>
                    <p className="mt-2 text-[11px] leading-[17px] text-[#707770]">{guide.pcos ? copy.nextText : copy.generalText}</p>
                  </div>
                  <div className="rounded-lg bg-[#f5f5ef] p-3.5">
                    <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#3c5148]"><Clock3 size={14} /> {copy.track}</p>
                    <p className="mt-2 text-[11px] leading-[17px] text-[#707770]">{copy.trackText}</p>
                  </div>
                </div>
                {guide.urgent && <div className="mt-4 flex gap-2.5 rounded-lg border border-[#efc9c0] bg-[#fff1ed] p-3.5 text-[12px] leading-[18px] text-[#874739]"><CircleAlert size={17} className="mt-0.5 shrink-0" />{copy.urgent}</div>}
                <p className="mt-4 flex items-start gap-2 text-[10px] leading-[16px] text-[#90968f]"><ShieldCheck size={13} className="mt-0.5 shrink-0" />{copy.disclaimer}</p>
              </div> : <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center">
                <span className="flex size-[58px] items-center justify-center rounded-full bg-[#f6eee5] text-[#c1785d]"><MessageCircle size={24} strokeWidth={1.6} /></span>
                <h3 className="mt-4 font-display text-[21px] tracking-[-0.3px]">{copy.empty}</h3>
                <p className="mt-2 max-w-[330px] text-[13px] leading-[21px] text-[#777f77]">{copy.emptyHelp}</p>
                <span className="mt-5 flex items-center gap-2 text-[11px] text-[#858c84]"><ArrowDown size={13} /> Start with the box on the left</span>
              </div>}
            </section>
          </div>
        </section>

        <section id="pcos" className="scroll-mt-8 border-y border-[#e6e5dc] bg-[#f0f1e9]">
          <div className="mx-auto grid max-w-[1220px] gap-8 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-[0.78fr_1.22fr] md:items-center">
            <div>
              <p className="eyebrow"><span className="size-1.5 rounded-full bg-[#4f8d77]" /> A LITTLE MORE CLARITY</p>
              <h2 className="mt-3 max-w-[410px] font-display text-[32px] leading-[1.12] tracking-[-0.8px]">PCOS, without the medical jargon.</h2>
              <p className="mt-3 max-w-[420px] text-[14px] leading-6 text-[#6b746c]">Polycystic ovary syndrome is a common hormonal condition. The signs can look different from person to person, and symptoms alone can’t confirm it.</p>
              <a className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#416b5a] hover:text-[#d96f54]" href="#care">Explore your care options <ArrowRight size={15} /></a>
            </div>
            <div className="grid gap-0 sm:grid-cols-3">
              {[
                ['01', 'Cycle changes', 'Periods that are irregular, infrequent, or absent.'],
                ['02', 'Skin & hair', 'Acne or increased facial and body hair.'],
                ['03', 'Other changes', 'Some people notice weight or energy changes.'],
              ].map(([number, title, text]) => <div key={number} className="border-t border-[#d9ddd3] py-4 sm:border-l sm:border-t-0 sm:px-5 sm:py-1 first:sm:border-l-0 first:sm:pl-0 last:sm:pr-0">
                <span className="text-[11px] font-semibold text-[#d96f54]">{number}</span>
                <h3 className="mt-2 text-[14px] font-semibold">{title}</h3>
                <p className="mt-1.5 max-w-[210px] text-[12px] leading-[19px] text-[#747b73]">{text}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section id="care" className="mx-auto max-w-[1220px] scroll-mt-8 px-5 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow"><span className="size-1.5 rounded-full bg-[#d96f54]" /> CARE THAT MEETS YOU WHERE YOU ARE</p>
              <h2 className="mt-3 font-display text-[32px] leading-tight tracking-[-0.8px]">You don’t have to figure it out alone.</h2>
            </div>
            <p className="max-w-[420px] text-[13px] leading-6 text-[#737a73]">A gynecologist or primary care clinician can listen, review your symptoms, and discuss whether any checks could help answer your questions.</p>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            <article className="care-step"><span className="step-icon"><MessageCircle size={18} /></span><div><h3>Bring your notes</h3><p>Cycle dates, symptoms, and questions you want answered.</p></div></article>
            <article className="care-step"><span className="step-icon"><Stethoscope size={18} /></span><div><h3>Ask what’s right for you</h3><p>Care is personal. You can ask about options, tests, and follow-up.</p></div></article>
            <article className="care-step"><span className="step-icon"><ShieldCheck size={18} /></span><div><h3>Know when it’s urgent</h3><p>Severe pain, fainting, breathing trouble, or very heavy bleeding needs prompt care.</p></div></article>
          </div>
          <div className="mt-7 flex flex-col justify-between gap-3 border-t border-[#e4e6df] pt-5 text-[11px] leading-5 text-[#868d85] sm:flex-row sm:items-center">
            <p className="max-w-[760px]">Sakhi offers general information, not diagnosis or treatment. It is not a substitute for a qualified healthcare professional.</p>
            <a href="#top" className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-[#476a5c] hover:text-[#d96f54]">Back to top <ArrowDown size={13} className="rotate-180" /></a>
          </div>
        </section>
      </main>

      {authMode && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#18221d]/45 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setAuthMode(null) }}>
        <section className="w-full max-w-[420px] rounded-xl bg-[#fbfaf6] p-6 shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="auth-title">
          <div className="flex items-start justify-between">
            <div><span className="flex size-10 items-center justify-center rounded-xl bg-[#d96f54] text-white"><Flower2 size={20} /></span><h2 id="auth-title" className="mt-5 font-display text-[28px]">{authMode === 'register' ? 'Create your account' : 'Welcome back'}</h2><p className="mt-1 text-[13px] text-[#737a73]">Keep your health notes close, on your terms.</p></div>
            <button className="icon-button" aria-label="Close dialog" onClick={() => setAuthMode(null)}><X size={18} /></button>
          </div>
          <form className="mt-6 space-y-4" onSubmit={(event) => { event.preventDefault(); setAuthMessage('Account access will be available once secure sign-in is connected.') }}>
            {authMode === 'register' && <label className="auth-label">Your name <input className="auth-input" type="text" autoComplete="name" placeholder="Name" required /></label>}
            <label className="auth-label">Email address <input className="auth-input" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label className="auth-label">Password <input className="auth-input" type="password" autoComplete={authMode === 'register' ? 'new-password' : 'current-password'} placeholder="At least 8 characters" minLength={8} required /></label>
            <button type="submit" className="button-coral w-full justify-center">{authMode === 'register' ? 'Create account' : 'Log in'} <ArrowRight size={15} /></button>
            {authMessage && <p className="rounded-lg bg-[#edf2e9] p-3 text-[12px] leading-5 text-[#486657]" role="status">{authMessage}</p>}
          </form>
          <p className="mt-4 text-center text-[11px] leading-5 text-[#858b84]">Secure sign-in is not connected yet. This form does not send or store your details.</p>
          <p className="mt-4 text-center text-[12px] text-[#737a73]">{authMode === 'register' ? 'Already have an account?' : 'New to Sakhi?'} <button className="font-semibold text-[#b85d47] hover:underline" onClick={() => openAuth(authMode === 'register' ? 'login' : 'register')}>{authMode === 'register' ? 'Log in' : 'Create an account'}</button></p>
        </section>
      </div>}
    </div>
  )
}

export default App
