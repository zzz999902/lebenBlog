import type { ReactNode } from 'react';
import { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from './index.module.css';

const EXPERIENCES = [
  {
    company: 'Freelancer',
    role: 'Front-end Engineer',
    period: '2025.07 - 至今',
    location: 'Shenyang · China',
    summary: 'Freelancer',
    stack: [],
  },
  {
    company: 'Beijing TATA Wooden Doors',
    role: 'Front-end Engineer',
    period: '2022.07 - 2025.07',
    location: 'Beijing · China',
    summary: 'Participate in the internal platform iteration and create a unified developer portal experience.',
    stack: ['React', 'TypeScript'],
  },
  {
    company: 'Shenyang Intelligent Big Data Technology Co., LTD',
    role: 'Front-end Engineer',
    period: '2021.07 - 2022.02',
    location: 'Shenyang · China',
    summary: 'Responsible for the front-end development of the data visualization backend and leading the implementation of the React/Vue component library.',
    stack: ['React', 'Vue', 'JavaScript'],
  },
];

const PROJECTS = [
  {
    company: 'There are no deployed projects for the time being',
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
                src="/img/liutian.png"
                alt="头像"
                className={styles.avatar}
              />
            </div>
            <p className={styles.intro}>
              这里记录日常的感悟、生活片段、好的习惯、值得学习的东西。
            </p>
            <div className={styles.actions}>
              <Link className={styles.customButton} to="/blog">
                查看我的日常
              </Link>
            </div>
          </div>
          <div className={styles.featuresWrapper}>
            <HomepageFeatures />
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
