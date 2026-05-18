import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { MessageSquare, Send, User, Clock, Heart, Smile, Reply, Hash } from 'lucide-react';
import { generateMockComments, Comment } from '../../constants/mockComments';

interface MessageBoardProps {
  topic?: string;
}

export const MessageBoard: React.FC<MessageBoardProps> = ({ topic }) => {
  const { t, language } = useLanguage();
  
  // Create a stable local pool for this instance
  const [topicPool] = useState(() => generateMockComments(50, topic));
  
  // Initial static messages
  const [messages, setMessages] = useState<Comment[]>(topicPool.slice(0, 8));
  const [newMessage, setNewMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Profile Management
  const availableAvatars = [
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png',
    '/avatar4.png',
    '/avatar5.png',
    '/avatar6.png',
  ];

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('user-profile');
    if (saved) return JSON.parse(saved);
    return {
      name: '',
      avatar: availableAvatars[0],
      isSet: false
    };
  });

  const [isEditingProfile, setIsEditingProfile] = useState(!profile.isSet);

  useEffect(() => {
    localStorage.setItem('user-profile', JSON.stringify(profile));
  }, [profile]);

  // Quick Emojis
  const emojis = ["🔥", "❤️", "🙌", "🤩", "🤔", "💡", "🚀", "👏"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    if (!profile.name || !profile.isSet) {
      setIsEditingProfile(true);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const msg: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        name: profile.name,
        text: newMessage,
        timestamp: new Date().toISOString(),
        likes: 0,
        avatar: profile.avatar,
        tags: language === 'zh' ? ["首发"] : ["Original"],
        replies: []
      };
      
      setMessages(prev => [msg, ...prev.slice(0, 4)]);
      setNewMessage('');
      setIsSubmitting(false);
    }, 600);
  };

  const handleLike = (id: string) => {
    setLikedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const handleReplySubmit = (commentId: string) => {
    if (!replyText.trim()) return;
    if (!profile.name || !profile.isSet) {
      setIsEditingProfile(true);
      return;
    }

    setMessages(prev => prev.map(msg => {
      if (msg.id === commentId) {
        return {
          ...msg,
          replies: [
            ...msg.replies,
            {
              id: Math.random().toString(36).substr(2, 9),
              name: profile.name,
              avatar: profile.avatar,
              text: replyText,
              timestamp: new Date().toISOString(),
              likes: 0
            }
          ]
        };
      }
      return msg;
    }));
    
    setReplyText('');
    setReplyingTo(null);
  };

  const addEmoji = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
  };

  return (
    <section id="message-board" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-accent mb-4 inline-block px-3 py-1 bg-brand-accent/5 rounded-full border border-brand-accent/10">
                {language === 'zh' ? '互动社区' : 'Social Feed'}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 text-slate-900 leading-tight">
                {t('messageBoard.title')}
              </h2>
              <p className="text-base md:text-lg text-brand-secondary font-medium mb-8 md:mb-10 leading-relaxed">
                {t('messageBoard.subtitle')}
              </p>

              {/* Profile Editor */}
              <AnimatePresence>
                {isEditingProfile ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden"
                  >
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">
                      {language === 'zh' ? '设置您的个人资料' : 'Set Your Profile'}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between gap-2">
                        {availableAvatars.map(av => (
                          <button
                            key={av}
                            onClick={() => setProfile({ ...profile, avatar: av })}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 transition-all ${
                              profile.avatar === av ? 'border-brand-accent scale-110' : 'border-transparent opacity-60 grayscale'
                            }`}
                          >
                            <img src={av} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          placeholder={language === 'zh' ? '输入昵称...' : 'Enter your name...'}
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-white text-sm font-bold focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none"
                        />
                      </div>
                      
                      <button
                        onClick={() => {
                          if (profile.name.trim()) setProfile({ ...profile, isSet: true });
                          setIsEditingProfile(false);
                        }}
                        className="w-full py-3 bg-brand-accent text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform active:scale-95"
                      >
                        {profile.isSet ? (language === 'zh' ? '更新资料' : 'Update Profile') : (language === 'zh' ? '确认加入' : 'Join Community')}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-3 mb-8 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img src={profile.avatar} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">
                        {language === 'zh' ? '当前身份' : 'Current Identity'}
                      </p>
                      <p className="text-sm font-extrabold text-slate-900">{profile.name}</p>
                    </div>
                    <button 
                      onClick={() => setIsEditingProfile(true)}
                      className="text-[10px] font-black uppercase text-brand-accent hover:underline px-2"
                    >
                      {language === 'zh' ? '修改' : 'Edit'}
                    </button>
                  </div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                   <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder={t('messageBoard.placeholder')}
                    className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 pr-14 text-sm font-medium focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all resize-none min-h-[140px] md:min-h-[160px] shadow-inner"
                  />
                  
                  <div className="hidden md:flex absolute top-4 right-6 flex-col gap-2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                    <Smile className="w-5 h-5 text-slate-300" />
                  </div>

                  <div className="absolute bottom-4 left-6 md:left-8 right-16 flex flex-wrap gap-1.5 md:gap-2">
                    {emojis.slice(0, 6).map(e => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => addEmoji(e)}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-xs md:text-sm hover:scale-110 active:scale-95 transition-transform shadow-sm"
                      >
                        {e}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !newMessage.trim()}
                    className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-brand-accent text-white rounded-xl md:rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-xl shadow-indigo-500/20"
                  >
                    <Send className={`w-4 h-4 md:w-5 md:h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  {language === 'zh' ? '实时动态 - 滚动播放中' : 'Live Social Stream - Now Playing'}
                </h3>
              </div>
            </div>

            <div className="relative space-y-4 md:space-y-6 min-h-[500px] md:min-h-[600px]">
              <AnimatePresence initial={false} mode="popLayout">
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                    animate={{ opacity: 1 - index * 0.15, scale: 1 - index * 0.02, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`p-6 md:p-8 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-white shadow-sm hover:shadow-xl transition-all group relative ${index === 0 ? 'ring-2 ring-indigo-500/5 bg-white' : ''}`}
                    style={{ zIndex: 10 - index }}
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border-4 border-white group-hover:rotate-3 transition-transform">
                          <img src={msg.avatar} className="w-full h-full object-cover" />
                        </div>
                        {index === 0 && (
                          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-accent rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-slate-900 truncate">{msg.name}</span>
                            {msg.tags.map(tag => (
                              <span key={tag} className="text-[7px] md:text-[8px] font-black uppercase tracking-tighter px-1.5 py-0.5 bg-slate-200 text-slate-500 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="flex items-center gap-1.5 text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-slate-400">
                            <Clock className="w-2.5 h-2.5" />
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        
                        <p className="text-sm md:text-base text-brand-secondary font-medium leading-relaxed mb-4 md:mb-6">
                          {msg.text}
                        </p>

                        {/* Replies Section */}
                        {msg.replies && msg.replies.length > 0 && (
                          <div className="mb-6 space-y-4 pl-4 border-l-2 border-slate-100">
                            {msg.replies.map(reply => (
                              <div key={reply.id} className="text-sm">
                                <div className="flex items-center gap-3 mb-2">
                                  {reply.avatar ? (
                                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white shadow-sm flex-shrink-0">
                                      <img src={reply.avatar} className="w-full h-full object-cover" />
                                    </div>
                                  ) : (
                                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                                      <User className="w-3 h-3 text-slate-400" />
                                    </div>
                                  )}
                                  <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-slate-700">{reply.name}</span>
                                    <span className="text-[10px] text-slate-400">
                                      {new Date(reply.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-slate-500 font-medium pl-9">{reply.text}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {replyingTo === msg.id && (
                          <div className="mb-6">
                            <div className="relative">
                              <input
                                autoFocus
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleReplySubmit(msg.id)}
                                placeholder={language === 'zh' ? '输入回复...' : 'Type a reply...'}
                                className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none"
                              />
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => handleLike(msg.id)}
                            className={`flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-2xl border transition-all active:scale-90 ${
                              likedIds.has(msg.id) 
                              ? 'bg-red-50 border-red-100 text-red-500' 
                              : 'bg-white border-slate-100 text-slate-400 hover:text-brand-accent'
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${likedIds.has(msg.id) ? 'fill-current' : ''}`} />
                            {msg.likes + (likedIds.has(msg.id) ? 1 : 0)}
                          </button>
                          
                          <button 
                            onClick={() => setReplyingTo(replyingTo === msg.id ? null : msg.id)}
                            className={`flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest transition-colors px-4 py-2 rounded-2xl border ${
                              replyingTo === msg.id 
                              ? 'bg-brand-accent border-brand-accent text-white' 
                              : 'bg-white border-slate-100 text-slate-400 hover:text-brand-accent'
                            }`}
                          >
                            <Reply className="w-3.5 h-3.5" />
                            {language === 'zh' ? '回复' : 'Reply'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Decorative background threads */}
              <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-100 to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

