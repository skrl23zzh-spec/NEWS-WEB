import { Article } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    category: 'article.cat.science',
    titles: {
      en: "Abyss Horizons: First Permanent Deep-Sea Research Station Activated",
      zh: '深渊地平线：首个永久性深海研究站正式启用'
    },
    excerpts: {
      en: 'A major leap in oceanography: the new station at 6,000 meters depth will provide unprecedented data on climate change and marine biodiversity.',
      zh: '海洋学的重大飞跃：位于 6000 米深处的两个新工作站将提供有关气候变化和海洋生物多样性的前所未有的数据。'
    },
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800',
    date: '2026-05-18',
    author: 'Sina Science',
    url: '/deep-sea'
  },
  {
    id: '2',
    category: 'article.cat.economics',
    titles: {
      en: 'Global Markets Rally as 2026 Tech Recovery Gains Momentum',
      zh: '2026 科技复苏势头强劲，全球市场迎来大涨'
    },
    excerpts: {
      en: 'Investors show renewed confidence as semiconductor production hits record highs and AI implementation boosts productivity across sectors.',
      zh: '随着半导体产量创下历史新高，以及人工智能的应用提升了各行业的生产力，投资者的信心正在恢复。'
    },
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    date: '2026-05-17',
    author: 'Sina Finance',
    url: '/market-rally'
  },
  {
    id: '3',
    category: 'article.cat.tech',
    titles: {
      en: 'First Commercial 6G Satellite Constellation Officially Activated',
      zh: '首个商业 6G 卫星星座正式启动'
    },
    excerpts: {
      en: 'A major milestone in global connectivity: the new network promises ultra-low latency and universal coverage for the remote autonomous industry.',
      zh: '全球互联的重要里程碑：新网络承诺为远程自动驾驶行业提供超低延迟和全球覆盖。'
    },
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    date: '2026-05-16',
    author: 'Sina Tech',
    url: '/sat-6g'
  },
  {
    id: '4',
    category: 'article.cat.world',
    titles: {
      en: "Universal Heritage: 2026 Silk Road Digital Arts Festival",
      zh: '普世遗产：2026 丝绸之路数字艺术节'
    },
    excerpts: {
      en: 'Merging ancient heritage with cutting-edge VR tech, the festival attracts millions of virtual and physical visitors to the historic capital.',
      zh: '将古代遗产与尖端虚拟现实技术相结合，该艺术节吸引了数百万虚拟和实体的游客来到这座历史之都。'
    },
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    date: '2026-05-15',
    author: 'Sina World',
    url: '/silk-road'
  },
  {
    id: '5',
    category: 'article.cat.climate',
    titles: {
      en: 'Renewable Power Milestone: 2026 Solar Output Record',
      zh: '可再生能源里程碑：2026 太阳能发电量纪录'
    },
    excerpts: {
      en: 'Efficient new cell technology and massive grid expansions lead to a historic shift in the national energy mix this quarter.',
      zh: '高效的新型电池技术和大规模的电网扩张导致本季度国家能源结构发生了历史性转变。'
    },
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
    date: '2026-05-14',
    author: 'Sina Environment',
    url: '/energy-milestone'
  },
  {
    id: '6',
    category: 'article.cat.climate',
    titles: {
      en: 'Urban Reforestation: The City of the Future is a Forest',
      zh: '城市造林：未来的城市是一座森林'
    },
    excerpts: {
      en: 'New urban design protocols prioritized native biodiversity, leading to cooler temperatures and improved mental health in metropolitan hubs.',
      zh: '新的城市设计规范优先考虑本地生物多样性，从而降低了大都市枢纽的温度并改善了心理健康。'
    },
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800',
    date: '2026-05-13',
    author: 'Sina Environment',
    url: '/urban-forest'
  }
];
