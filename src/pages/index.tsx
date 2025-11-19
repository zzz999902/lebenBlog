import type { ReactNode } from 'react';
import { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const EXPERIENCES = [
  {
    company: '自由职业',
    role: 'Front-end Engineer',
    period: '2025.07 - 至今',
    location: 'Shenyang · China',
    summary: '自由职业',
    stack: [],
  },
  {
    company: '北京TATA木门',
    role: 'Front-end Engineer',
    period: '2022.07 - 2025.07',
    location: 'Beijing · China',
    summary: '参与内部平台迭代，打造统一的开发者门户体验。',
    stack: ['React', 'TypeScript'],
  },
  {
    company: '沈阳智能大数据科技有限公司',
    role: 'Front-end Engineer',
    period: '2021.07 - 2022.02',
    location: 'Shenyang · China',
    summary: '负责数据可视化后台的前端开发，主导 React/Vue 组件库落地。',
    stack: ['React', 'Vue', 'JavaScript'],
  },
];

const PROJECTS = [
  {
    company: '暂时没有部署的项目',
    role: '',
    period: '2021-2026',
    location: '',
    summary: '',
    stack: ['React', 'TypeScript', 'Node'],
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState<'work' | 'project'>('work');
  const list = activeTab === 'work' ? EXPERIENCES : PROJECTS;
  return (
    <Layout
      title={siteConfig.title}
      description="前端的日常记录">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.text}>
            <p className={styles.greeting}>Leben</p>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
            <div className={styles.avatarWrapper}>
              <img
                src="/img/docusaurus.png"
                alt="肇旭阳头像"
                className={styles.avatar}
              />
            </div>
            <p className={styles.intro}>
              前端工程师，这里记录灵感、
              实验与生活片段。
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/blog">
                查看我的日常
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.experienceSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.tabs}>
              <button
                type="button"
                className={
                  activeTab === 'work'
                    ? `${styles.tab} ${styles.active}`
                    : styles.tab
                }
                onClick={() => setActiveTab('work')}>
                WORK
              </button>
              <button
                type="button"
                className={
                  activeTab === 'project'
                    ? `${styles.tab} ${styles.active}`
                    : styles.tab
                }
                onClick={() => setActiveTab('project')}>
                PROJECTS
              </button>
            </div>
          </div>
          <div className={styles.timeline}>
            {list.map((exp) => (
              <article className={styles.card} key={`${activeTab}-${exp.company}`}>
                <header className={styles.cardHeader}>
                  <div>
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </header>
                <p className={styles.location}>{exp.location}</p>
                <p className={styles.summary}>{exp.summary}</p>
                <div className={styles.tags}>
                  {exp.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
