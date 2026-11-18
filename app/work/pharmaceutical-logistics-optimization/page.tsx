import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './case-study.module.css';

const title = "Case Study: Optimizing Logistics for a D2C Pharma Brand";
const description = 'A D2C pharmaceutical logistics case study covering rural order fulfillment, warehouse automation, and bulk shipping with India Post.';

export const metadata: Metadata = {
  title: `${title} | Hisham Ilyas`,
  description,
  openGraph: { title, description, type: 'article' },
};

export default function PharmaLogisticsCaseStudy() {
  return (
    <main className={`wrap ${styles.page}`}>
      <Link className="text-link" href="/#work">
        BACK TO SELECTED WORK <ArrowUpRight size={19} aria-hidden="true" />
      </Link>
      <article>
        <header className={styles.header}>
          <p className="section-index"><span className="index-dot" /> OPERATIONS · CASE STUDY</p>
          <h1>{title}</h1>
        </header>
        <div className={styles.prose}>
          <section>
            <h2>{"Client Overview"}</h2>
            <p>{"A Kerala-based pharmaceutical company specializing in homeopathic medicines for agriculture was facing a logistical bottleneck that severely impacted its ability to fulfill customer orders. The company followed a D2C (Direct-to-Consumer) model, where customers placed orders through their website and other online platforms. However, reaching farmers in remote villages posed a major challenge, as most traditional shipping services did not cover these areas."}</p>
            <p>{"With order volumes rapidly increasing, the company struggled to scale its logistics operations, leading to delayed deliveries, dissatisfied customers, and lost revenue."}</p>
          </section>

          <section>
            <h2>{"Challenges"}</h2>
            <h3><strong>{"1. Limited Shipping Providers for Rural Areas"}</strong></h3>
            <ul>
              <li>{"The company’s customer base was primarily farmers in remote Indian villages, where most private courier services did not offer delivery."}
              </li>
              <li>{"Logistics aggregators such as Shiprocket and Pickrr were unable to cover these pin codes, making them unreliable options."}
              </li>
            </ul>
            <h3><strong>{"2. Over-Reliance on the Indian Postal Service"}</strong></h3>
            <ul>
              <li>{"The only available shipping option was India Post, which initially processed around 20-30 orders per day."}
              </li>
              <li>{"As daily order volumes grew to 100+ and later 500+, India Post refused to process large batches at once, forcing the company to split shipments over multiple days."}
              </li>
            </ul>
            <h3><strong>{"3. Postal Department’s Manual Processing Bottleneck"}</strong></h3>
            <ul>
              <li>{"India Post followed a bagging system where shipments to similar pin codes were grouped in sacks for easier tracking."}
              </li>
              <li>{"Since each of the client’s orders had different pin codes, manual sorting at the post office became a time-consuming task."}
              </li>
              <li>{"Barcode generation and entry had to be done manually at the post office, further slowing down the shipping process."}
              </li>
            </ul>
            <h3><strong>{"4. Scalability & Customer Experience Concerns"}</strong></h3>
            <ul>
              <li>{"The delays in shipping led to customer dissatisfaction, as farmers relied on timely deliveries."}
              </li>
              <li>{"The lack of a structured logistics workflow meant the company couldn’t scale beyond its current shipping limits without risking major operational inefficiencies."}
              </li>
            </ul>
          </section>

          <section>
            <h2>{"Strategy & Solution"}</h2>
            <h3><strong>{"1. On-Site Process Analysis at India Post"}</strong></h3>
            <ul>
              <li>{"We conducted on-ground research at the post office to understand their sorting and bagging process, identifying key bottlenecks in how they handled bulk shipments."}
              </li>
              <li>{"The main issue was that each order needed to be manually sorted, barcoded, and entered into their system, which wasn’t feasible for high volumes."}
              </li>
            </ul>
            <h3><strong>{"2. Tech-Driven Logistics Optimization"}</strong></h3>
            <p>{"To align the company’s operations with the postal department’s workflow, we developed an automated logistics system that seamlessly integrated with their Order Management System (OMS)."}</p>
            <h4><strong>{"A. Barcode Pre-Assignment & Labeling at Warehouse"}</strong></h4>
            <ul>
              <li>{"Instead of generating barcodes at the post office, we collected barcode sets from India Post in advance (1-2 days prior)."}
              </li>
              <li>{"Warehouse staff pasted pre-assigned barcodes onto products at the time of labeling, eliminating the need for manual barcode entry at the post office."}
              </li>
            </ul>
            <h4><strong>{"B. Optimized Picklists for Warehouse Efficiency"}</strong></h4>
            <ul>
              <li>{"A new picklist generation system was introduced, ensuring products were picked and grouped in the exact order required for India Post’s bagging strategy."}
              </li>
              <li>{"This reduced sorting time at the post office, allowing faster bulk processing."}
              </li>
            </ul>
            <h4><strong>{"C. Mobile Scanning App for Real-Time Tracking"}</strong></h4>
            <ul>
              <li>{"Warehouse pickers were equipped with a mobile scanning app to log each barcode against its respective order, ensuring accuracy."}
              </li>
            </ul>
            <h4><strong>{"D. Automated Bulk Shipping Reports for India Post"}</strong></h4>
            <ul>
              <li>{"The system auto-generated shipping reports in the exact format required by the postal department."}
              </li>
              <li>{"Instead of manual data entry, postal employees could simply upload the report, dramatically reducing processing time."}
              </li>
            </ul>
          </section>

          <section>
            <h2>{"Results & Business Impact"}</h2>
            <ul>
              <li><strong>{"80X Increase in Daily Shipping Capacity"}</strong>
                <ul>
                  <li>{"The client scaled from processing 20-30 orders per day to handling 500+ orders daily without delays or backlogs."}
                  </li>
                </ul>
              </li>
              <li><strong>{"40% Increase in Sales Growth (Next Quarter)"}</strong>
                <ul>
                  <li>{"Faster and more reliable shipping led to increased customer trust, resulting in a 40% jump in quarterly sales."}
                  </li>
                </ul>
              </li>
              <li><strong>{"Drastically Reduced Processing Time"}</strong>
                <ul>
                  <li>{"The time taken for India Post to process orders dropped from hours to minutes, as shipments arrived pre-sorted, pre-labeled, and system-ready."}
                  </li>
                </ul>
              </li>
              <li><strong>{"Enhanced Customer Trust & Brand Reputation"}</strong>
                <ul>
                  <li>{"Farmers in remote areas who previously waited weeks for deliveries now received orders within 7-10 days."}
                  </li>
                  <li>{"This boosted brand loyalty and word-of-mouth recommendations, driving organic customer growth."}
                  </li>
                </ul>
              </li>
              <li><strong>{"Scalable & Cost-Effective Logistics Solution"}</strong>
                <ul>
                  <li>{"The optimized system allowed for indefinite scaling, ensuring the company could process any number of orders without hitting logistical roadblocks."}
                  </li>
                  <li>{"Shipping costs remained low, as the solution relied on an existing postal network rather than expensive third-party couriers."}
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>{"Key Takeaways & Lessons Learned"}</h2>
            <ul>
              <li><strong>{"Understanding Vendor Constraints is Crucial"}</strong>
                <ul>
                  <li>{"Instead of pushing IndiaPost to change its workflow, aligning our system with their existing processes led to a smoother and more cooperative relationship."}
                  </li>
                </ul>
              </li>
              <li><strong>{"Automation & Process Optimization Drive Efficiency"}</strong>
                <ul>
                  <li>{"By eliminating manual tasks and reducing processing friction, businesses can scale without increasing operational costs."}
                  </li>
                </ul>
              </li>
              <li><strong>{"Customer Experience = Business Growth"}</strong>
                <ul>
                  <li>{"Faster, more reliable shipping directly impacted customer satisfaction, leading to higher retention, referrals, and revenue growth."}
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>{"Final Thoughts"}</h2>
            <p>{"This case study highlights how logistical challenges, even with government-operated services, can be solved with the right combination of technology, process optimization, and strategic alignment. The solution not only fixed immediate operational bottlenecks but also laid the foundation for long-term scalability and market expansion."}</p>
          </section>
        </div>
      </article>
      <Link className="text-link" href="/#contact">
        LET’S CONNECT <ArrowUpRight size={19} aria-hidden="true" />
      </Link>
    </main>
  );
}
