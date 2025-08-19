import type { Post, Project } from './types';
import { BookOpen, Code, Mic } from 'lucide-react';

export const posts: Post[] = [
  {
    slug: 'my-first-post',
    title: 'Welcome to my new blog!',
    description: 'An introduction to my journey learning Korean and what to expect from this blog.',
    content: `
<p>Hello and welcome! I'm Phuc Lee, and this is my new space on the internet dedicated to my journey of learning the Korean language (Tiếng Hàn). I've always been fascinated by Korean culture, from its cinema to its food, and I finally decided to dive deep into learning the language.</p>
<p>This blog will serve as my personal diary, a place to share my progress, the resources I find helpful, the challenges I face, and the small victories I celebrate along the way. I'm not an expert, just a passionate learner. My hope is that by sharing my experiences, I can connect with other learners and perhaps even inspire someone to start their own language-learning adventure.</p>
<p>Expect to find posts about grammar points that made me scratch my head, vocabulary learning techniques, reviews of textbooks and apps, and reflections on Korean culture as I understand it better through its language. I'm excited to have you here. Let's learn together!</p>
`,
    pinned: true,
  },
  {
    slug: 'understanding-korean-particles',
    title: 'A Beginner\'s Guide to Korean Particles (은/는, 이/가)',
    description: 'Breaking down the most common and often confusing topic markers and subject markers in Korean.',
    content: `
<p>One of the first major hurdles for any beginner in Korean is understanding the particle system. Unlike English, Korean uses particles attached to nouns to indicate their grammatical function in a sentence. The most fundamental of these are the topic markers <strong>은/는 (eun/neun)</strong> and the subject markers <strong>이/가 (i/ga)</strong>.</p>
<p>At first glance, they seem interchangeable, but they carry subtle and important differences in nuance. In this post, we'll break down the core functions of each pair and look at examples to help you distinguish when to use which.</p>
<h3>Topic Markers: 은 (eun) / 는 (neun)</h3>
<p>Used to introduce a topic of conversation. It's like saying "As for..." or "Speaking of...". You use <strong>은</strong> after a noun ending in a consonant and <strong>는</strong> after a noun ending in a vowel.</p>
<p>Example: <strong>저는</strong> 학생입니다. (<strong>Jeo-neun</strong> haksaeng-imnida.) - "As for me, I am a student." Here, "I" is the topic.</p>
<h3>Subject Markers: 이 (i) / 가 (ga)</h3>
<p>Used to identify the subject of a verb, the one performing the action. You use <strong>이</strong> after a consonant and <strong>가</strong> after a vowel.</p>
<p>Example: 날씨<strong>가</strong> 좋습니다. (Nalssi-<strong>ga</strong> josseumnida.) - "The weather is good." Here, "weather" is the subject being described.</p>
<p>The distinction is subtle but crucial for sounding natural. We'll explore more complex scenarios and the feeling they convey in a future post!</p>
`,
    pinned: true,
  },
  {
    slug: 'my-favorite-learning-resources',
    title: 'My Favorite Resources for Learning Korean',
    description: 'A curated list of apps, websites, and books that have helped me on my language learning journey.',
    content: `
<p>When you're self-studying a language, having the right resources can make all the difference. Over the past few months, I've tried dozens of different tools. Here's a list of the ones that have truly stuck with me and become part of my daily routine.</p>
<h3>Apps</h4>
<ul>
  <li><strong>Duolingo:</strong> Great for a fun, gamified start and vocabulary building.</li>
  <li><strong>Memrise:</strong> Excellent for memorizing vocabulary with mnemonics and user-created decks.</li>
  <li><strong>HelloTalk:</strong> Invaluable for practicing with native speakers.</li>
</ul>
<h3>Websites</h4>
<ul>
  <li><strong>Talk To Me In Korean (TTMIK):</strong> The holy grail for grammar. Their lessons are structured, clear, and come with PDFs and audio.</li>
  <li><strong>Naver Dictionary:</strong> The most comprehensive Korean-English dictionary, complete with example sentences and V-Live integration.</li>
</ul>
<h3>Books</h4>
<ul>
  <li><strong>"Korean Grammar in Use" series:</strong> A fantastic, in-depth reference for when you need more detail than online resources provide.</li>
</ul>
<p>What are your favorite resources? Let me know!</p>
`,
  },
];

export const projects: Project[] = [
  {
    title: 'Korean Vocabulary Quiz App',
    description: 'A simple web app I built to test my Korean vocabulary using spaced repetition.',
    link: '#',
    icon: Code,
  },
  {
    title: 'TOPIK Study Notes',
    description: 'A public repository of my study notes as I prepare for the Test of Proficiency in Korean.',
    link: '#',
    icon: BookOpen,
  },
  {
    title: 'Pronunciation Practice Recordings',
    description: 'A collection of audio clips where I practice and get feedback on my Korean pronunciation.',
    icon: Mic,
  },
];
