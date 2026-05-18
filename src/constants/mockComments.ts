
export interface Reply {
  id: string;
  name: string;
  avatar?: string;
  text: string;
  timestamp: string;
  likes: number;
}

export interface Comment {
  id: string;
  name: string;
  text: string;
  timestamp: string;
  likes: number;
  avatar: string;
  tags: string[];
  replies: Reply[];
}

const names = ["Alex Chen", "Sophia Wang", "Marcus Thorne", "Elena Petrova", "Hiroshi Tanaka", "Sarah Jenkins", "Luca Moretti", "Anya Gupta", "David Schmidt", "Chloe Dubois"];
const avatars = Array.from({ length: 8 }, (_, i) => `/avatar${i + 1}.png`);
const topics = {
  en: [
    "W launch! 🚀",
    "Massive for the industry.",
    "Need this asap!!",
    "LFG!!!! 🔥🔥🔥",
    "Clean UI, who's the dev?",
    "About time someone addressed this.",
    "Big moves only 📈",
    "Wait this is actually insane...",
    "Can't believe we're already at 6G lol",
    "Lowkey a game changer.",
    "Rip 5G it was nice knowing ya 😂",
    "Manifesting this for my farm.",
    "Sheesh 💸💸💸",
    "Underrated analysis.",
    "Straight facts.",
    "The design is absolute 🔥",
    "Finally some good news today.",
    "Is this real life or is it just fantasy?",
    "I'm here for it.",
    "Goat content as always 🐐",
    "This is why I subscribe.",
    "Vibes are immaculate.",
    "Let's goooo!",
    "Massive W.",
    "Take my money 💰",
    "Still processing this...",
    "Wait, what??",
    "Meh, seen better.",
    "First! 🥇",
    "Quality content every single time.",
    "Too long, didn't read lol",
    "Fake news or am I dreaming?",
    "Absolutely love the bilingual format. 🔥",
    "Is this real life?",
    "Not impressed tbh.",
    "Pretty good summary.",
    "Boring...",
    "YES! Finally!",
    "Who writes this? Legend.",
    "Fantastic read.",
    "Mind-blowing 🤯",
    "Solid analysis.",
    "Bravo! 👏",
    "Informative but make it fashion.",
    "Well done guys.",
    "I learned something new today.",
    "This is the future.",
    "Awesome.",
    "Heart 🧡",
    "Nice.",
    "Super!",
    "Perfect.",
    "Interesting choice of words...",
    "I'll skip this one."
  ],
  zh: [
    "666，这也太强了吧！🔥",
    "前排围观，大佬带带我",
    "这就是未来感吗？爱了爱了",
    "大型真香现场",
    "农业AI真的要火了，支持！",
    "这就是传说中的降维打击吗？",
    "这就6G了？5G还没玩明白呢哈哈 😂",
    "这个UI设计我给满分，太丝滑了",
    "蹲一个后续，感觉还有料",
    "太有道理了，赞一个！👍",
    "这翻译绝了，中英双语赛高",
    "活久见系列...",
    "瑞思拜 (Respect) 🫡",
    "格局打开了！📈",
    "小图看成啥了，点进来针不戳",
    "冲冲冲！北京峰会加油 🚀",
    "大佬分析得透彻，学到了",
    "这也太卷了吧...",
    "涨姿势了！",
    "这种高质量内容能不能多来点？",
    "点赞走起！",
    "第一！🥇",
    "太长不看 (并没有，看完了很香)",
    "是真的吗？求验证",
    "爱了爱了，这种风格我喜欢",
    "这就是科技的力量吗？",
    "也就一般般吧 (酸了)",
    "做得好，继续加油！",
    "这就是未来？确实震撼",
    "学到了新东西，感谢分享",
    "我听烦了，这种陈词滥调",
    "这就是未来。",
    "这是过去的事了。",
    "太酷了！🚀",
    "很糟糕...",
    "也许吧。",
    "肯定。",
    "不错不错。",
    "不好看...",
    "超级赞！",
    "差评。",
    "完美！",
    "用词耐人寻味...",
    "跳过这篇。"
  ]
};

const replyTexts = {
  en: ["Agreed!!", "Massive W.", "Actually true lol", "Idk about that one chief", "Spitting straight facts", "Interesting take for sure", "Facts 💯", "This is it."],
  zh: ["确实如此！💯", "大佬说得对", "这就很离谱哈哈", "我觉得还行吧", "精辟啊兄dei", "视角独特，学到了", "扎心了老铁", "冲就完事了"]
};

const topicSpecificComments = {
  'agri-ai': {
    en: [
      "AI in farming is the future! 🌾",
      "That harvest robot looks sick.",
      "Cost efficiency +100% 📈",
      "Sustainable farming finally gets a tech boost.",
      "Will this work for small farms too?",
      "Need this for my vineyard.",
      "AgriTech is where the smart money is.",
      "Green technology wins again.",
      "Wow, the precision is insane.",
      "Food security solved? 🍎"
    ],
    zh: [
      "农业AI化真的是大趋势！🌾",
      "采摘机器人看起来太硬核了。",
      "成本直降，效率直接拉满 📈",
      "可持续农业终于有科技加持了。",
      "这种小农场能用吗？",
      "我的果园也需要一个。",
      "农业科技才是硬道理。",
      "绿色科技yyds。",
      "这精度，真给力。",
      "粮食安全有保障了 🍎"
    ]
  },
  'market-rally': {
    en: [
      "Bullish on these numbers! 📈",
      "Best market rally in months.",
      "Is this the bottom? 💎",
      "Wait for the dip or buy now?",
      "The recovery is faster than expected.",
      "Finally seeing some green in my portfolio.",
      "To the moon! 🚀",
      "Massive gains incoming.",
      "Market sentiment is finally shifting.",
      "Economy is looking strong."
    ],
    zh: [
      "这波行情稳了！📈",
      "最近几个月最猛的一次反弹。",
      "这是见底了吗？💎",
      "是等回调还是直接上车？",
      "复苏比预想的要快啊。",
      "账户终于见红（指盈利）了。",
      "起飞！🚀",
      "大肉在后面。",
      "市场情绪终于转过来了。",
      "经济韧性够强。"
    ]
  },
  'silk-road': {
    en: [
      "Silk Road arts are stunning! ✨",
      "Cultural exchange at its best.",
      "Want to visit those exhibits.",
      "History meets modern digital art.",
      "Beautiful blend of cultures.",
      "Central Asia is so underrated.",
      "The visual effects are next level.",
      "A bridge between East and West.",
      "Digital Silk Road indeed.",
      "Need to buy tickets now."
    ],
    zh: [
      "丝绸之路的艺术太震撼了！✨",
      "中西文化交流的典范。",
      "好想去现场看看这些展品。",
      "历史与现代数字艺术的完美融合。",
      "文化大熔炉，美得窒息。",
      "中亚文化被严重低估了。",
      "视觉效果真的顶。",
      "东西方文化的一座桥梁。",
      "名副其实的数字丝绸之路。",
      "得赶紧去预订门票了。"
    ]
  },
  'sat-6g': {
    en: [
      "6G is coming faster than we think! 🛰️",
      "Satellite internet everywhere.",
      "Ping 0ms? Imagine that.",
      "Global connectivity is the goal.",
      "SpaceX better watch out lol.",
      "Next-gen hardware is wild.",
      "Broadband in the middle of nowhere.",
      "Science fiction becoming reality.",
      "The latency reduction is massive.",
      "Future is looking bright (and fast)."
    ],
    zh: [
      "6G时代比想象中来得快！🛰️",
      "全球卫星上网不是梦。",
      "0延迟？想想就刺激。",
      "全球互联才是终极目标。",
      "商业航天这块要起飞了。",
      "下一代硬件真的猛。",
      "在无人区也能刷抖音了。",
      "科幻电影照进现实。",
      "延迟降低太关键了。",
      "未来的网速，想象不到的多快。"
    ]
  },
  'energy-milestone': {
    en: [
      "Clean energy milestone achieved! ⚡",
      "Hydrogen is the future.",
      "Goodbye fossil fuels.",
      "Engineering marvel.",
      "Efficiency reached new heights.",
      "This is how we save the planet.",
      "Scalable energy solutions.",
      "Net zero by 2050 looking doable.",
      "Incredible technical detail.",
      "Powering the future."
    ],
    zh: [
      "清洁能源里程碑！⚡",
      "氢能就是未来。",
      "告别传统化石燃料。",
      "工程学奇迹。",
      "效率达到了新高度。",
      "这才是拯救地球的正确姿势。",
      "可扩展的能源解决方案到位了。",
      "2050净零排放有望了。",
      "技术细节拉满。",
      "为未来注入动力。"
    ]
  },
  'trump-visit': {
    en: [
      "Big diplomatic move. 🇺🇸🇨🇳",
      "Global eyes on Beijing.",
      "Interesting timing.",
      "Diplomacy matters.",
      "Huge for trade relations.",
      "The visuals of the meeting are powerful.",
      "History in the making.",
      "Hope for stable relations.",
      "Big impact on the markets too.",
      "Wait and see the outcome."
    ],
    zh: [
      "重大的外交动向。🇺🇸🇨🇳",
      "全球目光聚焦北京。",
      "这个时间点很有意思。",
      "外交无小事。",
      "对贸易关系意义重大。",
      "会面现场很有气势。",
      "正在见证历史。",
      "希望能有稳定的合作关系。",
      "对市场的影响也会很大。",
      "期待接下来的成果。"
    ]
  }
};

export const generateMockComments = (count: number, topicKey?: string): Comment[] => {
  return Array.from({ length: count }, (_, i) => {
    const isChinese = Math.random() > 0.5;
    const lang = isChinese ? 'zh' : 'en';
    
    let text = "";
    if (topicKey && topicSpecificComments[topicKey as keyof typeof topicSpecificComments]) {
      const pool = topicSpecificComments[topicKey as keyof typeof topicSpecificComments][lang];
      // Shuffle or randomize from specific pool + general pool
      if (Math.random() > 0.3) {
        text = pool[Math.floor(Math.random() * pool.length)];
      } else {
        text = topics[lang][Math.floor(Math.random() * topics[lang].length)];
      }
    } else {
      text = topics[lang][Math.floor(Math.random() * topics[lang].length)];
    }
    
    const replyCount = Math.floor(Math.random() * 3);
    const replies = Array.from({ length: replyCount }, (_, i2) => ({
      id: `reply-${i}-${i2}`,
      name: names[Math.floor(Math.random() * names.length)],
      text: replyTexts[lang][Math.floor(Math.random() * replyTexts[lang].length)],
      timestamp: new Date(Date.now() - Math.floor(Math.random() * 5000000)).toISOString(),
      likes: Math.floor(Math.random() * 100)
    }));

    return {
      id: `comment-${i}`,
      name: names[Math.floor(Math.random() * names.length)],
      text: text,
      timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)).toISOString(),
      likes: Math.floor(Math.random() * 500),
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      tags: isChinese ? ["热门", "最新"] : ["Trending", "New"],
      replies
    };
  });
};

export const mockComments = generateMockComments(200);
