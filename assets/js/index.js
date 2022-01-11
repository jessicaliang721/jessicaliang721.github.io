import {AccordionItem} from "../../components/accordion-item.js";
import {CardWithLink} from "../../components/card-with-link.js";
import {CardWithModal} from "../../components/card-with-modal.js";
import {TabHeader} from "../../components/tab-header.js";
import {TabBody} from "../../components/tab-body.js";

const JessicaApp = {
    components: {
        AccordionItem,
        CardWithLink,
        CardWithModal,
        TabHeader,
        TabBody
    },
    data() {
        return {
            accordionItems: [
                {
                    id: 'how-se',
                    title: 'How did you become a software engineer?',
                    body: `
                        If you've peeked at my <a href="https://www.linkedin.com/in/jessicaliang721"
                                                      target="_blank">
                            resume</a>, you might've noticed that I graduated from Washington
                            University in St.
                            Louis with a Mechanical Engineering degree. How did I end up as a software engineer? During
                            my senior
                            year of college I took a web development course and loved it. It brought me back to the
                            middle school
                            days of Freewebs (and other self-hosted sites) where I spent hours dabbling with HTML and
                            CSS!
                            Having learned modern, up-to-date web practices, I became very interested in web dev as a
                            possible
                            career. After graduation, I taught myself how to code in JavaScript and was
                            fortunate
                            enough to find a web
                            development job in my hometown, Dallas.
                    `
                },
                {
                    id: 'advice-se',
                    title: 'Any advice for aspiring software engineers?',
                    body: `
                        At the end of the day, software engineering is problem solving. Companies want to
                            see that you can not only talk the talk, but also walk the walk. Prove that you can code!
                            Show off your coding skills with a portfolio of cool projects (they can be official or
                            unofficial). Also make sure you are well-versed in solving coding problems before heading
                            into any interview. Practice those skills
                            on free sites such as <a href="https://leetcode.com/" target="_blank">Leetcode</a> and <a
                                href="https://leetcode.com/" target="_blank">HackerRank</a>.
                    `
                },
                {
                    id: 'job-referral',
                    title: 'Can you give me a job referral?',
                    body: `
                        Yes! I will need your <b>resume, email, and job ID</b> that you want to apply
                            for. You'll receive an email with further instructions once I've submitted the app for you. Ask me for a referral by sending me a message on <a href="https://www.linkedin.com/in/jessicaliang721" target="_blank">LinkedIn</a>.
                    `
                },
                {
                    id: 'open-jobs',
                    title: 'Are you open to finding a new job?',
                    body: `
                         Although I am currently not looking for new opportunities, if you are an innovative company
                            with a mission to better our world through technical solutions, let's chat!
                    `
                }
            ],
            navItems: [
                {
                    href: '#work',
                    text: 'Work'
                },
                {
                    href: '#experience',
                    text: 'Experience'
                },
                {
                    href: '#about',
                    text: 'About'
                },
                {
                    href: '#faq',
                    text: 'FAQ'
                },
                {
                    href: '#contact',
                    text: 'Contact'
                },
            ],
            featuredWorks: [
                {
                    id: 'aui',
                    image: 'assets/images/marcus.png',
                    title: 'Agent UI',
                    dates: '2019-now',
                    summary: 'Build out the front end of a feature-filled customer servicing platform for agents to assist with customer needs.',
                    body: `
                <p>Marcus is Goldman Sach's consumer-facing business. It offers customers products
                                such as savings,
                                loans, and checking. It has also partnered with Apple to issue the <a
                                        href="https://www.apple.com/apple-card" target="_blank">Apple Card</a>.
                                Agent UI (AUI) is the customer servicing application built in-house
                                that agents use to assist Card customers. This feature-rich application
                                contains functionality such as:</p>
                            <ul>
                                <li>Payments</li>
                                <li>Transactions</li>
                                <li>Create interactions and cases</li>
                                <li>Rewards center</li>
                                <li>Document library</li>
                                <li>And more</li>
                            </ul>
                            <p>AUI is used by agents nationwide to service the 1 million+ customers
                                who own an Apple card.</p>
                            <p><b>Role: </b>App Developer</p>
                            <p><b>Responsibilities: </b> Build new features for the app as product and business
                                expand
                                to ensure an optimal agent and customer experience.
                            </p>
                            <p><b>Technologies: </b>React, Redux</p>
            `
                },
                {
                    id: 'profinity',
                    image: 'assets/images/Capital-one-logo.png',
                    title: 'Profinity Data Visualization App',
                    dates: '2018-19',
                    summary: 'Format and prepare raw data to be ingested by a data-visualization app that models various risk profiles in the auto business.',
                    body: `
                <p>Profinity is an in-house machine learning platform built for Capital One's
                                financial service businesses that will automatically update models with fresh
                                data.</p>
                            <p><b>Role: </b>Data Engineer</p>
                            <p><b>Responsibilities: </b> Prepare and re-format raw data so that it can be
                                ingested by the UI. Did this by building a new pipeline using Python for loading
                                data into AWS Redshift tables. Simplified the original process by requiring one
                                customizable configuration file that contains all necessary table information.
                                The configuration file served as a framework for loading a variety of data into
                                the same table. Reduced overall load time by 78%.</p>
                            <p><b>Technologies: </b>Python, Airflow, SQL</p>
            `
                },
                {
                    id: 'loftcc',
                    image: 'assets/images/loft_city_church.png',
                    title: 'Loft City Church Website',
                    dates: '2016',
                    summary: 'Built Loft City Church\'s website from the ground up.',
                    body: `
                <p>LOFT City Church's Wordpress site was several versions out-of-date, and after a
                                crucial
                                update, a new website theme was also vital.</p>
                            <p><b>Role: </b>Web Master</p>
                            <p><b>Responsibilities: </b>Completely redesigned and rebuilt church’s website after
                                upgrading to the latest WordPress version. Enabled users to easily manage,
                                update, and add site content without needing developer help. Added new
                                functionality such as sermon and event managers, which increased user engagement
                                and site visits.</p>
                            <p><b>Technologies: </b>PHP, HTML, CSS</p>
                            <a href="http://loftcitychurch.com" class="btn btn-secondary">Visit website</a>
            `
                }
            ],
            otherWorks: [
                {
                    image: 'assets/images/personal_blog_screenshot.PNG',
                    title: 'Jessica\'s Playground',
                    date: '2021',
                    summary: 'Built personal blog using Jekyll.',
                    link: 'https://blog.jessicaliang.net'
                },
                {
                    image: 'assets/images/FireShot-Capture-2-Home-Gravocore-https___www.gravocore.com_-1024x519.png',
                    title: 'Gravocore',
                    date: '2017',
                    summary: 'Built website with Wordpress, JavaScript/JQuery, CSS.',
                    link: 'https://gravocore.com'
                },
                {
                    image: 'assets/images/FireShot-Capture-52-National-Math-and-Science-Initiative-Home-http___nmsi.imag-dev.com_-1024x581.png',
                    title: 'National Math and Science Initiative',
                    date: '2017',
                    summary: 'Built website with Kentico, Javascript/JQuery, CSS.',
                    link: 'https://www.nms.org'
                },
                {
                    image: 'assets/images/FireShot-Capture-46-Your-Texas-Electricity-Company-I-TXU-Energy-https___www.txu_.com_.png',
                    title: 'TXU Energy',
                    date: '2017',
                    summary: 'Created wireframes for TXU\'s website makeover and built marketing email templates.',
                    link: 'https://www.txu.com'
                },
                {
                    image: 'assets/images/FireShot-Capture-50-Entrust-Retail-Buy-https___buy.entrust.net_index.html_payment.png',
                    title: 'Entrust Datacard',
                    date: '2017',
                    summary: 'Built out the payment flow to purchase SSL certificates with JavaScript/JQuery and CSS.',
                    link: 'https://buy.entrust.net/index.html'
                },
                {
                    image: 'assets/images/FireShot-Capture-32-Home-I-City-of-Denton-https___www.cityofdenton.com_-1024x581.png',
                    title: 'City of Denton',
                    date: '2016',
                    summary: 'Built website with Kentico, Javascript/JQuery, CSS.',
                    link: 'https://www.cityofdenton.com'
                },
                {
                    image: 'assets/images/FireShot-Capture-16-Home-I-Cain-Watters-http___www.cainwatters.com_-1024x554.png',
                    title: 'Cain Watters & Associates',
                    date: '2016',
                    summary: 'Built website with Wordpress, JavaScript/JQuery, CSS.',
                    link: 'https://www.cainwatters.com'
                },
                {
                    image: 'assets/images/FireShot-Capture-38-Home-I-Triumph-Bancorp-https___www.triumphbancorp.com_-1024x554.png',
                    title: 'Triumph Bancorp',
                    date: '2015',
                    summary: 'Built website with Wordpress, JavaScript/JQuery, CSS.',
                    link: 'https://www.triumphbancorp.com'
                }
            ],
            tabItems: [
                {
                    id: 'gs',
                    title: 'Goldman Sachs',
                    roles: [
                        {
                            position: 'Software Engineer',
                            dates: '2020-now',
                            location: 'Dallas, TX',
                            body: `
                                <p>
                                    Build additional functionalities within servicing application used by agents to support cardholders of the GM card. Continue to support functionalities that serve existing partners and improve overall agent productivity experience.
                                </p>
                            `
                        },
                        {
                            position: 'Software Engineer',
                            dates: '2019',
                            location: 'Dallas, TX',
                            body: `
                                <p>
                                    Marcus is the consumer-facing side of the Goldman Sachs business.
                                </p>
                                <p>
                                    Build and maintain a feature-rich application used by customer servicing agents to support the 1m+ Apple Card customers. Add new features to the app as the product and business expand to ensure an optimal agent and customer experience.
                                </p>
                            `
                        }
                    ]
                },
                {
                    id: 'c1',
                    title: 'Capital One',
                    roles: [
                        {
                            position: 'Data Engineer',
                            dates: 'May 2018 - May 2019',
                            location: 'Plano, TX',
                            body: `
                                <p>
                                    Quickly learned Python and AWS tools to update 30+ files within the existing data engine pipeline. Removed and replaced hard-coded strings with variables to extend the code’s usage across multiple AWS S3 buckets. Learned to test and automatically run the processes using Airflow.
                                </p>
                                <p>
                                    Built a new pipeline using Python for loading data into AWS Redshift tables. Simplified the original process by requiring one customizable configuration file that contains all necessary table information. The configuration file served as a framework for loading a variety of data into the same table. Reduced overall load time by 78%.
                                </p>
                            `
                        },
                        {
                            position: 'Application Developer',
                            dates: 'May 2017 - May 2018',
                            location: 'Plano, TX',
                            body: `
                                <p>
                                    Designed and built a custom web application using Angular and D3.js for data scientists to efficiently view and analyze large-scale data. Simplified analysts’ process from searching through hundreds of PowerPoint slides to easily browsing graphed data on a feature-rich web app.
                                </p>
                                <p>
                                    Researched and implemented UX improvements for data querying web application. Reduced the time needed for users to fill out forms to perform queries and administration tasks.
                                </p>
                                <p>
                                    Add new features to, streamline, and maintain the data pull engine script that prepares model monitoring data for the frontend web application to consume.
                                </p>
                            `
                        }
                    ]
                },
                {
                    id: 'imaginuity',
                    title: 'Imaginuity',
                    roles: [
                        {
                            position: 'Web Developer',
                            dates: 'Sept 2015 - May 2017',
                            location: 'Dallas, TX',
                            body: `
                                <p>
                                    Developed fully responsive websites that met industry and accessibility standards within tight timelines.
                                </p>
                                <p>
                                    Worked together with clients, creative, and account management teams to design and implement custom web products. Solutions improved client web presence by increasing unique page views and social shares.
                                </p>
                                <p>
                                    Trained clients on how to self-manage their newly launched website and provided site maintenance. Recommended site performance improvements which increased page load speed and enhanced SEO.
                                </p>
                            `
                        }
                    ]
                },
            ]
        }
    }
}

const app = Vue.createApp(JessicaApp);

app.mount('#jessica-app');